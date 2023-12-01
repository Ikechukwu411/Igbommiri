import React from "react";
import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Product = ({ name, id, image }) => {
  return (
    <React.Fragment>
      <article
        style={{
          backgroundColor: "white",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
        }}
        className="has-text-centered pb-3"
      >
        <img src={image.url} alt="" />
        <h1 className="has-text-weight-bold">{name}</h1>
        <Link to={`/product/${id}`} className="button is-responsive">
          Shop Now <AiOutlineArrowRight />
        </Link>
      </article>
    </React.Fragment>
  );
};

export default Product;
