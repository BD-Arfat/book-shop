import { createBrowserRouter } from "react-router-dom";
import Main from "../Share/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ProductsLaouts from "../ProductsLaouts/ProductsLaouts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path : '/',
                element: <Home/>
            },{
                path:'/products',
                element : <ProductsLaouts/>
            }
        ]
    }
])