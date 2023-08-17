import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Product = ({book}) => {
    const { image, name, Author, Genre, price, Published } = book;
    return (
        <div>
            <div style={{ backgroundColor: '#E2CBC5' }} className="card w-60 mx-auto shadow-xl h-[450px] transform hover:scale-105 duration-500 ease-in-out">
                <figure className="px-3 pt-3">
                    <img src={image} alt="Shoes" className="rounded-xl w-60 h-52" />
                </figure>
                <div style={{ fontFamily: "-moz-initial" }} className=" px-3 py-4 items-center text-left">
                    <h2 className="font-bold text-xl text-left">{name}</h2>
                    <p className='my-1'>Author: {Author}</p>
                    <p className='my-1'>Genre: {Genre}</p>
                    <p className='my-1'>price: {price}৳</p>
                    <p className='my-1'>Published: {Published}</p>
                    <div className="text-center mt-4">
                        <Link className="btn btn-active btn-link">Add To Cart <AiOutlineShoppingCart className='text-xl' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;