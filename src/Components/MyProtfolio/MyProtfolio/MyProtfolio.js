import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import rotorsCar from "../../../Images/Screenshot (91).png";
import doctorsPortar from "../../../Images/0 home page2.png";
import footballClub from "../../../Images/project-3.jpg";
import SideNavbar from "../../SideNavbar/SideNavbar";
import MyProtfolioDetls from "../MyProtfolioDetls/MyProtfolioDetls";
import "./MyProtfolio.css";
const protfilioDetails = [
  {
    img: rotorsCar,
    title: "Rotors Car",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
  },
  {
    img: doctorsPortar,
    title: "Doctors Portar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
  },
  {
    img: footballClub,
    title: "Football club wibeside",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
  },
];
const MyProtfolio = () => {
  return (
    <section>
      <SideNavbar></SideNavbar>
      <div className="aboutMe-container side">
        <div className="container ">
          <div className="protfilio-header">
            <span>My Project</span>{" "}
            <FontAwesomeIcon
              icon={faPortrait}
              style={{ float: "right", fontSize: "40px", color: "#db3d44" }}
            />
          </div>
          <div className="row d-flex align-items-center">
            {protfilioDetails.map((prtDtls) => (
              <MyProtfolioDetls prtDtls={prtDtls}></MyProtfolioDetls>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProtfolio;
