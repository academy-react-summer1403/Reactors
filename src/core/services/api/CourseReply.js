import toast from "react-hot-toast";
import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postSendReplyComment= async (CommentData) => {
    try {
        const result = await http.post("/Course/AddCommentCourse",CommentData);
        return result
    } catch (error) {
        throw error
    }
}