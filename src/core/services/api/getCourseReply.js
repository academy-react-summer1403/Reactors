import http from "../interceptor"; //axios//

export const getNewsReply = async (courseId,id) => {
    try {
        const result = await http.get(`/Course/GetCourseReplyCommnets/`+courseId+"/"+id);
        console.log(result,'asddadaResullttt');
        
      return result;
    } catch (error) {   
        throw error
    }
};