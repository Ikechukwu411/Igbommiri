import React from "react";
import Navbar from "../components/Navbar";
import logo from "../Images/IGBOLOGO.jpg";
import "../pages/About.css";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section aboutsect">
        <div className="container mt-4">
          <div className="columns mt-4">
            <div className="column">
              <h1 className="is-size-4-desktop is-size-5-mobile has-text-weight-bold mb-4">
                About Us
              </h1>
              <p className="is-size-5-desktop">
                At Igbommiri global resources, we specialize in providing
                high-quality fluted panels and exquisite marble sheets that
                elevate interior and exterior designs. With a commitment to
                timeless elegance and superior craftsmanship, we transform
                spaces into stunning environments that captivate.
              </p>
              <h3 className="is-size-5-desktop mt-5 mb-3 has-text-weight-bold">
                For inquiries, reach out to us at:
              </h3>
              <ul className="is-size-5-desktop">
                <li>Email: igbommiriglobalresources@gmail.com</li>
                <li>Address: No. 1 Aih Majidat Alatishe Str. Okota, Lagos</li>
                <li> Phone: +234 814 737 4095</li>
              </ul>
            </div>
            <div className="column">
              <img src={logo} alt="" width={450} />
            </div>
          </div>
        </div>
      </section>{" "}
    </React.Fragment>
  );
};

export default About;
