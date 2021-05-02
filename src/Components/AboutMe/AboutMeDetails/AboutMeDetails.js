import React from "react";
import "./AboutMeDetails.css";
import myImg from "../../../Images/56649260_882064115459786_3794517985842954240_n.jpg";
const AboutMeDetails = () => {
  return (
    <section className="aboutMe-container">
      <div
        style={{ paddingTop: "15%" }}
        className="d-flex justify-content-center  container"
      >
        <div className="row ">
          <div className="d-flex  align-items-center row">
            <div className="col-sm-8">
              <div className="d-flex justify-content-center">
                <div className=" side w-75">
                  <h1
                    style={{
                      fontSize: "2em",
                      color: "#DB3D44",
                      textTransform: "initial",
                    }}
                  >
                    About me
                  </h1>
                  <p className="py-3 text-secondary ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae illo officia corrupti itaque voluptatum veritatis,
                    iusto ipsam maxime nobis magni Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                  <button className="btn btn-success">More</button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-flex justify-content-center">
                <div className=" sideImg w-75">
                  <img src={myImg} alt="" className="w-75 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeDetails;
