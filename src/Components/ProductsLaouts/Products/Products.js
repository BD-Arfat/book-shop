import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../features/Books/BookkSlice'
import Loding from '../../ExtraComponents/Loding';
import Product from './Product';

const Products = () => {

    const dispatch = useDispatch();
    const { books, isLoading, isError, error } = useSelector(state => state.books)

    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch]);

    let content;

    if (isLoading) content = <>
    <Loding/>
    <Loding/>
    <Loding/>
    <Loding/>
    </>
    if(!isLoading && isError) content = <>
    <Loding/>
    <Loding/>
    <Loding/>
    <Loding/>
    </>
    if(!isLoading && !isError && books.length === 0){
        content = <div>Products no found 😥😥😥</div>
    }
    if(!isLoading && !isError && books.length > 0){
        content = books.map(book => <Product book={book} key={book._id}/>)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20'>
            {content}
        </div>
    );
};

export default Products;