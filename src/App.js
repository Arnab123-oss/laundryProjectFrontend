import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/layout/header/Header";
import Home from "./Components/home/Home";
import "./App.css"
import Footer from "./Components/layout/footer/Footer";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Clothing from "./Components/clothingSection/Clothing";
import Cart from "./Components/Cart/Cart";
import From from "./Components/clothingSection/From";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Routes>
        <Route path="/clothes" element={<Clothing />} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* <Routes>
        <Route path="/form" element={<From />} />
      </Routes> */}

      <Footer />
    </Router>
  );
}

export default App;
