import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const deletenewseLike = async (formdata) => {
    try {
        const result = await http.delete("/News/DeleteLikeNews",formdata);

        return result
    } catch (error) {
        throw false;
    }
}