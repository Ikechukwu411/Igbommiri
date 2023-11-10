import React from "react";
import Navbar from "../components/Navbar";
import LastSection from "../components/LastSection";
import { BiCurrentLocation } from "react-icons/bi";
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
                laudantium?
              </p>
              <div className="mt-3">
                <span className="mr-3">{<BiCurrentLocation size={20} />}</span>
                <span className="is-size-4">Location</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci perferendis maiores beatae, vitae ullam provident?
                </p>
              </div>
              <div className="mt-3">
                <span className="mr-3">{<BiCurrentLocation size={20} />}</span>
                <span className="is-size-4">Phone Number</span>
                <p>123456799</p>
              </div>
              <div className="mt-3">
                <span className="mr-3">{<BiCurrentLocation size={20} />}</span>
                <span className="is-size-4">Email Address</span>
                <p>1234@gmial.com</p>
              </div>
            </div>

            <div className="column box mt-6">
              <form action="" className="form">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Phone</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
                <input type="submit" className="button is-primary" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <LastSection />
    </React.Fragment>
  );
};

export default Contact;
