import { createBrowserRouter } from "react-router-dom";
import Main from "../Share/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ProductsLaouts from "../ProductsLaouts/ProductsLaouts";
import Nofooter from "../Share/noFooter/Nofooter";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path : '/',
                element: <Home/>
            }
        ]
    },
    {
        path:'/products',
        element : <Nofooter/>,
        children: [
            {
                path:'/products',
                element : <ProductsLaouts/>
            },{
                path: '/products/register',
                element: <Register/>
            },
            {
                path:'/products/login',
                element: <Login/>
            }
        ]
    }
])