import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "../components/SecondSection.css";
import df from "../Images/hero2.jpeg";
// import { AiOutlineArrowRight } from "react-icons/ai";
import IG1 from "../Images/IG1.jpg";
import IG2 from "../Images/Rail1.jpg";
import IG3 from "../Images/outdoor wpc deck tiles.jpg";
import Gum from "../Images/Gum.png";
import IG5 from "../Images/mirror board1.jpg";
import IG6 from "../Images/stonepanel2.jpg";
import IG7 from "../Images/UV marble sheet.jpg";
import Product from "./Product";

const products = [
  {
    name: "Uv Marble Sheets",
    id: 1,
    image: {
      url: IG1,
    },
  },
  {
    name: "Fluted Panels",
    id: 2,
    image: {
      url: IG2,
    },
  },
  {
    name: " Outdoor WPC Deck Tiles",
    id: 3,
    image: {
      url: IG3,
    },
  },
  {
    name: "Silicone Adhersive Gel",
    id: 4,
    image: {
      url: Gum,
    },
  },
  {
    name: "Carbon Crystal Mirror Board",
    id: 5,
    image: {
      url: IG5,
    },
  },
  {
    name: "Stone Panel",
    id: 6,
    image: {
      url: IG6,
    },
  },
  {
    name: "UV Matt Sheet",
    id: 7,
    image: {
      url: IG7,
    },
  },
];

const SecondSection = () => {
  const [data, setData] = useState(products);
  return (
    <React.Fragment>
      <section className="section second__sec">
        <div className=" has-text-centered mb-6">
          <h2 className="is-size-3-desktop is-size-5-mobile has-text-weight-bold">
            Our Products{" "}
          </h2>
        </div>
        <div className="container">
          <div className="columns">
            {data.map((product) => {
              return (
                <div key={product.id} className="column">
                  <Product {...product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SecondSection;
