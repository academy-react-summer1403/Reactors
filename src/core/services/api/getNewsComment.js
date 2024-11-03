import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const getNewsComment = async (id) => {
    try {
        console.log("Fetching started...");
        const result = await http.get(`/News/GetNewsComments?NewsId=`+id);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};

// /News/CreateNewsComment

export const postAddNewsComment = async (CommentNews) => {
    try {
        const result = await http.post("/News/CreateNewsComment",CommentNews);
    
      return result;
    } catch (error) {   
        console.log(error);
        throw error;
    }
};