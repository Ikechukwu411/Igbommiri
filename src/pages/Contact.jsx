import React from "react";
import Navbar from "../components/Navbar";
import LastSection from "../components/LastSection";
import { BiCurrentLocation } from "react-icons/bi";
import contact from "../Images/contact.jpg";
import "../../src/App.css";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section contactus">
        <div className="container">
          <div className="columns">
            <div className="column mt-6">
              <p className="has-text-weight-bold" style={{ color: "green" }}>
                Contact Us
              </p>
              <h2 className="is-size-2">Get In Touch With Us</h2>
              <p>
                We are here to bring your visions to life. Reach out to our
                dedicated team for expert advice, personalized solutions, or any
                inquiries. Let us collaborate and transform your ideas into
                reality.
              </p>
              <div className="mt-3">
                <span className="mr-3">{<BiCurrentLocation size={20} />}</span>
                <span className="is-size-4">Location</span>
                <p>No. 1 Aih Majidat Alatishe Str. Okota, Lagos</p>
              </div>
              <div className="mt-3">
                <span className="mr-3">{<BiCurrentLocation size={20} />}</span>
                <span className="is-size-4">Phone Number</span>
                <p>+234 814 737 4095</p>
              </div>
              <div className="mt-3">
                <span className="mr-3">{<BiCurrentLocation size={20} />}</span>
                <span className="is-size-4">Email Address</span>
                <p>igbommiriglobalresources@gmail.com</p>
              </div>
            </div>

            <div className="column box mt-6">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </section>
      <LastSection />
    </React.Fragment>
  );
};

export default Contact;
