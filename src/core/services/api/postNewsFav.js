import toast from "react-hot-toast";
import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postNewsFav = async (id) => {
    try {
        const result = await http.post("/News/AddFavoriteNews?NewsId="+id);
        console.log(result , "status :");
       
        return result
    } catch (error) {
        return false;
    }
}