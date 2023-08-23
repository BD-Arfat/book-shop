import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../Context/AuthContextProvider';
import { Link } from 'react-router-dom';

const YourProduct = () => {
    const { user } = useContext(AuthContext)

    const url = `https://book-shop-rho-blush.vercel.app/addProduct?email=${user?.email}`
    // const url = `https://book-shop-rho-blush.vercel.app/products`

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {

            });
            const data = await res.json();
            return data;
        }
    });

    const hendelDelete = (id) => {
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if (proceeed) {
            fetch(`https://book-shop-rho-blush.vercel.app/addProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('The Products you want to delete has been successfully deleted')
                    }
                })

        }
    }

    return (
        <div>
            <div class="container mx-auto px-4 sm:px-8" draggable='true'>
                <div class="py-36 text-left">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight">You have added these products ({products.length})</h2>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Image / Name / Published
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Amount
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Author Name / Genre
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Delete Cart
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Edit Products
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                        ></th>
                                    </tr>
                                </thead>

                                {
                                    products.map(order => <tbody key={order._id}>
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div class="flex">
                                                    <div class="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            class="w-full h-full rounded"
                                                            src={order.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="ml-3 text-left">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                            {order.name}
                                                        </p>
                                                        <p class="text-gray-600 whitespace-no-wrap">{order.Published}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap ">{order.price} <span className='text-3xl font-bold'>৳</span></p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{order.Author}</p>
                                                <p class="text-gray-600 whitespace-no-wrap">{order.Genre}</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    onClick={() => hendelDelete(order._id)}
                                                    class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                                                >
                                                    <span

                                                        aria-hidden
                                                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full cursor-pointer"
                                                    ></span>
                                                    <span class="relative cursor-pointer">Delete</span>
                                                </span>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <Link
                                                to={`/products/editForm/${order._id}`}
                                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                                >
                                                    <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                    ></span>
                                                    <span class="relative cursor-pointer">Edit</span>
                                                </Link>
                                            </td>
                                            <td
                                                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                            >
                                            </td>
                                        </tr>

                                    </tbody>)
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div></div>
    );
};

export default YourProduct;