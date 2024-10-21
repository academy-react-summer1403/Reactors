import { createBrowserRouter } from "react-router-dom";
import App from "../../app";

import { courseList } from "./courseList.router";
import { newsList } from "./newsList.router";
import { auth } from "./auth.router";
import { LandingPage } from "./Landing.router";
import { NewsDetails } from "./newsDetails.router";

export const router = createBrowserRouter ([
    {
        path : "/",
        element : <App/>,
        children : [NewsDetails,LandingPage,auth,newsList,courseList]
    }
])
