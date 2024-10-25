import { baseUrl } from "../../../configs";
import http from "../interceptor"; //axios//
// import axios from "axios";

export const getNews = async (PageNumber,SearchInput,SortingCol,SortingType,categoryName) => {
    try {
        console.log("Fetching started...");
        const result = await http.get
        (`/News?PageNumber=${PageNumber}&RowsOfPage=10${SortingCol ? `&SortingCol=${SortingCol}` :""}${SortingType ? `&SortType=${SortingType}` :""}${categoryName ? `&NewsCategoryId=${categoryName}`  :""}${SearchInput ? `&Query=${SearchInput}` : ""}`);
        return result;
    } catch (error) {   
        console.log(error);
        return [];
    }
};

