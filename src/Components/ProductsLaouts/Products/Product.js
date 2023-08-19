import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContextProvider';

const Product = ({book}) => {
    const { image, name, Author, Genre, price, Published } = book;
    const {user} = useContext(AuthContext)

    const handleOrder = () =>{
        const order = {
            image : image,
            name : name,
            Author : Author,
            Genre : Genre,
            price : price,
            Published : Published,
            email : user?.email
        }
    
        fetch("http://localhost:5000/orders", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('successfull add your Product');
                // navigate('/products')
            })
    
    }
    
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
                        <Link onClick={handleOrder}   className="btn btn-active btn-link">Add To Cart <AiOutlineShoppingCart className='text-xl' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;