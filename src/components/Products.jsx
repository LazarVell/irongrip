import styled from 'styled-components';
import { products } from './data';
import React from 'react';
import ProductsItem from './ProductsItem';
import { mobile } from '../responsive';

const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    background-color: black;
    ${mobile({padding: "0px", flexDirection:"column"})};
`;

const Products = () => {
  return (
      <Container>
          {products.map((item) => (
              <ProductsItem item={item} key={item.id} />
          ))}
      </Container>
  );
};

export default Products;
