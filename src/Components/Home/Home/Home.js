import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import SideNavbar from "../../SideNavbar/SideNavbar";
import Header from "../Header/Header/Header";
import HomeMain from "../HomeMain/HomeMain";

const Home = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <SideNavbar></SideNavbar>
      <HomeMain></HomeMain>
    </div>
  );
};

export default Home;
