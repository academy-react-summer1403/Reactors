import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const getNewsCategory = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get(`/News/GetListNewsCategory`); 
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};
