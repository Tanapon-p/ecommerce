import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("Category:", cat);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
        console.log("API Response:", res.data);
      } catch (err) {
        console.log("Can't reach API", err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            item[key].includes(value);
          })
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {/* Pass poppularProducts Props(โดยให้ Props ชื่อว่า Item) into Product Component */}
      {filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
