import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Achieved from '../Achieved/Achieved';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Achieved/>
            <HomeProducts/>
        </div>
    );
};

export default Home;