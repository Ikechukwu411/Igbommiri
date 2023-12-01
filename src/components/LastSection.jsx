import React from "react";
import IGBO from "../Images/Logo.png";
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
            <Link
              to="/"
              className="navbar-item has-text-weight-bold"
              style={{ color: "#01070f" }}
            >
              <p className="">IGBOMMIRI GLOBAL RESOURCES</p>
              <img src={IGBO} alt="" />
            </Link>
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
              <li>
                <Link to="/allproduct">Carbon Crystal Mirror Board</Link>
              </li>
              <li>
                <Link to="/allproduct">Stone Panel</Link>
              </li>
              <li>
                <Link to="/allproduct">UV Matt Sheet</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">Company</h3>
            <ul>
              <li>
                <p>
                  Igbommiri Global Resources Better Way And Beyond Standard.
                  <br></br>#1 Prince Joseph Adebayo Street, Parkview Estate by
                  Kilimanjaro, Ago Palace Way Amuwo,Lagos,Nigeria
                  <br></br> +234 814 737 4095 <br></br>Email:
                  igbommiriglobalresources@gmail.com
                </p>
              </li>
            </ul>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">Socials</h3>
            <ul>
              <li>
                <Link to="https://web.facebook.com/people/IgboMmiri-Global-Resources/100089533705424/">
                  <FaFacebook color="#0E87ED" size={30} />
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/2348147374095">
                  <FaWhatsappSquare color="#46C254" size={30} />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/igbommiri_global_resources/?hl=en">
                  <FaInstagramSquare color="#9C35B1" size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; 2023 Igbommiri Global Resources. All rights reserved.</p>
        <p>Designed by Duke</p>
      </footer>
    </React.Fragment>
  );
};

export default LastSection;
