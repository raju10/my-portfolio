import React from "react";
import "./PortdolioDetls.css";
const PortfolioDetls = ({ portfolio }) => {
  console.log(portfolio);
  return (
    <div
      data-aos="fade-up"
      className="col-xl-4 col-sm-12 col-md-6 portfolio-detls-container"
      style={{ height: "500px", padding: "20px" }}
    >
      <img
        src={portfolio.img}
        alt=""
        style={{ width: "100%", height: "200px" }}
      />
      <div className="protfilio-detls">
        <h3 style={{ color: "white" }}>{portfolio.title}</h3>
        <p style={{ color: "#8a8d90" }}>{portfolio.description}</p>
        <div className="d-block " style={{ padding: "22px 0px" }}>
          <small style={{ paddingRight: "20px " }}>{portfolio.links}</small>
          <small>{portfolio.links2}</small>
        </div>

        {portfolio.fitures.map((fith) => (
          <span
            style={{
              padding: " 4px 8px",
              backgroundColor: "#db3d44",
              color: "white",
              fontWeight: "500",
              borderRadius: "5px",
              marginLeft: "8px",
            }}
          >
            {fith}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetls;
