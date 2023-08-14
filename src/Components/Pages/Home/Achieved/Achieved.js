import React from 'react';
import { AiFillPhone, AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Achieved = () => {
    return (
        <div>
            <h1 className='font-bold text-5xl mb-16'>We have achieved everything</h1>
            <div>
                <div style={{ backgroundColor: '#E2CBC5' }} className="card text-black p-16 mb-20 w-11/12 mx-auto">
                    <div className='flex items-center justify-around'>
                        <div>
                            <AiOutlineUserAdd className='mx-auto text-4xl'/>
                            <h1 className='text-xl font-bold mt-3'>Our customer</h1>
                            <h1 className='font-bold'>4000+</h1>
                        </div>
                        <div>
                            <AiOutlineShoppingCart className='mx-auto text-4xl'/>
                            <h1 className='text-xl font-bold mt-3'>Our seller</h1>
                            <h1 className='font-bold'>4000+</h1>
                        </div>
                        <div>
                            <AiFillPhone className='mx-auto text-4xl'/>
                            <h1 className='text-xl font-bold mt-3'>Contact With Admin</h1>
                            <h1 className='font-bold'>+8801846615162</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achieved;