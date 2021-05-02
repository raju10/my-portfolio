import React from "react";
import "./MyProtfolioDetls.css";
///////

////
const MyProtfolioDetls = ({ prtDtls }) => {
  return (
    <div className="col-md-4 mt-3">
      <div className="protfolio-detls-container">
        <img
          src={prtDtls.img}
          alt=""
          style={{ width: "100%", height: "130px" }}
        />
        <div className="protfilio-detls">
          <h3 style={{ color: "white" }}>{prtDtls.title}</h3>
          <p style={{ color: "white" }}>{prtDtls.description}</p>

          {prtDtls.fitures.map((fith) => (
            <span>{fith}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProtfolioDetls;
