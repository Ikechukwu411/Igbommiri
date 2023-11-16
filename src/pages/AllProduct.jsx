import React from "react";
import Navbar from "../components/Navbar";
// import image2 from "../Images/Rail1.jpg";
import "../components/SixSection.css";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import product4 from "../Images/product4.jpg";
import product5 from "../Images/product5.jpg";
import R1 from "../Images/R1.jpg";
import R2 from "../Images/R2.jpg";
import R3 from "../Images/R3.jpg";
import R4 from "../Images/R4.jpg";
import R5 from "../Images/R5.jpg";
import GUM from "../Images/Gum.png";
import Deck1 from "../Images/Deck1.jpg";
import Deck2 from "../Images/Deck2.jpg";
import Deck3 from "../Images/Deck3.jpg";
import Deck4 from "../Images/Deck4.jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllProduct = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section sixthsection__bg">
        <div className="container">
          <h2 className="is-size-2 has-text-centered mt-5 mb-5">
            All Products
          </h2>
          <div className="columns is-mobile">
            <div className="column has-text-centered ">
              <figure>
                <img src={product1} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  UV Marble sheets
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-responsive is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered ">
              <figure>
                <img src={product2} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  UV Marble sheets
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-responsive  is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={product3} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  UV Marble sheets
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={product4} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  UV Marble sheets
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={product5} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  UV Marble sheets
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            {/* <div className="column">
              <img src={image2} alt="" />
            </div>
            <div className="column is-hidden-mobile">
              <img src={image2} alt="" />
            </div> */}
          </div>
          <div className="columns is-mobile">
            <div className="column has-text-centered ">
              <figure>
                <img src={R1} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Fluted Panels
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-responsive is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered ">
              <figure>
                <img src={R2} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Fluted Panels
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-responsive  is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={R3} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Fluted Panels
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={R4} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Fluted Panels
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={R5} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Fluted Panels
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            {/* <div className="column">
              <img src={image2} alt="" />
            </div>
            <div className="column is-hidden-mobile">
              <img src={image2} alt="" />
            </div> */}
          </div>
          <div className="columns is-mobile">
            <div className="column has-text-centered ">
              <figure>
                <img src={GUM} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Silicon Adhersive Gel
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-responsive is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered ">
              <figure>
                <img src={Deck1} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Outdoor WPC Deck Tiles
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-responsive  is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={Deck2} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Outdoor WPC Deck Tiles
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={Deck3} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Outdoor WPC Deck Tiles
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <figure>
                <img src={Deck4} width={250} />
                <figcaption className="is-size-5 has-text-centered">
                  Outdoor WPC Deck Tiles
                </figcaption>
              </figure>
              <Link
                to="https://wa.me/2348147374095"
                className="button is-outlined"
              >
                Shop Now{" "}
                <span className="ml-2 mt-1">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            {/* <div className="column">
              <img src={image2} alt="" />
            </div>
            <div className="column is-hidden-mobile">
              <img src={image2} alt="" />
            </div> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AllProduct;
