import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faPortrait } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import React, { useEffect } from "react";
import amazonImg from "../../Images/9d27ca-20180103-amazon-hq.jpg";
import rotorsCar from "../../Images/Screenshot (91).png";
import panguineFactions from "../../Images/Screenshot (113).png";
import footballClub from "../../Images/project-3.jpg";
import PortfolioDetls from "./PortfolioDetls/PortfolioDetls";
import hedlineImg from "../../Images/258381.png";
//////////////
import AOS from "aos";
import "aos/dist/aos.css";
/////////////
import "./Portfolio.css";
const protfilioDetails = [
  {
    id: 1,
    img: amazonImg,
    title: "Simple amazon shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],

    links: (
      <a href="https://github.com/raju10/Ema-Jhon-Simple-Project">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "25px" }} />
      </a>
    ),
    links2: (
      <a href="https://atomic-vault-308206.web.app/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
  {
    id: 2,
    img: rotorsCar,
    title: "Rotors Car",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
    links: (
      <a href="https://github.com/raju10/car-rotors-client-side">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "25px" }} />
      </a>
    ),
    links2: (
      <a href="https://rotors-car.web.app/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
  {
    id: 3,
    img: panguineFactions,
    title: "Doctors Portar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["HTML", "css", "Bootstrap"],
    links: (
      <a href="https://github.com/raju10/web-portfolio-1">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "25px" }} />
      </a>
    ),
    links2: (
      <a href="https://raju10.github.io/web-portfolio-1/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
  // {
  //   id: 4,
  //   img: footballClub,
  //   title: "Football club wibeside",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
  //   fitures: ["react", "nodejs", "mongodb"],
  //   links: (
  //     <a href="https://github.com/raju10/car-rotors-client-side">
  //       {" "}
  //       <FaGithub style={{ color: "white", fontSize: "25px" }} />
  //     </a>
  //   ),
  //   links2: (
  //     <a href="https://raju10.github.io/web-portfolio-1/">
  //       {" "}
  //       <FontAwesomeIcon
  //         icon={faChartLine}
  //         style={{ color: "white", fontSize: "20px" }}
  //       />
  //     </a>
  //   ),
  // },
  // {
  //   id: 5,
  //   img: footballClub,
  //   title: "Pin Matched",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
  //   fitures: ["react", "nodejs", "mongodb"],
  //   links: (
  //     <a href="https://github.com/raju10/car-rotors-client-side">
  //       {" "}
  //       <FaGithub style={{ color: "white", fontSize: "25px" }} />
  //     </a>
  //   ),
  //   links2: (
  //     <a href="https://raju10.github.io/web-portfolio-1/">
  //       {" "}
  //       <FontAwesomeIcon
  //         icon={faChartLine}
  //         style={{ color: "white", fontSize: "20px" }}
  //       />
  //     </a>
  //   ),
  // },
];
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="myProjects-container" id="protfilio">
      <div
        // data-aos="fade-right"
        className="protfilio-header container"
        style={{}}
      >
        <span>My Project</span>{" "}
        <FontAwesomeIcon
          icon={faPortrait}
          style={{
            float: "right",
            fontSize: "40px",
            color: "#db3d44",
          }}
        />
      </div>
      <div className="container">
        <div className="row" style={{ paddingTop: "60px" }}>
          {protfilioDetails.map((portfolio) => (
            <PortfolioDetls portfolio={portfolio}></PortfolioDetls>
          ))}
        </div>
        <div className="seeMore-btn">
          <button>
            <a href="https://github.com/raju10"> See More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
