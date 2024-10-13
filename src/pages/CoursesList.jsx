import React from "react";
import { CoursLists } from "../components/CourseList";
import { Bar } from "../components/TopBar/bar";
import Filter from "../components/Filter/Filter";

const CoursesList = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <h2 className="text-[30px] pt-[50px]">لیست دوره ها </h2>
      <div className="w-full py-9 px-17 flex justify-between items-center">
        <Bar />
      </div>
      <div className="flex flex-row-reverse  gap-6">
        <CoursLists />
        <Filter />
      </div>
      <div className="w-full">
        <h1 className="text-center text-[34px]  ">دوره های برتر</h1>

        <h2 className="text-center text-[20px] mt-5 ">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </h2>
      </div>
      
    </div>
  );
};

export default CoursesList;
