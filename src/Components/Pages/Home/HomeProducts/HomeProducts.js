import React, { useEffect } from 'react';
import HomeProduct from './HomeProduct';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../../../../features/Book/BookSlice';
import Loding from '../../../ExtraComponents/Loding';
import { Link } from 'react-router-dom';

const HomeProducts = () => {

    const dispatch = useDispatch();
    const { book, isLoading, isError, error } = useSelector(state => state.book)

    useEffect(() => {
        dispatch(fetchBook())
    }, [dispatch]);

    let content;

    if (isLoading) content = <>
        <Loding />
        <Loding />
        <Loding />
        <Loding />
    </>
    if (!isLoading && isError) content = <>
        <Loding />
        <Loding />
        <Loding />
        <Loding />
        </>
    if (!isLoading && !isError && book.length === 0) {
        content = <div>Products no found 😥😥😥</div>
    }
    if (!isLoading && !isError && book.length > 0) {
        content = book.map(product => <HomeProduct key={product._id} product={product} />)
    }

    return (
        <div>
            <h1 className='font-bold text-5xl mb-24'>Our Some Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 gap-5 w-11/12 mx-auto'>
                {
                    content
                }
            </div>
            <Link to={'/Products'} style={{backgroundColor:'#E2CBC5'}} className='px-28 font-bold btn mb-20'>
                See All Books
            </Link>
        </div>
    );
};

export default HomeProducts;