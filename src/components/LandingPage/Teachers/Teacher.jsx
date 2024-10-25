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

  return( 
    <div className="flex flex-col items-center bg-gradient-to-b from-[#EBF3F1] to-[#A4F6DE] py-12">    
    <CardWrapper teacherlist={teacherlist}/>
  </div>
  )
};

export default Teacher;
