import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const deletenewseLike = async (RemoveLikeNews) => {
    try {
        const result = await http.delete("/News/DeleteLikeNews",{data: RemoveLikeNews});

        return result
    } catch (error) {
        throw false;
    }
}