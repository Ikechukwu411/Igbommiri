import React from "react";
import Image2 from "../Images/discount1.jpg";
import "../components/SixSection.css";

const SixSection = () => {
  return (
    <React.Fragment>
      <section className="section sixthsection__bg">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-2 mt-5">Service Packages & Offers</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                suscipit, ab explicabo quos excepturi voluptates ad illo totam
                quae possimus?
              </p>
              <button className="button">Shop Now</button>
            </div>
            <div className="column">
              <img src={Image2} alt="" width={450} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SixSection;
