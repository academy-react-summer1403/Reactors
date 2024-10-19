import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const getCourseList = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get(`/Home/GetCoursesTop`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};