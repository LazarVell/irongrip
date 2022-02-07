import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 55vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
`

const Title = styled.h1`
    color: yellow;
    margin-bottom: 15px;
`

const Button = styled.button`
    color: yellow;
    padding: 10px;
    font-size: 15px;
    background-color: transparent;
    border-color: yellow;
    cursor: pointer;
`

const ProductsItem = ({item}) => {
  return (
      <Container>
          <Image src={item.img}/>
          <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
          </Info>
      </Container>
  );
};

export default ProductsItem;

