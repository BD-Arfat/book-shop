import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const Products = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-5 w-11/12 mx-auto'>
            {
                products.map(product => <Product key={product._id} product={product} />)
            }
        </div>
    );
};

export default Products;