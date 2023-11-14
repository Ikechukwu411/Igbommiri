import React from "react";
import "bulma/css/bulma.min.css";
import "../components/FifthSection.css";
import display1 from "../Images/Rail1.jpg";
import display2 from "../Images/hero3.jpg";

const FifthSection = () => {
  return (
    <React.Fragment>
      <section className="section fifth__sectionbg">
        <div className="container">
          <h2 className="is-size-4 is-size-6-mobile">Our Products</h2>
          <div className="columns">
            <div className="column">
              <h1 className="is-size-2 is-size-4-mobile">
                Fluted Panels Redefining <br></br>Excellence
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, ipsa. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Labore, ipsa. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Labore, ipsa. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Labore, ipsa.
              </p>
              <button className="button mt-5">See All Products</button>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <img src={display1} alt="" width={250} />
                </div>
                <div className="column">
                  <img src={display2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FifthSection;
