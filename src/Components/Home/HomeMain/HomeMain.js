import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import "./HomeMain.css";
import myResume from "../../../Images/new2.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import facebookLogo from "../../../Images/Facebook.png";
import googleLogo from "../../../Images/image8-2.jpg";
import githubLogo from "../../../Images/png-transparent-github-gitlab-computer-icons-logo-github.png";
import linkIn from "../../../Images/637519_linkedin-logo-linked-in-logo-transparent-hd-png.png";
const HomeMain = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="homemainContainer">
      <div style={{}} className="d-flex justify-content-center  container">
        <div
          data-aos="flip-left"
          className="row "
          style={{ paddingTop: "16%" }}
        >
          <div className="d-flex  align-items-center row">
            <div className="col-sm-8">
              <div className="d-flex justify-content-center align-items-center">
                <div className=" side ">
                  <h4 style={{ color: "#DB3D44" }}>Hellow I'm</h4>
                  <h1
                    style={{
                      fontSize: "2.5em",
                      color: "white",
                      textTransform: "initial",
                    }}
                  >
                    Md. Ariful <big style={{ color: "#DB3D44" }}>Islam</big>
                  </h1>
                  <p className="py-3 text-secondary ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae illo officia corrupti itaque voluptatum veritatis,
                    iusto ipsam maxime nobis magni Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Delectus dolorem nihil
                    repellendus itaque, modi nisi, iste soluta est tenetur
                    eveniet nostrum.
                  </p>
                  <button className="resume-btn">
                    <a href={myResume} download>
                      Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-flex justify-content-center">
                <div className="my-social">
                  <ul>
                    <li>
                      <a href="https://github.com/raju10">
                        <img
                          src={githubLogo}
                          alt=""
                          style={{ width: "50px" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ariful-islam-059082211/">
                        <img src={linkIn} alt="" style={{ width: "50px" }} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/raju10">
                        <img
                          src={facebookLogo}
                          alt=""
                          style={{ width: "60px" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
