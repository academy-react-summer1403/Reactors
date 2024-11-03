import React from "react";
import { useState,useEffect } from "react";
import { getTeacher } from "../../../core/services/api/getTeacher";
import CardWrapper from "./CardWrapper/CardWrapper";

const Teacher = () => {
  const [teacherlist, setteacherlist] = useState([]);

  const getTeacherlist = async () => {
    const teacherlist = await getTeacher();
    setteacherlist(teacherlist);
    console.log(teacherlist , "Teacher")
  };
  useEffect(() => {
    getTeacherlist();
  }, []);

  // console.log(teacherlist, "Teacher")

  return( 
    <div className="flex flex-col items-center bg-gradient-to-b from-[#EBF3F1] to-[#A4F6DE] py-12"> 
          <div className="pb-[40px] pt-[80px]">
        <div className="text-[30px] w-full flex flex-col items-center">
          حرفه ای های ما
        </div>
        <div className="text-[15px] w-full flex flex-col items-center">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </div>
      </div>   
    <CardWrapper teacherlist={teacherlist}/>
  </div>
  )
};

export default Teacher;
