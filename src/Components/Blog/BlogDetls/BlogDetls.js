import React from "react";
import "./BlogDetls.css";
const BlogDetls = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="col-xl-4 col-sm-12 col-md-6 portfolio-detls-container"
      style={{ height: "500px", padding: "20px" }}
    >
      <img src={blog.img} alt="" style={{ width: "100%", height: "200px" }} />
      <div className="protfilio-detls">
        <h3 style={{ color: "white" }}>{blog.title}</h3>
        <p style={{ color: "#8a8d90" }}>{blog.description}</p>

        <button className="blog-button">{blog.links}</button>
      </div>
    </div>
  );
};

export default BlogDetls;
