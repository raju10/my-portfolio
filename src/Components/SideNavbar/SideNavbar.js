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
// import { NavItem } from 'react-bootstrap';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";
const SideNavbar = () => {
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
              <Link to="/aboutMe">
                {" "}
                <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>{" "}
            <NavText>
              {" "}
              <Link to="/aboutMe">about me</Link>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="protfolio">
            <NavIcon>
              <Link to="/protfilio">
                {" "}
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/protfilio">Project</Link>
            </NavText>
          </NavItem>
          {/*  */}
          <NavItem eventKey="blog">
            <NavIcon>
              <Link to="/blog">
                {" "}
                <FontAwesomeIcon icon={faBook} style={{ fontSize: "1.75em" }} />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/blog">Blog</Link>
            </NavText>
          </NavItem>

          {/*  */}
          <NavItem eventKey="contactMe">
            <NavIcon>
              <Link to="/contactMe">
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "1.75em" }}
                />
              </Link>
            </NavIcon>
            <NavText>
              {" "}
              <Link to="/contactMe">contact me</Link>
            </NavText>
          </NavItem>
          {/*  */}
          <NavItem eventKey="charts">
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
            {/* <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem> */}
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default SideNavbar;
