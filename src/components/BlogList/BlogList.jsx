import React, { useState, useEffect } from "react";
import PaginationWrapper from "./Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../core/services/api/news";
import { CardWrapper } from "../CardWrapper/CardWarpper";
import { handlePageNumber } from "../../Redux/NewsSlice";
import { useQuery } from "react-query";
import SyncLoader from "react-spinners/SyncLoader";



const BlogList = () => {
  const dispatch = useDispatch();

  const { PageNumber, SearchInput, SortingCol, SortingType, categoryName } =
    useSelector((state) => {
      return state.news;
    });

  const handleChangePage = (event, newPage) => {
    console.log("page :", newPage);
    dispatch(handlePageNumber(newPage));
  };

  const { data: blogList, isLoading } = useQuery({
    queryKey: [
      "newsList",
      PageNumber,
      SearchInput,
      SortingCol,
      SortingType,
      categoryName,
    ],
    queryFn: () => {
      const result = getNews(
        PageNumber,
        SearchInput,
        SortingCol,
        SortingType,
        categoryName
      );
      return result;
    },
  });

  console.log(blogList , "newsList")


  return (
    <div className="flex flex-col min-h-[400px] border border-[#EFEFEF] bg-[#FFFFFF] gap-3 p-4 rounded-[30px] shadow-2xl">
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <SyncLoader size={24} color="#a4f6de" />{" "}
        </div>
      ) : (
        <>
          <CardWrapper blogList={blogList?.news} />
          <PaginationWrapper count={10} handleChangePage={handleChangePage} />
        </>
      )}
    </div>
  );
};

export default BlogList;
