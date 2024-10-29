import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getCoursId = async (courseId) => {
    try {
        const result = await http.get
        (`/Home/GetCourseDetails?CourseId=${courseId}`);
        console.log(result);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};

export const getCourseComments = async (courseId) => {
    try {
        const result = await http.get
        (`/Course/GetCourseCommnets/${courseId}`);
        console.log(result);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};

export const postCourseLikeComments = async (id) => {
    try {
        const result = await http.post
        (`/Course/AddCourseCommentLike?CourseCommandId=${id}`);
        console.log(result);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};

export const postCourseDisLikeComments = async (id) => {
    try {
        const result = await http.post
        (`/Course/AddCourseCommentDissLike?CourseCommandId=${id}`);
        console.log(result);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};

