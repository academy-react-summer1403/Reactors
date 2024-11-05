import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const deletenewseFav = async (RemoveFavNews) => {
    try {
        const result = await http.delete("/News/DeleteFavoriteNews",{data: RemoveFavNews});

        return result
    } catch (error) {
        throw false;
    }
}