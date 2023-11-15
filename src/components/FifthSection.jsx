import React, { useEffect } from "react";
import "bulma/css/bulma.min.css";
import "../components/FifthSection.css";
import display1 from "../Images/Package1.jpg";
import display2 from "../Images/package2.jpg";
import display3 from "../Images/Nationwide-removebg-preview.png";
import display4 from "../Images/cargo2.jpg";
import display5 from "../Images/cargo3.jpg";

const FifthSection = () => {
  useEffect(() => {
    const img = document.getElementById("img");
    const imgs = document.querySelectorAll("#img img");
    let idx = 0;
    const screenWidthThreshold = 769;
    let translateXValue = window.innerWidth <= screenWidthThreshold ? 300 : 500;
    console.log(window.innerWidth);
    let intervalId = setInterval(run, 2000);
    function run() {
      idx++;
      changeImage();
    }
    function changeImage() {
      if (idx > imgs.length - 1) {
        idx = 0;
      } else if (idx < 0) {
        idx = imgs.length - 1;
      }
      img.style.transform = `translateX(${-idx * translateXValue}px)`;
    }

    window.addEventListener("resize", () => {
      const newTranslateXValue =
        window.innerWidth <= screenWidthThreshold ? 300 : 500;
      if (newTranslateXValue !== translateXValue) {
        translateXValue = newTranslateXValue;
        changeImage(); // Update the image position when the screen size changes
      }
    });
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <React.Fragment>
      <section className="section fifth__sectionbg">
        <div className="container">
          <h2 className="is-size-4 is-size-6-mobile">Delivery (Nationwide)</h2>
          <div className="columns">
            <div className="column">
              <h1 className="is-size-2 is-size-4-mobile has-text-weight-bold">
                Swift, Safe, and Straight to You!
              </h1>
              <p>
                Enjoy Nationwide Delivery! Get your favorites delivered right to
                your doorstep. Explore our website and discover the convenience
                of hassle-free shipping across the country!
              </p>
              {/* <button className="button mt-5">See All Products</button> */}
            </div>
            <div className="column">
              <div className="carousel">
                <div className="image-container" id="img">
                  <img src={display1} alt="" />
                  <img src={display2} alt="" />
                  <img src={display3} alt="" />
                  <img src={display4} alt="" />
                  <img src={display5} alt="" />
                  <img src={display1} alt="" />
                  <img src={display2} alt="" />
                  <img src={display3} alt="" />
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
