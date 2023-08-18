import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container w-96 mt-32 mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div style={{ backgroundColor: '#EFDBD4' }} class=" px-6 py-8 rounded shadow-xl text-black w-full">
                        <h1 class="mb-8 text-3xl text-center font-bold">Login Now</h1>
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <div className='text-left my-3 font-bold'>
                            Have you registered? <Link className='text-slate-600' to={'/login'}>Login Now</Link>
                        </div>

                        <button
                            type="submit"
                            class="w-full btn btn-outline text-center py-3 rounded bg-green text-black font-bold hover:bg-green-dark focus:outline-none my-1"
                        >Register Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;