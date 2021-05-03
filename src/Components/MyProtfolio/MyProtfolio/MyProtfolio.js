import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import rotorsCar from "../../../Images/Screenshot (91).png";
import doctorsPortar from "../../../Images/0 home page2.png";
import footballClub from "../../../Images/project-3.jpg";
import SideNavbar from "../../SideNavbar/SideNavbar";
import MyProtfolioDetls from "../MyProtfolioDetls/MyProtfolioDetls";
import "./MyProtfolio.css";
import bgImg from "../../../Images/pexels-photo-2387793.jpeg";
////////
import AOS from "aos";
import "aos/dist/aos.css";
////////////////
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
//////////
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);
////
const protfilioDetails = [
  {
    id: 1,
    img: rotorsCar,
    title: "Rotors Car",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
  },
  {
    id: 2,
    img: doctorsPortar,
    title: "Doctors Portar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
  },
  {
    id: 3,
    img: footballClub,
    title: "Football club wibeside",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
  },
  {
    id: 4,
    img: footballClub,
    title: "Pin Matched",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
  },
];
const MyProtfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section>
      <SideNavbar></SideNavbar>
      {/* <div className="aboutMe-container side">
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
      </div> */}
      <div className="myProjects-container">
        <div data-aos="fade-up" className="container ">
          <div className="protfilio-header">
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
          <div className="row d-flex align-items-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
              <div>
                {protfilioDetails.map((projects) => (
                  <SwiperSlide key={projects.id}>
                    <div style={{ paddingTop: "50px" }} className="col-md-5">
                      <div>
                        <img
                          src={projects.img}
                          alt=""
                          style={{ width: "100%", height: "200px" }}
                        />
                        <div className="protfilio-detls">
                          <h3 style={{ color: "white" }}>{projects.title}</h3>
                          <p style={{ color: "white" }}>
                            {projects.description}
                          </p>

                          {projects.fitures.map((fith) => (
                            <span>{fith}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              {/* //////////////////// */}
              {/* <div className="aboutMe-container side">
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
          </div> */}
              {/* //////////////////////////// */}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProtfolio;
