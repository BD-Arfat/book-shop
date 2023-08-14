import React from 'react';
import HomeProduct from './HomeProduct';
import { useQuery } from 'react-query';

const HomeProducts = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/product');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='font-bold text-5xl mb-24'>Our Some Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 gap-5 w-11/12 mx-auto'>
                {
                    products.map(product => <HomeProduct key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default HomeProducts;