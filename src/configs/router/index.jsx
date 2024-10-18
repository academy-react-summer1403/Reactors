import { createBrowserRouter } from "react-router-dom";
import App from "../../app";

import { courseList } from "./courseList.router";
import { newsList } from "./newsList.router";

export const router = createBrowserRouter ([
    {
        path : "/",
        element : <App/>,
        children : [newsList,courseList]
    }
])
