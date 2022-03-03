import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import PopularItems from '../components/PopularItems';
import Products from '../components/Products';
import { mobile } from '../responsive';
import { useLocation } from "react-router-dom"

const Container = styled.div`
  
`;

const Title = styled.h1`
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})};
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
  ${mobile({margin: "5px 0px"})};
`;

const Option = styled.option`
  
`;

const ProductList = () => {
  //location hook allows us to filter out the category from the URL
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters,setFilters] = useState({});

  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }
  //console.log(filters);
  return (
    <Container>
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="types" onChange={handleFilters}>
            <Option disabled>
              Type
            </Option>
            <Option>Protein</Option>
            <Option>Supplements</Option>
            <Option>Apparel</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
          <Option disabled>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
        </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange ={e => setSort(e.target.value)}>
          <Option value="newest">Newest</Option>
            <Option value="asc">Price (Ascending)</Option>
            <Option value="desc">Price (Descending)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <PopularItems category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
