import React from 'react';
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';


const Info = styled.div`
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
    transition: all 0.5s ease;
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

    &:hover ${Info}{
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

const PopularSection = ({item}) => {
  return (
      <Container>
          <Image src={item.img} />
          <Info>
              <Icon>
                 <FaShoppingCart />
              </Icon>
              <Icon>
                 <FaSearch />
              </Icon>  
              <Icon>
                 <FaHeart />
              </Icon>  
          </Info>
      </Container>
  );
};

export default PopularSection