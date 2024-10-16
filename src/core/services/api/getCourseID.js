import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getCoursList = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get
        (`/Home/GetCourseDetails?CourseId=6c0a12ea-6a73-ee11-b6c7-ca6d3e095898`);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};
