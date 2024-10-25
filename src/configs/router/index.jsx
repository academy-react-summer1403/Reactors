import { createBrowserRouter } from "react-router-dom";
import { auth } from "./auth.router.jsx";
import { dashboard } from "./dashboard.router.jsx";
import App from "../../app/index.jsx";
import { mainPage } from "./mainPage.router.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            auth,
            dashboard,
            mainPage,
          
        ]
    }
])