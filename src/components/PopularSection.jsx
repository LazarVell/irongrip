import React from 'react';
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';
import { mobile } from '../responsive';
import {Link} from "react-router-dom";


const Wrapper = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.5s ease;

`

const Info = styled.div`
    display: flex;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ${mobile({minWidth: "100vw", margin:"0px"})};

    &:hover ${Wrapper}{
        opacity: 1;
    }
`;

const Image = styled.img`
    height:75%;
    z-index: 2;
`



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: all 0.35s ease;

    &:hover{
        background-color: yellow;
        transform: scale(1.1);
    }
`

const Title = styled.h1`
    color: yellow;
    width: auto;
    margin-bottom: 15px;
    padding: 10px;
    text-align: center;
    background-color: rgba(0,0,0, 0.4);
`

const PopularSection = ({item}) => {
  return (
      <Container>
          <Image src={item.img} />
          <Wrapper>
          <Title>{item.title}</Title>
          <Info>
              <Icon>
                 <FaShoppingCart />
              </Icon>
              <Icon>
                  <Link to={`/product/${item._id}`}>
                 <FaSearch />
                 </Link>
              </Icon>  
              <Icon>
                 <FaHeart />
              </Icon>  
          </Info>
          </Wrapper>
      </Container>
  );
};

export default PopularSection