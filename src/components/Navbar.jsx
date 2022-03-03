import React from 'react';
import styled from 'styled-components';
import {FaSearch, FaShoppingCart} from "react-icons/fa";
import { Badge } from '@material-ui/core';
import {mobile} from "../responsive";
import { red } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

// STYLE COMPONENTS
const Container = styled.div`
    width: 100%;
    height:60 px;
    background-color: black;
    color: white;
    overflow:auto;
    `;


const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})};
`;

const Left = styled.div`
display:flex;
align-items:center;
flex:1;`;
    const Language = styled.div`
        font-size: 16px;
        cursor: pointer;
    `;
    const SearchContainer = styled.div`
        display:flex;
        align-items:center;
        margin-left: 20px;
        padding: 5px;
        border: none;

    `;
        const Input = styled.input`
            margin-right: 5px;
        `;

const Center = styled.div`
flex:1;
text-align: center;`;
    const Logo = styled.h1`
        font-weight: bold;
    `
    const HeaderLogo = styled.div`
        text-align: center;
        color: white;
        font-weight: bolder;
        font-size: 64px;
        line-height: 48px;
        padding-top:5px;
        ${mobile({fontSize:"50px", lineHeight:"40px"})};
    `
    const HeaderLogo2 = styled.div`
        font-weight: bold;
        text-align: center;
        color: red;
        font-size:50px;
        line-height:41px;
        ${mobile({fontSize:"36px", lineHeight:"34px"})};
    `
    const HeaderLogo3 = styled.div`
        color: yellow;
        font-size: 18px;
        white-space: nowrap;
        font-weight: bold;
        ${mobile({fontSize:"13px", lineHeight:"10px"})};
    `

const Right = styled.div`
flex:1;
display:flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
${mobile({alignItems:"center", justifyContent:"center"})};
`;
    const MenuItem = styled.div`
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        padding: 10px;
        &:hover{ color: orange; };
    `

const Navbar = () => {
    //react-redux - connecting the cart quantity with the navbar badge cart
    const quantity = useSelector((state) => state.cart.quantity)
    console.log(quantity);
  return (
  <Container>
     <Wrapper>
         <Left>
             <Language>EN</Language>
             <SearchContainer>
                 <Input placeholder="Search"/>
                 <FaSearch />
             </SearchContainer>
         </Left>
         <Center>
            <HeaderLogo>IRON GRIP</HeaderLogo>
            <HeaderLogo2>SUPLEMENTS</HeaderLogo2>
            <HeaderLogo3>Don't compromise. Hold it in your hands.</HeaderLogo3>
         </Center>
         <Right>
             <MenuItem>REGISTER</MenuItem>
             <MenuItem>SIGN-IN</MenuItem>
             <Link to="/cart">
             <MenuItem><Badge badgeContent={quantity} color="primary">
                 <FaShoppingCart />
                 </Badge>
                 </MenuItem>
                 </Link>
         </Right>
     </Wrapper>
  </Container>
  );
};

export default Navbar;
