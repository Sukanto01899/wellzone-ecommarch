import React from 'react';
import BlogGallery from '../Components/BlogGallery/BlogGallery';
import Category from '../Components/Category/Category';
import Hero from '../Components/Hero/Hero';
import ProductGallery from '../Components/ProductGallery/ProductGallery';

const Home = () => {
    return (
        <>
          <Hero/>
          <Category/>
          <ProductGallery/>
          <BlogGallery/>
        </>
    );
};

export default Home;