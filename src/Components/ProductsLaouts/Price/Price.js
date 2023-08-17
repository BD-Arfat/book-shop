import React from 'react';

const Price = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl mt-10 mb-4 text-left'>Like the price</h1>
            <select className="select select-bordered w-full">
                <option  selected>Default</option>
                <option>High to Low Price</option>
                <option>Low to High Price</option>
            </select>
        </div>
    );
};

export default Price;