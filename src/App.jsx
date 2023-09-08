import React from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import CatagoriesItem from "./components/CategoriesItem"

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="Cart" element={<Cart />} />
      <Route exact path="/" element ={<CatagoriesItem/>} />
      <Route exact path="/productlist/:catagoriesID" element ={<ProductList/>} />
      <Route exact path="/" element={<Product />} />
      <Route path="/product/:itemId" element={<ProductPage />} />
    </Routes>
    </>
  );
}
export default App;
