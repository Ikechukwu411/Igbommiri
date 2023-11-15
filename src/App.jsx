import React from "react";
import "bulma/css/bulma.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AllProduct from "./pages/AllProduct";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import AnotherProduct from "./components/AnotherProduct";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<AnotherProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
