import { createBrowserRouter } from "react-router-dom";
import App from "../../app/index.jsx";
import { dashboard } from "./dashboard.router.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            dashboard
        ]
    }
])
