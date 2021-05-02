import React from "react";
import "./HomeMain.css";
import myResume from "../../../Images/new2.pdf";
const HomeMain = () => {
  return (
    <section className="homemainContainer">
      <div
        style={{ paddingTop: "15%" }}
        className="d-flex justify-content-center  container"
      >
        <div className="row ">
          <div className="d-flex  align-items-center row">
            <div className="col-sm-8">
              <div className="d-flex justify-content-center">
                <div className=" side w-75">
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
                <div>
                  <ul>
                    <li>
                      <a href="#">github</a>
                    </li>
                    <li>
                      <a href="#">github</a>
                    </li>
                    <li>
                      <a href="#">github</a>
                    </li>
                    <li>
                      <a href="#">github</a>{" "}
                    </li>
                    <li>
                      <a href="#">github</a>
                    </li>
                    <li>
                      <a href="#">github</a>{" "}
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
