import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "../components/SecondSection.css";
import df from "../Images/hero2.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import IG1 from "../Images/IG1.jpg";
import IG2 from "../Images/Rail1.jpg";
import IG3 from "../Images/outdoor wpc deck tiles.jpg";
import Gum from "../Images/Gum.png";

const SecondSection = () => {
  return (
    <React.Fragment>
      <section className="section second__sec">
        <div className=" has-text-centered mb-6">
          <h2 className="is-size-3-desktop is-size-5-mobile">Our Products </h2>
          {/* <p>
            Highlighting their laminate construction and marble-like appearance.
          </p> */}
        </div>
        <div className="container">
          <div className="columns exhibition">
            <div className="column has-text-centered col">
              <figure>
                <img src={IG1} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  UV Marble sheets
                </figcaption>
              </figure>
              <Link to="/allproduct" className="button is-outlined">
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered col">
              <figure>
                <img src={IG2} width={300} />
                <figcaption className="is-size-5 has-text-centered">
                  Fluted Panels
                </figcaption>
              </figure>
              <Link to="/allproduct" className="button is-outlined">
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>{" "}
            </div>
            <div className="column has-text-centered col">
              <figure>
                <img src={Gum} width={270} />
                <figcaption className="is-size-5 has-text-centered">
                  Silicone Adhersive Gel
                </figcaption>
              </figure>
              <Link to="/allproduct" className="button is-outlined">
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered col">
              <figure>
                <img src={IG3} width={270} />
                <figcaption className="is-size-5 has-text-centered">
                  Outdoor WPC Deck Tiles
                </figcaption>
              </figure>
              <Link to="/allproduct" className="button is-outlined">
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecondSection;
