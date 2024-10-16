import { createBrowserRouter } from "react-router-dom";
import App from "../../app";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
export const router = createBrowserRouter ([
    {
        path : "/",
        element : <App/>,
        children : [
            CourseDetails
        ],
    }
])