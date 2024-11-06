import http from "../interceptor"; //axios//

export const getNewsReply = async (courseId,id) => {
    try {
        const result = await http.get(`/Course/GetCourseReplyCommnets/`+courseId+id);
        console.log(result);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};