import React from 'react';
import Input from '../Input/Input';
import Products from '../Products/Products';

const AllProducts = () => {
    return (
        <div>
            <h1 className='font-bold text-4xl mt-3'>All our books are listed below</h1>
            <Input/>
            <div className='mt-20'>
                <Products/>
            </div>
        </div>
    );
};

export default AllProducts;