import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const getCoursLevel = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get(`/CourseLevel/GetAllCourseLevel`); 
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};
