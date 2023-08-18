import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import { AiFillProfile, AiOutlineLogout, AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(error => { })
    }

    return (
        <div style={{ backgroundColor: '#EFDBD4' }} className="navbar z-10 fixed px-16">
            <div className="flex-1">
                <Link to={'/'} className="" draggable='true'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_42xtbNkhsHeR0RhTTb0P-CtwvYe5pPi11g&usqp=CAU" className='w-20 rounded-full' alt="" /></Link>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'} className='font-bold text-lg'>Home</Link></li>
                    <li><Link to={'/Products'} className='font-bold text-lg'>Products</Link></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img className='rounded-full' src={`https://ui-avatars.com/api/?name=${user?.email}`} alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="">
                                Profile <AiFillProfile className='text-xl'/>
                            </a>
                        </li>
                        <li>
                            <Link to={'/products/register'}>Add Product <AiOutlinePlus className='text-xl'/></Link>
                        </li>
                        <li>
                            <Link to={'/products/register'}>Your Cart <AiOutlineShoppingCart className='text-xl'/></Link>
                        </li>
                        {
                            user?.email ? <li onClick={handelLogout}><Link to={'/products/login'}>Logout <AiOutlineLogout className='text-xl'/></Link></li> : <li><Link to={'/products/login'}>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;