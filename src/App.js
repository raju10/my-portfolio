import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import AboutMe from "./Components/AboutMe/AboutMe/AboutMe";
import MyProtfolio from "./Components/MyProtfolio/MyProtfolio/MyProtfolio";
import ContactMe from "./Components/ContactMe/ContactMe/ContactMe";
import { Testimonial } from "./Components/Testimonial/Testimonial/Testimonial";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Blog from "./Components/Blog/Blog/Blog";

export const UserContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutMe">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/protfilio">
            <MyProtfolio></MyProtfolio>
          </Route>
          <Route path="/contactMe">
            <ContactMe></ContactMe>
          </Route>
          <PrivateRoute path="/testimonial">
            <Testimonial></Testimonial>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={(selected) => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Home</NavText>
                    </NavItem>
                    {/* <NavItem eventKey="devices">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-device"
                          style={{ fontSize: "1.75em" }}
                        />
                      </NavIcon>
                      <NavText>Devices</NavText>
                    </NavItem> */}
                  </SideNav.Nav>
                </SideNav>
                <main>
                  {/* <Route path="/" exact component={props => <RootComponent />} /> */}
                  <Route path="/home" component={(props) => <Home />} />
                  {/* <Route path="/devices" component={props => <Devices />} /> */}
                </main>
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
