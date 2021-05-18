import React from "react";
import myImg from "../../Images/56649260_882064115459786_3794517985842954240_n.jpg";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <section className="aboutMe-container " id="aboutMe">
      <div className="container">
        <div className="row ">
          <div data-aos="fade-right" className="col-md-8">
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
              applications. My key skill in Javascript. I love to do make most
              of the things using JavaScript. One of the good stuffs as a
              self-taught web developer is that I have to find the solution
              myself, which helps me learn more preciously. During my learning
              process, I have developed numerous skills and strengthened
              existing abilities, which would serve me well. I can hone my
              aptitude in new skills very fast.
            </p>
            <button className="resume-btn">
              <a href="https://github.com/raju10">More</a>
            </button>
          </div>
          <div data-aos="fade-up" className="col-md-3">
            <div className="d-flex justify-content-center">
              <img src={myImg} alt="" style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
