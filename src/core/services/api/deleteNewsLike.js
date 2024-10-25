import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const deleteCourseLike = async (formdata) => {
    try {
        const result = await http.delete("/News/DeleteLikeNews",formdata);

        return result
    } catch (error) {
        throw false;
    }
}