import { createBrowserRouter } from "react-router-dom";
import App from "../../app";

import { course } from "./courseList.router";

export const router = createBrowserRouter ([
    {
        path : "/",
        element : <App/>,
        children : [
         
            course
        ],
    }
])
