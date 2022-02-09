import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import PopularItems from '../components/PopularItems';
import Products from '../components/Products';

const Container = styled.div`
  
`;

const Title = styled.h1`
  
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option`
  
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Whey Protein</Option>
            <Option>Isolate Protein</Option>
            <Option>Creatine</Option>
            <Option>Fat Burner</Option>
            <Option>BCAA</Option>
            <Option>Apparel</Option>
          </Select>
          <Select>
          <Option disabled selected>
              Size
            </Option>
            <Option>Small - 300g</Option>
            <Option>Medium - 500g</Option>
            <Option>Large - 1kg</Option>
            <Option>Extra large - 1.5kg</Option>
        </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
          <Option selected>
              Newest
            </Option>
            <Option>Price (Ascending)</Option>
            <Option>Price (Descending)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <PopularItems />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
