import React from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./components/Product";
import CatagoriesItem from "./components/CategoriesItem";

function App() {
  const user = true;

  return (
    <>
      <Routes>
        <Route excat path="/" element={<Home />} />
        <Route
          path="Register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
        <Route
          path="Login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route path="Cart" element={<Cart />} />
        <Route exact path="/" element={<CatagoriesItem />} />
        <Route exact path="/products/:catagoriesID" element={<ProductList />} />
        <Route exact path="/" element={<Product />} />
        <Route path="/product/:itemId" element={<ProductPage />} />
      </Routes>
    </>
  );
}
export default App;
