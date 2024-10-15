import React from "react";
import { Header } from "../../components/common/Hearder/Header";
import { Footer } from "../../components/common/Footer/Footer";
import BlogList from "../../components/BlogList/blogList";
import Bar from "../../components/TopBar/Bar/Bar";
import Slider from "../../components/Slider/Slider";

const NewsList = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between  items-center">
        <h2 className=" text-[30px] py-24">لیست اخبار و مقالات </h2>
        <div className="w-[90%] py-9 px-17 bg-[#FBF6F6] rounded-[37px] flex justify-between items-center">
          <Bar />
        </div>
      </div>
      <div className="py-8 px-16">
        <BlogList />
      </div>

      <div className="w-full">
        <h2 className="text-center text-[20px] pt-[47px] pb-[37px] ">
          <h1 className="text-center text-[34px]  ">اخبار و مقالات مشابه</h1>
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </h2>
        <div
          dir="rtl"
          className="flex flex-row-reverse pl-[9.3rem] pr-[9.3rem] pb-[10px] "
        >
            <Slider></Slider>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default NewsList;
