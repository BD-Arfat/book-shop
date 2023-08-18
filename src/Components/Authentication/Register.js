import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { toast } from 'react-hot-toast';

const Register = () => {

    const { createUser } = useContext(AuthContext);

        const handleRegister = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;

            createUser(email, password)
            .then(res => {
                const user = res.user;
                toast.success('successfull you Register !!!!!!!!')
                console.log(user)
            })
            .catch(error =>{
                console.error(error)
                toast.error(error.message)
            })

        }
        
        

        return (
            <div>
                {/* <!-- component --> */}
                <div class="bg-grey-lighter min-h-screen flex flex-col">
                    <div class="container w-96 mt-32 mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <form  onSubmit={handleRegister} style={{ backgroundColor: '#EFDBD4' }} class=" px-6 py-8 rounded shadow-xl text-black w-full">
                            <h1 class="mb-8 text-3xl text-center font-bold">Register Now</h1>
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                placeholder="Full Name" />

                            <input
                                type="email"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                            <div className='text-left my-3 font-bold'>
                                Have you registered? <Link className='text-slate-600' to={'/products/login'}>Login Now</Link>
                            </div>

                            <button
                                type="submit"
                                class="w-full btn btn-outline text-center py-3 rounded bg-green text-black font-bold hover:bg-green-dark focus:outline-none my-1"
                            >Register Now</button>
                        </form>

                    </div>
                </div>
            </div>

        );
    };

    export default Register;