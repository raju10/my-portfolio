import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faPortrait } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import basicJavaScript from "../../../Images/1_NmtnDAstyYddjnwq5CPbRA.jpeg";
import reactFundamantalConcept from "../../../Images/1_fvGapKhj3D9sxW-OyVYV5Q.png";
import topJSinterviewQuestion from "../../../Images/Javascript-Interview-Questions.jpg";
import BlogDetls from "../BlogDetls/BlogDetls";

const blogDetails = [
  {
    id: 1,
    img: basicJavaScript,
    title: "Basic Javascript",
    description:
      "Here are some simple ideas about the basic concept of JavaScript. Here is an example of JavaScript's basic to basic core fundamentals",

    links: (
      <a href="https://arifulislamraju00.medium.com/basic-javascript-4f58a33b5e84">
        Read More
      </a>
    ),
  },
  {
    id: 2,
    img: reactFundamantalConcept,
    title: "React core basic fundamental concept",
    description:
      "React's core basics are given some fundamentals in my blog. Please come back later",

    links: (
      <a href="https://arifulislamraju00.medium.com/react-core-basic-fundamental-concept-42bd97dc1a63">
        Read More
      </a>
    ),
  },
  {
    id: 3,
    img: topJSinterviewQuestion,
    title: "Top basic interview question in javascript",
    description:
      "Here are some light ideas about some of the best basic JavaScript interview questions.",

    links: (
      <a href="https://arifulislamraju00.medium.com/top-basic-interview-question-in-javascript-ca3259355e42">
        Read More
      </a>
    ),
  },
];
const Blog = () => {
  return (
    <div style={{ background: "black", paddingBottom: "20%" }} id="blog">
      <div
        // data-aos="fade-right"
        className="protfilio-header container"
        style={{}}
      >
        <span>Blogs</span>{" "}
        <FontAwesomeIcon
          icon={faPortrait}
          style={{
            float: "right",
            fontSize: "40px",
            color: "#db3d44",
          }}
        />
      </div>
      <div className="container" style={{ paddingTop: "50px" }}>
        <div className="row">
          {blogDetails.map((blog) => (
            <BlogDetls blog={blog}></BlogDetls>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
