import React from "react";
import IGBO from "../Images/igbo-removebg-preview.png";
import "../components/LastSection.css";

const LastSection = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <img src={IGBO} alt="" />
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
            <p>Design by Duke🎇</p>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">All Products</h3>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">Company</h3>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="column">
            <h3 className="has-text-weight-bold">Resources</h3>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default LastSection;
