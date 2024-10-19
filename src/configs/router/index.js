import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./Landing.router.jsx";
import App from "../../app/index.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        // element:<App/>,
        children: [
            LandingPage
        ]
    }
])