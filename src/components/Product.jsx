import React, { useState } from "react";
import styled from "styled-components";
import {
  Favorite,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;

  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

// รับ Props (Item) จาก popularProducts ที่ทำการ .map มา
const Product = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  function updateClicked() {
    setClicked(!clicked);
  }

  return (
    <Container key={item._id}>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          {/* Dynamic URL Link โดยอ้างอิงค่าจาก props.id ที่รับค่ามา */}
          <Link
            to={`/product/${item._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          {/* ใช้ useState + Ternary oparetor เพื่อตรวจสอบว่าคลิกไปแล้วหรือยัง โดยจาก updateClicked() ในการตรวจสอบ */}
          {clicked ? (
            <Favorite onClick={updateClicked} style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined onClick={updateClicked} />
          )}
          {/* {clicked ? <Favorite/> : undefined} */}
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
