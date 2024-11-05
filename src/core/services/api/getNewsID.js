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

export const getNewsComments = async (id) => {
    try {
        const result = await http.get
        (`/News/GetNewsComments?NewsId=${id}`);
        console.log(result);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};

export const postNewsLikeComments = async (id,like=true) => {
    console.log(id , "news id :",like)

    try {
        const result = await http.post
        (`/News/CommentLike/${id}?LikeType=${like}`,);
        console.log(result);
        
      return result;
    } catch (error) {   
        throw error
    }
};

export const postNewsDisLikeComments = async (id,like=false) => {
    console.log(id , "news id :",like)

    try {
        const result = await http.post
        (`/News/CommentLike/${id}?LikeType=${like}`,);
        console.log(result);
        
      return result;
    } catch (error) {   
        throw error
    }
};