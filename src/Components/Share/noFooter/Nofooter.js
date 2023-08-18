import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Nofooter = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>

        </div>
    );
};

export default Nofooter;