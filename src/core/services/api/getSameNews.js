import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const getSameNews = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get(`/News?PageNumber=1&RowsOfPage=3&SortingCol=InsertDate&SortType=DESC`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return error;
    }
};