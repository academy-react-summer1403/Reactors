import React from "react";
import { CoursLists } from "../components/CourseList";
import { Bar } from "../components/TopBar/bar";
import Filter from "../components/Filter/Filter";
import Slider from "../components/Slider/Slider";
import CardSlider from "../components/Slider/CourseList Slider/CardSlider";

const CoursesList = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <h2 className="text-[30px] pt-[50px]">لیست دوره ها </h2>

        <div className="w-full py-9 px-17 flex justify-between items-center">
          <Bar />
        </div>
        <div className="flex flex-row-reverse gap-4 px-9 py-4 w-full">
          <CoursLists />
          <Filter />
        </div>
        <div className="w-full">
          <h2 className="text-center text-[20px] pt-12">
            <h1 className="text-center text-[34px]  ">دوره های برتر</h1>
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </h2>
          <div className="px-12 pb-10">
            <CardSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesList;
