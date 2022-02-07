import React from 'react';
import styled from 'styled-components';
import { mostPopular } from './data';
import PopularSection from './PopularSection';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;

`
const Headline = styled.div`
  background-color: black;
  font-size: 42px;
  color: Yellow;
  font-weight: bold;
  text-align: center;
  padding: 20px;

`

const PopularItems = () => {
  return (
    <div>
      <Headline>BROWSE OUR MOST POPULAR PRODUCTS</Headline>
      <Container>
        {mostPopular.map(item => (
            <PopularSection item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default PopularItems;
