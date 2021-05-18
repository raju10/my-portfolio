import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
//////////////
import AOS from "aos";
import "aos/dist/aos.css";
/////////////
const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iiluu9r",
        "template_9d4l0pq",
        e.target,
        "user_o8Tv2LDlheDIOO91GunSi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className="contactMe-container" id="contactMe">
      <div className="container">
        <div
          // data-aos="flip-down"
          className="protfilio-header"
        >
          <span>Contact Me</span>{" "}
          <FontAwesomeIcon
            icon={faPortrait}
            style={{
              float: "right",
              fontSize: "40px",
              color: "#db3d44",
            }}
          />
        </div>
        <div className="row contactUs-Details">
          <div
            data-aos="fade-right"
            className="col-sm-7"
            style={{ paddingTop: "70px", paddingRight: "10%" }}
          >
            <h3 style={{ color: "#ffffffd9", fontFamily: "monospace" }}>
              I will love to talk with. Send me email or <br /> DM me on my
              social media
            </h3>
            <h5 style={{ color: "#80808087" }}>
              Email : arifulislamraju00@gmail.com
            </h5>
          </div>
          <div
            data-aos="fade-up"
            className="col-sm-5"
            style={{ paddingTop: "30px" }}
          >
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" required />
              <label style={{ color: "#a9a9a9" }}>Name</label>

              <input
                type="text"
                name="user_name"
                className="form-control w-100"
                required
                placeholder="Name"
              />
              <br />
              <label style={{ color: "#a9a9a9" }}>Email</label>

              <input
                type="text"
                name="user_email"
                className="form-control w-100"
                placeholder="Email"
                required
              />
              <br />
              <label style={{ color: "#a9a9a9" }}>Message</label>

              <textarea
                name="message"
                className="form-control w-100"
                placeholder="Massage"
                required
              />
              <br />
              <input type="submit" value="Send" className="send-buttton" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
