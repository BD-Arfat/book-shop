import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Achieved from '../Achieved/Achieved';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Achieved/>
        </div>
    );
};

export default Home;