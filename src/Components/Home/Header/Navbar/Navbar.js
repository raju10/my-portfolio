import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ background: "lightGray" }}
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link mr-5 active" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mr-5 text-white" to="/admain">
                Admain
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mr-5 text-white" to="#">
                contact us
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mr-5 text-white" to="/login">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
