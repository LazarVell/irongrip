import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px" })};

`;

const Tittle = styled.h1`
font-weight: bold;
text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: bold;
cursor: pointer;
border: ${ props => props.type === "filled" ? "4px solid black" : "4px solid yellow"};
background-color: ${ props => props.type === "filled" ? "yellow" : "rgba(0,0,0,0.5)"};
color: ${ props => props.type === "filled" ? "black" : "yellow"};
${mobile({marginRight: "5px" })};
`;

const TopTexts = styled.div`
    ${mobile({display: "none" })};
`;

const TopText = styled.span`
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column" })};
`;

const Info = styled.div`
    flex:3;
`;

const Summary = styled.div`
    flex:1;
    border: 5px solid yellow;
    margin-left: 10px;
    border-radius: 15px;
    padding: 20px;
    background-color: rgba(0,0,0,0.5);
    height: 50vh;
    color: yellow;
    ${mobile({marginLeft: "0px" })};
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    ${mobile({flexDirection: "column" })};
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    ${mobile({flexDirection: "column", alignItems: "center"})};
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

`;

const ProductID = styled.span`

`;

const ProductFlavour = styled.span`
    display: flex;
`;

const ProductSize = styled.span`

`;

const PriceDetails = styled.div`
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
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const SummaryTitle = styled.h1`

`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" ? "bold" : "200"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    border: 4px solid black;
    background-color: yellow;
    color: black;
`;

const Flavour = (props) => {  
    return <p>{props.flavour}</p>; 
  };

const Cart = () => {
  return (
    <Container>
        <Navbar/>
            <Wrapper>
                <Tittle>YOUR CART</Tittle>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                <TopButton type="filled">CHECKOUT PURCHASE</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src={require('../images/optimumnutritionisolate.webp')} />
                            <Details>
                                <ProductName><b>Product:</b>Optimum Nutrition Gold Standard Isolate</ProductName>
                                <ProductID><b>ID:</b>1234892379</ProductID>
                                <ProductFlavour ><b>Flavour:</b> <Flavour flavour="Chocolate" /></ProductFlavour>
                                <ProductSize><b>Size:</b>Medium</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                    <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <hr />
                    <Product>
                        <ProductDetails>
                            <Image src={require('../images/youcangohomenow.webp')} />
                            <Details>
                                <ProductName><b>Product:</b>You can go home now workout t-shirt</ProductName>
                                <ProductID><b>ID:</b>894713712</ProductID>
                                <ProductFlavour ><b>Flavour:</b> <Flavour flavour="N/A" /></ProductFlavour>
                                <ProductSize><b>Size:</b>Medium</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add />
                                    <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 120</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ FREE</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ 0</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
            </Wrapper>
        <Footer/>
    </Container>
    );
};

export default Cart;
