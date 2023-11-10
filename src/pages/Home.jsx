import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import ForthSection from "../components/ForthSection";
import FifthSection from "../components/FifthSection";
import SixSection from "../components/SixSection";
import LastSection from "../components/LastSection";
import "../pages/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="sec">
          <Herosection />
        </section>
        <section className="sec">
          <SecondSection />
        </section>
        <section className="sec">
          <ThirdSection />
        </section>
        <section className="sec">
          <ForthSection />
        </section>
        <section className="sec">
          <FifthSection />
        </section>
        <section className="sec">
          <SixSection />
        </section>
        <section className="sec">
          <LastSection />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
