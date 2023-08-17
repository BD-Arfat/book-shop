import React from 'react';
import { useDispatch } from 'react-redux';
import { sortType } from '../../../features/filter/filterSlice';

const Price = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <h1 className='font-bold text-2xl mt-10 mb-4 text-left'>Like the price</h1>
            <select onChange={(e)=> dispatch(sortType(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>Default</option>
                <option value='highToLow'>High to Low Price</option>
                <option value='lowToHigh'>Low to High Price</option>
            </select>
        </div>
    );
};

export default Price;