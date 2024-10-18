import { createBrowserRouter } from "react-router-dom";
import { auth } from "./auth.router.jsx";
import App from "../../app/index.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            auth
        ]
    }
])
