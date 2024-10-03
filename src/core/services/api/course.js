
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getCoursList = async (count) => {
    try {
        // url =`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0`
        console.log("Fetching started...");
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=${count}`);
    
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};