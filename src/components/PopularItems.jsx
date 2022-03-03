import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { mostPopular } from './data';
import PopularSection from './PopularSection';
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    ${mobile({padding: "0px"})};

`
const Headline = styled.div`
  background-color: black;
  font-size: 42px;
  color: Yellow;
  font-weight: bold;
  text-align: center;
  padding: 20px;

`

const PopularItems = ({category,filters,sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect (() => {
    const getProducts = async () => {
      try{
        // we need this condition so the main page doesn't require a category to display all items.
        const res = await axios.get( category ? `http://localhost:5000/api/products?category=${category}` : `http://localhost:5000/api/products`);
        //console.log(res);
        setProducts(res.data);
      }catch(err){}
    };
    getProducts()
  },[category]);

    useEffect(() => {
      category && setFilteredProducts(
        products.filter((item) => Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
        ))
      );
    },[products,category,filters])
    //console.log(filteredProducts);

    //useEffect for sorting by newest, ascending or descending
    useEffect(() =>{
      if(sort === "newest"){
        setFilteredProducts((prev) =>
          [...prev].sort((a,b)=> a.createdAt -b.createdAt));
      } else if(sort === "asc"){
        setFilteredProducts((prev) =>
          [...prev].sort((a,b)=> a.price -b.price));
      } else if (sort === "desc"){
        setFilteredProducts((prev) =>
          [...prev].sort((a,b)=> b.price -a.price));
      }
    },[sort]);
    // set a category condition below to be able to display 4 items (slice is for the number of displayed items)
    // also condition the headline banner to not appear once a specific search is initiated.
  return (
    <div>
      {!category ? <Headline>BROWSE OUR MOST POPULAR PRODUCTS</Headline> : <div></div> }
      <Container>
        {category ? filteredProducts.map((item) => (
            <PopularSection item={item} key={item.id} />
        )) : products.slice (0,4).map((item) => (
          <PopularSection item={item} key={item.id} />
      ))}
      </Container>
    </div>
  );
};

export default PopularItems;
