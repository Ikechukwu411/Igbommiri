import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import IgboMmiri from "../Images/Logo.png";
import "../components/Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <nav className="navbar has-shadow  is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <p>IGBOMMIRI</p>
              <img src={IgboMmiri} alt="" />
            </Link>

            <a
              role="button"
              className={`navbar-burger ${isActive ? "is-active" : ""}`}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item" style={{ color: "#01070f" }}>
                Home
              </Link>
              <Link
                to="/about"
                className="navbar-item"
                style={{ color: "#01070f" }}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="navbar-item"
                style={{ color: "#01070f" }}
              >
                Contact
              </Link>
              <Link
                to="/allproduct"
                className="navbar-item"
                style={{ color: "#01070f" }}
              >
                AllProduct
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
