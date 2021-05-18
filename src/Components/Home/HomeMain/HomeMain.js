import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import React from "react";
import myResume from "../../../Images/ariful2.pdf";
import "./HomeMain.css";
const HomeMain = () => {
  return (
    <section className="homemainContainer ">
      <div className="container ">
        <div
          data-aos="flip-left"
          className="d-flex justify-content-center align-items-center row herosaction"
          style={{ paddingTop: "20%" }}
        >
          <div className="col-md-8">
            <div className="side">
              <h4 style={{ color: "#DB3D44" }}>Hellow I'm</h4>
              <h1
                style={{
                  fontSize: "2.5rem",
                  color: "white",
                }}
              >
                Md. Ariful <big style={{ color: "#DB3D44" }}>Islam</big>
              </h1>
              <h5
                className="py-3  "
                style={{
                  color: "hsl(199deg 73% 97% / 71%)",
                  fontFamily: "monospace",
                }}
              >
                Joniour front-end and backend devloper
              </h5>
              <button className="resume-btn">
                <a href={myResume} download>
                  Resume
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-4 my-social">
            <div className="d-flex justify-content-center">
              <ul>
                <li>
                  <a href="https://github.com/raju10">
                    <FaGithub style={{ color: "white", fontSize: "2.5rem" }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ariful-islam-059082211/">
                    <FaLinkedin
                      style={{ color: "white", fontSize: "2.5rem" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/raju10">
                    <FaFacebookF
                      style={{ color: "white", fontSize: "2.5rem" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
