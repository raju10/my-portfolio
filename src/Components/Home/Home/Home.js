import React, { useEffect } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import SideNavbar from "../../SideNavbar/SideNavbar";
import Header from "../Header/Header/Header";
import HomeMain from "../HomeMain/HomeMain";
import AboutMe from "../../AboutMe/AboutMe/AboutMe";
import MyProtfolio from "../../MyProtfolio/MyProtfolio/MyProtfolio";
import ContactMe from "../../ContactMe/ContactMe/ContactMe";
//////
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <SideNavbar></SideNavbar>
      <HomeMain></HomeMain>
      <AboutMe></AboutMe>
      <MyProtfolio></MyProtfolio>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
