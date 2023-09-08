import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { popularProducts } from "../data";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopBotton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  ${mobile({ marginBottom: "5px" })}
`;

const ProductId = styled.span`
  ${mobile({ marginBottom: "5px" })}
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
  ${mobile({ marginBottom: "5px" })}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 20px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const [count, setCount] = useState(1);
  const [countSecond, setCountSecond] = useState(1);
  const [discount, setDiscount] = useState(0);

  // let discountShipping = 0;

  let subTotal =
    count * popularProducts[15].price + countSecond * popularProducts[12].price;

  const shippingFee = 5.9;
  let total = subTotal + shippingFee;

  useEffect(() => {
    if (subTotal >= 50) {
      setDiscount(shippingFee);
    } else {
      setDiscount(0);
    }
  }, [subTotal]);

  // function discountCheck() {
  //   if (subTotal > 50) {
  //     setDiscount(true);
  //   } else {
  //     setDiscount(false);
  //   }
  //   if (setDiscount) {
  //     discountShipping = 5.9;
  //   } else {
  //     discountShipping = 0;
  //   }
  //   return discountShipping
  // }

  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBotton>
            <Link
              to="/productlist/1"
              style={{ textDecoration: "none", color: "black" }}
            >
              CONTINUE SHOPPING
            </Link>
          </TopBotton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopBotton type="filled">CHECKOUT NOW</TopBotton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={popularProducts[15].img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {popularProducts[15].name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 18466787239
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove
                    onClick={() => count > 1 && setCount(count - 1)}
                    style={{ cursor: "pointer" }}
                  />
                  <ProductAmount>{count}</ProductAmount>
                  <Add
                    onClick={() => setCount(count + 1)}
                    style={{ cursor: "pointer" }}
                  />
                </ProductAmountContainer>
                <ProductPrice>
                  $ {(count * popularProducts[15].price).toFixed(2)}
                </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={popularProducts[12].img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {popularProducts[12].name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 548231
                  </ProductId>
                  <ProductColor color="#eee" />
                  <ProductSize>
                    <b>Size:</b> 36
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove
                    onClick={() =>
                      countSecond > 1 && setCountSecond(countSecond - 1)
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <ProductAmount>{countSecond}</ProductAmount>
                  <Add
                    onClick={() => setCountSecond(countSecond + 1)}
                    style={{ cursor: "pointer" }}
                  />
                </ProductAmountContainer>
                <ProductPrice>
                  $ {(countSecond * popularProducts[12].price).toFixed(2)}
                </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${subTotal.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ {shippingFee.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ {(-discount).toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                $ {(total - discount).toFixed(2)}
              </SummaryItemPrice>
            </SummaryItem>
            <Button style={{ cursor: "pointer" }}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
