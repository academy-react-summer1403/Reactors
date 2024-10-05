import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getCoursList = async (typeName ,levelName,techName,CostUp,CostDown,PageNumber,Sort) => {
    try {
        // url =`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0`
        console.log("Fetching started...");
        const result = await http.get
        (`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9&SortingCol=Active&SortType=DESC&CostDown=${CostDown ? CostDown :""}&CostUp=${CostUp ? CostUp :""}&CourseTypeId=${typeName ? typeName :""}&courseLevelId=${levelName ? levelName :""}`);
        
      return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};
