import React from 'react';
import Products from '../components/Products';
import Navbar from '../components/Navbar'
import SliderArrow from '../components/SliderArrow';
import PopularSection from '../components/PopularSection';
import PopularItems from '../components/PopularItems';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (<div>
    <Navbar></Navbar>
    <SliderArrow></SliderArrow>
    <Products></Products>
    <PopularItems></PopularItems>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </div>
  )
};

export default Home;

