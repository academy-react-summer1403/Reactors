import toast from "react-hot-toast";
import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postCourseLike = async (courseId) => {
    try {
        const result = await http.post("/Course/AddCourseLike", courseId);
        console.log(result , "status :");
        // toast.success('Successfully toasted!')
        // toast.error("This didn't work.")
       
        return result
    } catch (error) {
        return false;
    }
}