import { data } from "autoprefixer";
import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const deleteCourseLike = async (formdata) => {
    try {
        const result = await http.delete("/Course/DeleteCourseLike",{data: formdata});

        return result
    } catch (error) {
        throw false;
    }
}