import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postCourseReserve = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.post("/CourseReserve/ReserveAdd")
       
        return result
    } catch (error) {
        return error;
    }
}