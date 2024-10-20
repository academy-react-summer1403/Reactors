import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./Landing.router.jsx";
import App from "../../app/index.jsx";
import { courseList } from "./courseList.router.jsx";
import { newsList } from "./newsList.router.jsx";
import { auth } from "./auth.router.jsx";
import { courseDetails } from "./courseDetails.router.jsx";
import { aboutus } from "./aboutUs.router.jsx";
import { error } from "./Error.router.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        // element:<App/>,
        children: [
            LandingPage,
            courseList,
            newsList,
            auth,
            courseDetails,
            aboutus,
            error,
        ]
    }
])