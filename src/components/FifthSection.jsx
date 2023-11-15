import React, { useEffect, useRef } from "react";
import "bulma/css/bulma.min.css";
import "../components/FifthSection.css";
import display1 from "../Images/Rail1.jpg";
import display2 from "../Images/hero3.jpg";
import display3 from "../Images/Nationwide-removebg-preview.png";
import display4 from "../Images/cargo2.jpg";
import display5 from "../Images/cargo3.jpg";

const FifthSection = () => {
  const imgRef = useRef(null);
  let idx = 0;

  useEffect(() => {
    const img = imgRef.current;
    const images = [display1, display2, display3, display4, display5];
    const imgsLength = images.length;

    const interval = setInterval(() => {
      idx = (idx + 1) % imgsLength;
      img.style.transform = `translateX(${-idx * 500}px)`;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      <section className="section fifth__sectionbg">
        <div className="container">
          <h2 className="is-size-4 is-size-6-mobile">Delivery</h2>
          <div className="columns">
            <div className="column">
              <h1 className="is-size-2 is-size-4-mobile">
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
                <div className="image-container" id="img" ref={imgRef}>
                  {/* <img src={display1} alt="" width={800} />
                  <img src={display2} alt="" width={100} /> */}
                  <img src={display3} alt="" width={100} />
                  {/* <img src={display4} alt="" width={100} />
                  <img src={display5} alt="" width={100} />
                  <img src={display1} alt="" width={800} />
                  <img src={display2} alt="" width={100} />
                  <img src={display3} alt="" width={100} /> */}
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
