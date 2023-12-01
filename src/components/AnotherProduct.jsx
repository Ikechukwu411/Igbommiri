import React, { useState, useEffect } from "react";
import LastSection from "../components/LastSection";
import "../components/AnotherProduct.css";
import Navbar from "./Navbar";
import "bulma/css/bulma.min.css";

import { Link, useParams } from "react-router-dom";
import logo from "../Images/igbo.png";
import { FaTruck } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import TabComponent from "./TabComponent";
import { productimages } from "./Productimages";
import { ProductData } from "./ProductData";

const AnotherProduct = () => {
  const [product, setProduct] = useState({});
  const [data, setData] = useState(productimages);
  const [value, setValue] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const singleProduct = ProductData.find((product) => {
      return product.id === parseInt(id);
    });
    setProduct(singleProduct);
  }, [id]);
  console.log(product);

  const { mainImage } = data[value];

  return (
    <React.Fragment>
      <Navbar />
      <section className="section py-6 is-hidden-mobile">
        <nav className="breadcrumb is-left pt-5" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allproduct">Other Product</Link>
            </li>
            <li className="is-active">
              <Link href="#" aria-current="page">
                Uv Marble Sheets
              </Link>
            </li>
          </ul>
        </nav>
        <h2
          className="is-size-3-desktop is-size-5-mobile has-text-weight-bold"
          style={{ color: "black" }}
        >
          {product.name}
        </h2>
      </section>
      <div className="section" style={{ backgroundColor: "#F2F2F2" }}>
        <div
          className="container"
          style={{
            backgroundColor: "white",
            padding: "1rem",
            boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
          }}
        >
          <div className="columns is-gapless mt-4">
            <div className="column ml-4-desktop">
              <article>
                <div className="productContainer">
                  <img src={mainImage} alt="" />
                </div>
                <ul className="is-flex is-flex-wrap-no-wrap is-justify-content-flex-start">
                  {data.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          setValue(index);
                        }}
                        className={`mr-2 ${index === value && "color"}`}
                      >
                        <img
                          src={item.thumbnail}
                          alt=""
                          width={70}
                          style={{ borderRadius: "5px" }}
                        />{" "}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </div>
            <div className="column mt-5-mobile" style={{ color: "black" }}>
              <article className="mt-5">
                <img src={logo} alt="" />
                <h2 className="is-size-3-desktop is-size-5-mobile has-text-weight-semibold">
                  {product.name}
                </h2>
                <p>Product Code: {product.productCode}</p>
                <p>Brand: {product.brand}</p>
                <hr></hr>
                <h2 className="is-size-4-desktop is-size-5-mobile has-text-weight-semibold">
                  {product.price}
                </h2>
                <hr />
                <h3 className="has-text-weight-bold">Description:</h3>
                <p>{product.des}</p>
                <div
                  className="p-2 mt-3"
                  style={{ backgroundColor: "#FEF2F9" }}
                >
                  <p>Call Us For Bulk Purchases:</p>
                  <p>0703445456677</p>
                </div>
                <button
                  className="button mt-3 p-2"
                  style={{
                    width: "50%",
                    backgroundColor: "#33B27B",
                    color: "white",
                  }}
                >
                  {" "}
                  Buy Now
                </button>
                <hr />
                <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between">
                  <p>
                    <FaTruck size={25} className="mr-2" color="#F357AA" />
                    Pick Up & Pay on collection available
                  </p>
                  <p>
                    <FaWarehouse size={25} className="mr-2" color="#F357AA" />
                    Igbommiri warehouse
                  </p>
                  <p>
                    <TbTruckDelivery
                      size={25}
                      className="mr-2"
                      color="#F357AA"
                    />
                    Delivery
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section "
        style={{ backgroundColor: "#F2F2F2", marginTop: "-3.5rem" }}
      >
        <div
          className="container is-flex"
          style={{
            backgroundColor: "white",
            padding: "1rem",
            boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
          }}
        >
          <p>Sold By</p>
          <img src={logo} />
        </div>
      </div>
      <TabComponent />
      <LastSection />
    </React.Fragment>
  );
};

export default AnotherProduct;
