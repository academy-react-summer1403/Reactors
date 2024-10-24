import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//

export const postfaouriteUser = async (courseId) => {
    try {
        const result = await http.post("/Course/AddCourseFavorite",{courseId});
        console.log(result , "status :");

        return result
    } catch (error) {
        throw error;
    }
}