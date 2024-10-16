import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const getCourseTech = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get(`/Home/GetTechnologies`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};
