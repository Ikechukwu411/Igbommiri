import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "bulma/css/bulma.min.css";
import { Link, useParams } from "react-router-dom";
import IG1 from "../Images/IG1.jpg";
import IG2 from "../Images/Rail1.jpg";
import IG3 from "../Images/outdoor wpc deck tiles.jpg";
import IG4 from "../Images/Gum.png";
import Product1 from "../Images/product1.jpg";
import Product2 from "../Images/product2.jpg";
import Product3 from "../Images/product3.jpg";
import Product4 from "../Images/product4.jpg";
import Rail1 from "../Images/R2.jpg";
import Rail2 from "../Images/R3.jpg";
import Rail3 from "../Images/R4.jpg";
import Rail4 from "../Images/R5.jpg";
import Deck1 from "../Images/Deck1.jpg";
import Deck2 from "../Images/Deck2.jpg";
import Deck3 from "../Images/Deck3.jpg";
import Deck4 from "../Images/Deck4.jpg";

const products = [
  {
    name: "Uv Marble Sheets",
    id: 1,
    image: IG1,
    additionalImage: [IG4, IG4, IG4, IG4],
  },
  {
    name: "Fluted Panels",
    id: 2,
    image: IG2,
    additionalImage: [IG4, IG4, IG4, IG4],
  },
  {
    name: " Outdoor WPC Deck Tiles",
    id: 3,
    image: IG3,
    additionalImage: [IG4, IG4, IG4, IG4],
  },
  {
    name: "Silicone Adhersive Gel",
    id: 4,
    image: IG4,
    additionalImage: [IG4, IG4, IG4, IG4],
  },
];

const AnotherProduct = () => {
  const [name, setName] = useState("hello");
  const { id } = useParams();

  useEffect(() => {
    const singleProduct = products.find((product) => {
      return product.id === parseInt(id);
    });
    setName(singleProduct);
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="container mt-5">
          <div className="columns">
            <div className="column">
              <article>
                <img src={name.image} alt="" />
                {/* <h1 className="is-size-4">{name.name}</h1> */}
              </article>
            </div>
            <div className="column">
              <h3 className="is-size-3-desktop is-size-5-mobile has-text-weight-bold">
                {name.name}
              </h3>
              <div>
                <h4 className="is-size-5-desktop has-text-weight-bold">
                  Some Info About Product
                </h4>
                <p className="is-size-5-desktop">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, voluptatem! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Tempore, voluptatem! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempore, voluptatem! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Tempore,
                  voluptatem!
                </p>
                <div className="mt-3">
                  <button className="button mr-2">Back Home</button>
                  <button className="button">Shop Now</button>
                </div>
                <div className="columns is-mobile mt-4">
                  <div className="column">
                    <img src="../Images/igbo.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AnotherProduct;
