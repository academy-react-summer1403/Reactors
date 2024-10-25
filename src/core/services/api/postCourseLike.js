import toast from "react-hot-toast";
import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postCourseLike = async (courseId) => {
    try {
        const result = await http.post("/Course/AddCourseLike?CourseId=" + courseId);       
        return result
    } catch (error) {
        return false;
    }
}