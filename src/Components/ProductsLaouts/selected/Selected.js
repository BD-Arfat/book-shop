import React from 'react';

const Selected = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl mt-10 mb-4 text-left'>Selected books</h1>
            <select className="select select-bordered w-full">
                <option selected>All Books</option>
                <option>drama</option>
                <option>story</option>
                <option>novel</option>
                <option>poetry</option>
                <option>literature</option>
                <option>independence</option>
            </select>
        </div>
    );
};

export default Selected;