import React from "react";
import "bulma/css/bulma.min.css";
import "../components/ThirdSection.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const ThirdSection = () => {
  return (
    <React.Fragment>
      <section className="section ThirdSection_bg">
        <div className="columns">
          <div className="column">
            <button className="button p-5">
              <span>See More</span>
              <span>
                <AiOutlineArrowRight size={50} />
              </span>
            </button>
          </div>
          <div className="column Engage has-text-centered">
            <h2 className="is-size-3">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              quibusdam vitae odio ad numquam iure exercitationem repellat
              beatae inventore. Quia.
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ThirdSection;
