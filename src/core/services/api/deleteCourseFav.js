import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const deleteCourseFav= async (formdata) => {
    console.log(formdata);
    try {
        const result = await http.delete("/Course/DeleteCourseFavorite",{data: formdata});

        return result
    } catch (error) {
        throw false;
    }
}