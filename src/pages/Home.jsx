import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
