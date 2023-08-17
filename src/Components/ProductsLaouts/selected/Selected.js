import React from 'react';
import { useDispatch } from 'react-redux';
import { jobType } from '../../../features/filter/filterSlice';

const Selected = () => {

    const dispatch = useDispatch();
  const handleFilter = (type) => {
    dispatch(jobType(type))
  }

    return (
        <div>
            <h1 className='font-bold text-2xl mt-10 mb-4 text-left'>Selected books</h1>
            <select className="select select-bordered w-full">
                <option onClick={() => handleFilter('')} selected>All Books</option>
                <option onClick={() => handleFilter('drama')}>drama</option>
                <option onClick={() => handleFilter('story')}>story</option>
                <option onClick={() => handleFilter('novel')}>novel</option>
                <option onClick={() => handleFilter('poetry')}>poetry</option>
                <option onClick={() => handleFilter('literature')}>literature</option>
                <option onClick={() => handleFilter('independence')}>independence</option>
            </select>
        </div>
    );
};

export default Selected;