import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faBook,
  faEnvelope,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { Link as Goto } from "react-scroll";
////////////////
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
///////////////
const SideNavBar = () => {
  return (
    <div>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
              <Link to="/home">
                {" "}
                <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/home">Home</Link>
            </NavText>
          </NavItem>
          {/*  */}

          <NavItem eventKey="aboutMe">
            <NavIcon>
              <Goto to="aboutMe" smooth={true} duration={200}>
                {" "}
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.75em" }} />
              </Goto>
            </NavIcon>{" "}
            <NavText>
              {" "}
              <Goto to="aboutMe" smooth={true} duration={200}>
                about me
              </Goto>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="protfolio">
            <NavIcon>
              <Goto to="protfilio" smooth={true} duration={500}>
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ fontSize: "1.75em" }}
                />
              </Goto>
            </NavIcon>
            <NavText>
              {" "}
              <Goto to="protfilio" smooth={true} duration={500}>
                Project
              </Goto>
            </NavText>
          </NavItem>
          {/*  */}
          <NavItem eventKey="blog">
            <NavIcon>
              <Goto to="blog" smooth={true} duration={700}>
                {" "}
                <FontAwesomeIcon icon={faBook} style={{ fontSize: "1.75em" }} />
              </Goto>
            </NavIcon>
            <NavText>
              {" "}
              <Goto to="blog" smooth={true} duration={700}>
                Blog
              </Goto>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="contactMe">
            <NavIcon>
              <Goto to="contactMe" smooth={true} duration={1000}>
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "1.75em" }}
                />
              </Goto>
            </NavIcon>
            <NavText>
              {" "}
              <Goto to="contactMe" smooth={true} duration={1000}>
                contact me
              </Goto>
            </NavText>
          </NavItem>
          {/*  */}
          {/* <NavItem eventKey="charts">
            <NavIcon>
              <Link to="/testimonial">
                {" "}
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              <Link to="/testimonial">Testimonial</Link>
            </NavText>
            
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default SideNavBar;
