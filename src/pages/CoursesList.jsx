import React from "react";
import { CoursLists } from "../components/CourseList";
import { Bar } from "../components/TopBar/bar";
import Filter from "../components/Filter/Filter";
import Slider from "../components/Slider/Slider";
import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";
import CardSlider from "../components/Slider/CourseList Slider/CardSlider";

const CoursesList = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-between items-center">
        <h2 className="text-[30px] pt-[50px]">لیست دوره ها </h2>

        <div className="w-full py-9 px-17 flex justify-between items-center">
          <Bar />
        </div>
        <div className="flex flex-row-reverse gap-2">
          <CoursLists />
          <Filter />
        </div>
        <div className="w-full">
          <h2 className="text-center text-[20px] pt-[4.25rem] pb-[25px] ">
            <h1 className="text-center text-[34px]  ">دوره های برتر</h1>
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </h2>
          <div
            dir="rtl"
            className="flex flex-row-reverse pl-[9.3rem] pr-[9.3rem] pb-[10px] "
          >
            <CardSlider/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
