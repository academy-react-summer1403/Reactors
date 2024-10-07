import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getCoursList = async (typeName ,levelName,techName,PageNumber,SearchInput,SortingCol,SortingType) => {
    try {
        console.log("Fetching started...");
        const result = await http.get
        (`/Home/GetCoursesWithPagination?PageNumber=${PageNumber ? PageNumber:"1"}&RowsOfPage=9${SortingCol ? `&SortingCol=${SortingCol}` :""}${SortingType ? `&SortType=${SortingType}` :""}${typeName ? `&CourseTypeId=${typeName}` :""}${levelName ? `&courseLevelId=${levelName}`  :""}${techName ? `$&TechCount=1&ListTech=${techName}` :""}${SearchInput ? `&Query=${SearchInput}` : ""}`);
        // ${SearchInput ? `&Query=${SearchInput}` : ""}
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};
