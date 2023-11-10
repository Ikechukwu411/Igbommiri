import React from "react";
import "bulma/css/bulma.min.css";
import "../components/SecondSection.css";
import df from "../Images/hero2.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";

const SecondSection = () => {
  return (
    <React.Fragment>
      <section className="section second__sec">
        <div className=" has-text-centered mb-6">
          <h2 className="is-size-3-desktop is-size-5-mobile">
            Lorem, ipsum dolor sit amet consectetur
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            obcaecati?
          </p>
        </div>
        <div className="container">
          <div className="columns exhibition">
            <div className="column has-text-centered col">
              <figure>
                <img src={df} />
                <figcaption className="is-size-5 has-text-centered">
                  Lorem ipsum dolor sit amet.
                </figcaption>
              </figure>
              <button className="button is-outlined">
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
            <div className="column has-text-centered col">
              <figure>
                <img src={df} />
                <figcaption className="is-size-5 has-text-centered">
                  Lorem ipsum dolor sit amet.
                </figcaption>
              </figure>
              <button className="button is-outlined">
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </button>{" "}
            </div>
            <div className="column has-text-centered col">
              <figure>
                <img src={df} />
                <figcaption className="is-size-5 has-text-centered">
                  Lorem ipsum dolor sit amet.
                </figcaption>
              </figure>
              <button className="button is-outlined">
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecondSection;
