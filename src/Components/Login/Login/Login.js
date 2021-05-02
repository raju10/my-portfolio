import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";

import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import facebookLogo from "../../../Images/Facebook.png";
import googleLogo from "../../../Images/image8-2.jpg";
import githubLogo from "../../../Images/png-transparent-github-gitlab-computer-icons-logo-github.png";
import { UserContext } from "../../../App";
import "./Login.css";
firebase.initializeApp(firebaseConfig);

function Login() {
  const [newUser, setNewUser] = useState(false);

  const [users, setUsers] = useState({
    isSignInUser: false,
    email: "",
    photo: "",
    password: "",
    name: "",
    error: "",
    success: false,
  });
  console.log(users);

  const [loginUser, setLoginUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googlrProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  // sign in google
  const handelGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googlrProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;

        const signInUser = {
          isSignInUser: true,
          email: email,
          photo: photoURL,
          name: displayName,
        };
        setUsers(signInUser);
        setLoginUser(signInUser);
        history.replace(from);
        console.log("google", res.user);
        setUserToken();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("err", errorCode, errorMessage);
      });
  };
  ////====//
  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("tokens", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  ///======//
  // sign in with facebook
  const handelFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;

        var credential = result.credential;

        var accessToken = credential.accessToken;
        const signInUser = {
          isSignInUser: true,
          email: email,
          photo: photoURL,
          name: displayName,
        };
        setUsers(signInUser);
        setLoginUser(signInUser);
        history.replace(from);

        console.log("fb", result.user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        console.log("error fb", errorMessage, errorCode, email);
      });
  };
  // sign in with github
  const handelGitHubSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(gitHubProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        var credential = result.credential;
        var token = credential.accessToken;

        const signInUser = {
          isSignInUser: true,
          email: email,
          photo: photoURL,
          name: displayName,
        };
        setUsers(signInUser);
        setLoginUser(signInUser);
        history.replace(from);
        console.log("git hub", result.user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        var email = error.email;

        var credential = error.credential;
        console.log("git hub err", errorMessage, errorCode);
      });
  };

  ////////////////////////////////////////////

  const handelOnBlur = (e) => {
    console.log(e.target.name, e.target.value);

    let isFromValid = true;
    if (e.target.name === "email") {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      isFromValid = isEmailValid;
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length >= 6;
      const passwordHasNum = /\d{1}/.test(e.target.value);
      isFromValid = isPasswordValid && passwordHasNum;
    }
    if (isFromValid) {
      const newUserInfo = { ...users };
      newUserInfo[e.target.name] = e.target.value;
      setUsers(newUserInfo);
    }
  };

  ///////////////submit /////////////////////////

  ////// createUserWithEmailAndPassword //////////
  const handelSubmit = (e) => {
    console.log(users.name, users.email, users.password);

    if (newUser && users.email && users.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(users.email, users.password)
        .then((res) => {
          console.log(res);
          const newUserInfo = { ...users };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUsers(newUserInfo);
          setLoginUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          const newUserInfo = { ...users };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUsers(newUserInfo);
          console.log("sign up err", errorCode, errorMessage);
        });
    }
    /////////////////// SignIn With Email And Password ///////////////////////

    if (!newUser && users.email && users.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(users.email, users.password)
        .then((res) => {
          console.log(res);
          const newUserInfo = { ...users };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUsers(newUserInfo);
          setLoginUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          const newUserInfo = { ...users };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUsers(newUserInfo);

          console.log("sign in err", errorMessage, errorCode);
        });
    }
    e.preventDefault();
  };

  return (
    <div className="logIn-container">
      <h1>Create an account</h1>

      <form onSubmit={handelSubmit}>
        {newUser && (
          <input
            type="text"
            name="name"
            onBlur={handelOnBlur}
            placeholder="Your Name"
            required
          />
        )}
        <br />
        <input
          type="email"
          name="email"
          id=""
          onBlur={handelOnBlur}
          placeholder="Your email addres"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          onBlur={handelOnBlur}
          placeholder="Your password"
          required
        />
        <br />
        {newUser ? (
          <input
            type="submit"
            value="sign up"
            onClick={handelSubmit}
            className="btn btn-success"
          />
        ) : (
          <input
            type="submit"
            value="log in"
            onClick={handelSubmit}
            className="btn btn-primary"
          />
        )}
      </form>
      <input
        type="checkbox"
        name="newUser"
        onChange={() => setNewUser(!newUser)}
        id=""
        id="input-checkBox"
      />
      {newUser ? (
        <label htmlFor="newUser">alrady have an account ? please Log in</label>
      ) : (
        <label htmlFor="newUser">
          Don't have an account ? Create a new account
        </label>
      )}

      <p style={{ color: "red" }}>{users.error}</p>
      {users.success && (
        <p style={{ color: "green" }}>
          User {newUser ? "sign up" : "login"} Succesfully
        </p>
      )}

      <h5>or</h5>
      <button onClick={handelGoogleSignIn}>
        {" "}
        <img src={googleLogo} alt="" style={{ width: "50px" }} /> Continue with
        google
      </button>
      <br />
      <button onClick={handelFbSignIn}>
        <img src={facebookLogo} alt="" style={{ width: "50px" }} /> Continue
        with Facebook
      </button>
      <br />
      <button onClick={handelGitHubSignIn}>
        <img src={githubLogo} alt="" style={{ width: "50px" }} /> Continue with
        git hub
      </button>
    </div>
  );
}

export default Login;
