import React from "react";
import "bulma/css/bulma.min.css";
import "../components/ThirdSection.css";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import { Link } from "react-router-dom";

const ThirdSection = () => {
  return (
    <React.Fragment>
      <section className="section ThirdSection_bg">
        <div className="columns">
          <div className="column">
            {/* <Link to="/allproduct" className="button p-5">
              <span>See More</span>
              <span>
                <AiOutlineArrowRight size={20} />
              </span>
            </Link> */}
          </div>
          {/* <div className="column Engage has-text-centered">
            <h2 className="is-size-3 is-size-5-mobile">
              Fluted Panels: Sculpting Spaces with Elegance
            </h2>
            <p className="is-size-6-mobile">
              Fluted panels stand as the epitome of architectural finesse,
              harmoniously blending form and function within interior design.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ThirdSection;
