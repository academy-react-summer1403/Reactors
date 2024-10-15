import React, { useState,useEffect } from "react";
import PaginationWrapper from "./Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../core/services/api/news";
// import { handlePageNumber } from "../../Redox/NewsSlice";

const BlogList = () => {
  const dispatch = useDispatch();

  const {
    PageNumber,
    SearchInput,
    SortingCol,
    SortingType,
  } = useSelector((state) => {
    return state.news;
  });

  const [blogList, setBlogList] = useState([]);

  const getBlogList = async () => {
    const newses = await getNews(

      PageNumber,
      SearchInput,
      SortingCol,
      SortingType,

    );
    setBlogList(newses.news);
    console.log(newses, "news list");
  };

  // const handleChangePage = (event, newPage) => {
  //   console.log("page :", newPage);
  //   dispatch(handlePageNumber(newPage));
  // };

  useEffect(() => {
    getBlogList();
  }, [
    SearchInput,
    PageNumber,
    SortingCol,
    SortingType,
  ]);


  return (
      <div className="flex flex-col min-h-[400px] border border-[#EFEFEF] bg-[#FFFFFF] gap-3 p-4 rounded-[30px] shadow-2xl">
      <PaginationWrapper count={10}/>
      </div>
  );
};

export default BlogList;
