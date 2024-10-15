import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getNews = async () => {
    try {
        console.log("Fetching started...");
        const result = await http.get
        ("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&NewsCategoryId=");
        return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};