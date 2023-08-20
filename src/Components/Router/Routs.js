import { createBrowserRouter } from "react-router-dom";
import Main from "../Share/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ProductsLaouts from "../ProductsLaouts/ProductsLaouts";
import Nofooter from "../Share/noFooter/Nofooter";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import PrivetRouts from "../PrivetRouts/PrivetRouts";
import AddProducts from "../AddProducts/AddProducts";
import Cart from "../Cart/Cart";
import YourProduct from "../YourProduct/YourProduct";

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
                element : <PrivetRouts><ProductsLaouts/></PrivetRouts>
            },{
                path: '/products/register',
                element: <Register/>
            },
            {
                path:'/products/login',
                element: <Login/>
            },{
                path: '/products/addProduct',
                element: <PrivetRouts><AddProducts/></PrivetRouts>
            },{
                path : '/products/cart',
                element : <Cart/>
            },{
                path : '/products/yourProducts',
                element : <YourProduct></YourProduct>
            }
        ]
    }
])