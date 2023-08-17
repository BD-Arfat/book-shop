import React from 'react';
import { useDispatch } from 'react-redux';
import { jobType } from '../../../features/filter/filterSlice';

const Selected = () => {

    const dispatch = useDispatch();
  

    return (
        <div>
            <h1 className='font-bold text-2xl mt-10 mb-4 text-left'>Selected books</h1>
            <select onChange={(e)=> dispatch(jobType(e.target.value))} className="select select-bordered w-full">
                <option value='default' selected>All Books</option>
                <option value='drama'>drama</option>
                <option value='story'>story</option>
                <option value='novel'>novel</option>
                <option value='poetry'>poetry</option>
                <option value='literature'>literature</option>
                <option value='independence'>independence</option>
            </select>
        </div>
    );
};

export default Selected;