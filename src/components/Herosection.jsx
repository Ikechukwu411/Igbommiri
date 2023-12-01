import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import Typewriter from "typewriter-effect";
import "../components/Herosection.css";
import image1 from "../Images/Hero1.jpg";
import image2 from "../Images/hero2.jpeg";
import image3 from "../Images/hero3.jpg";
import image4 from "../Images/Hero4.jpg";
import image5 from "../Images/Logo.png";
import Logo from "../Images/IGBOMM-removebg-preview.png";

// const images = [image1, image2, image3, image4];

const Herosection = () => {
  useEffect(() => {
    const picId = document.getElementById("pics");
    const pictures = document.querySelectorAll("#pics img");
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
      if (idx >= pictures.length - 1) {
        idx = 0;
      } else if (idx <= 0) {
        idx = pictures.length - 1;
      }
      picId.style.transform = `translateX(${-idx * translateXValue}px)`;
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
      <section className="section hero-body">
        {/* <div
          className="hero-slider"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center left", // Initial position
            height: "90vh",
          }}
        />
        <div className="hero-body">
          <div className="container">
            <img src={Logo} alt="" width={350} />
          </div>
        </div> */}
        <div className="container">
          <div className="columns mt-5">
            <div className="column">
              <div className="">
                <h1 className="is-size-2 is-size-4-mobile mt-4 pt-4  has-text-weight-bold">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: "IGBOMMIRI GLOBAL RESOURCES.",
                    }}
                  />
                </h1>
              </div>
              <p className="is-size-5-desktop mt-3" style={{ width: "90%" }}>
                Discover Elegance: Elevate Spaces with Our Premium Fluted Panels
                and Luxurious Marble Sheets for Timeless Sophistication.
              </p>
            </div>
            <div className="column">
              <div className="scroll">
                <div className="scroll-container" id="pics">
                  <img src={image1} alt="" />
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                  <img src={image4} alt="" />
                  <img src={image1} alt="" />
                  <img src={image2} alt="" />
                  <img src={image3} alt="" />
                  <img src={image4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Herosection;
