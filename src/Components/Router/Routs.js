import { createBrowserRouter } from "react-router-dom";
import Main from "../Share/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path : '/',
            }
        ]
    }
])