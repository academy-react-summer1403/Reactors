import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getCoursList = async (typeName ,levelName,techName,CostUp,CostDown,PageNumber,statusName) => {
    try {
        console.log("Fetching started...");
        const result = await http.get
        (`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9&SortingCol=Active${statusName ? statusName :""}&SortType=Asc&CostDown=&CostUp=&CourseTypeId=${typeName ? typeName :""}&courseLevelId=${levelName ? levelName :""}`);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};
