import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index.jsx";
import { auth } from "./auth.router.jsx";
import { mainPage } from "./mainPage.router.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            mainPage,
            auth,
        ]
    }
])