import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postCourseDisLike = async (courseId) => {
    try {
        const result = await http.post("/Course/AddCourseDissLike?CourseId="+courseId);
        console.log(result , "status :");

        return result
    } catch (error) {
        return false;
    }
}