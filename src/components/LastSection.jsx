import React from "react";
import IGBO from "../Images/igbo-removebg-preview.png";
import "../components/LastSection.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const LastSection = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <img src={IGBO} alt="" />
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">All Products</h3>
            <ul>
              <li>
                <Link to="/allproduct">UV marble sheets</Link>
              </li>
              <li>
                <Link to="/allproduct">Fluted Panels</Link>
              </li>
              <li>
                <Link to="/allproduct">Silicon Adhersive Gel</Link>
              </li>
              <li>
                <Link to="/allproduct">Outdoor WPC Deck Tiles</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">Company</h3>
            <ul>
              <li>
                <Link to="/allproduct">Okota, Lagos</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">Socials</h3>
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaWhatsappSquare />.
              </li>
              <li>
                <FaInstagramSquare />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default LastSection;
