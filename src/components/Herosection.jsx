import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import "../components/Herosection.css";
import image1 from "../Images/Hero1.jpg";
import image2 from "../Images/hero2.jpeg";
import image3 from "../Images/hero3.jpg";
import image4 from "../Images/Hero4.jpg";

const images = [image1, image2, image3, image4];

const Herosection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide interval in  5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <React.Fragment>
      <section className="hero is-fullheight">
        <div
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
            <h1 className="is-size-2">Your Hero Title</h1>
            <h2 className="subtitle">Your Hero Subtitle</h2>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Herosection;
