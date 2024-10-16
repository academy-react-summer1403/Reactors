import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const getCourseTypes = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get(`/CourseType/GetCourseTypes`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};
