import toast from "react-hot-toast";
import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postNewsDisLike = async (id) => {
    try {
        const result = await http.post("/News/NewsDissLike/"+id);
        console.log(result , "status :");
       
        return result
    } catch (error) {
        throw error;
    }
}