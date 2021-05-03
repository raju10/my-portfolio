import React, { useEffect } from "react";
import "./AboutMeDetails.css";
import myImg from "../../../Images/56649260_882064115459786_3794517985842954240_n.jpg";
///////////
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMeDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="aboutMe-container">
      <div
        style={{ paddingTop: "15%" }}
        className="d-flex justify-content-center  container"
      >
        <div className="row ">
          <div className="d-flex  align-items-center row">
            <div data-aos="fade-right" className="col-sm-8">
              <div className="">
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
                    I am a self-taught, passionate developer. I develop web
                    applications. My key skill in Javascript. I love to do make
                    most of the things using JavaScript. One of the good stuffs
                    as a self-taught web developer is that I have to find the
                    solution myself, which helps me learn more preciously.
                    During my learning process, I have developed numerous skills
                    and strengthened existing abilities, which would serve me
                    well. I can hone my aptitude in new skills very fast.
                  </p>
                  <button className="btn btn-success">More</button>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="col-sm-4">
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
