import React from "react";
import { Header } from "../../components/common/Hearder/Header";
import { Footer } from "../../components/common/Footer/Footer";
import BlogList from "../../components/BlogList/BlogList";
import Bar from "../../components/TopBar/Bar/Bar";
import Slider from "../../components/Slider/Slider";
import NewsSlider from "../../components/Slider/NewsSlider";

const NewsList = () => {
  return (
    <>
      <div className="flex flex-col justify-between  items-center">
        <h2 className="text-[30px] pt-[50px]">لیست اخبار و مقالات </h2>
        <div className="w-full py-9 px-17 flex justify-between items-center">
          <Bar />
        </div>
      </div>
      <div className="py-4 px-9">
        <BlogList />
      </div>

      <div className="w-full">
        <h2 className="text-center text-[20px] pt-12">
          <h1 className="text-center text-[34px]  ">اخبار و مقالات مشابه</h1>
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </h2>
        <div className="px-12 pb-10">
          <NewsSlider />
        </div>
      </div>
    </>
  );
};

export default NewsList;
