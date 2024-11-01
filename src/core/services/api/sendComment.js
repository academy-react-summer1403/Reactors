import toast from "react-hot-toast";
import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postSendComment= async (courseId) => {
    console.log(courseId);
    try {
        const result = await http.post("/Course/AddCommentCourse/"+courseId);
       console.log(result , "comment vm;kfm");
        return result
    } catch (error) {
        throw error
    }
}