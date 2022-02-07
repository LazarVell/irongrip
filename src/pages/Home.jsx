import React from 'react';
import Products from '../components/Products';
import Navbar from '../components/Navbar'
import SliderArrow from '../components/SliderArrow';
import PopularSection from '../components/PopularSection';
import PopularItems from '../components/PopularItems';

const Home = () => {
  return (<div>
    <Navbar></Navbar>
    <SliderArrow></SliderArrow>
    <Products></Products>
    <PopularItems></PopularItems>
    </div>
  )
};

export default Home;

