import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postCourseReserve = async (courseId) => {
    try {
        const result = await http.post("/CourseReserve/ReserveAdd",courseId);
       
        return result
    } catch (error) {
        return false;
    }
}