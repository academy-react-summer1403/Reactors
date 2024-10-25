import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getNewsId = async (id) => {
    try {
        const result = await http.get
        (`/News/${id}`);
        console.log(result);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};
