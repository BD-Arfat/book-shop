import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    if (user) {
        return children;
    };
    if (loding) {
        return <button className="">
            <div>
                <div style={{borderTopColor:'TransformStream'}}
                    class="w-16 mt-48 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            </div>
        </button>
    }
    return (
        <Navigate to={'/products/login'} state={{ from: location }} replace></Navigate>
    );
};

export default PrivetRouts;