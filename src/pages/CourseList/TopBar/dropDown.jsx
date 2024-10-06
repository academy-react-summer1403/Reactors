import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { handlestatusName } from "../../../Redux/CourseSlice";
import { getCoursList } from "../../../core/services/api/course";

const Dropdown = () => {

  const dispatch = useDispatch();
  const [CourseStatus, setCourseStatus] = useState([]);

  const getDropDown = async () => {
    const CourseStatus = await getCoursList();
    setCourseStatus(CourseStatus.courseFilterDtos);
    console.log(CourseStatus, "CourseStatusName");
  }

  useEffect(() => {
    getDropDown();
  }, []);

  const handleCourseStatus = (e) => {
    const { value } = e.target;
    dispatch(handlestatusName(value));
  }


  return (


    <form class="max-w-[700px] mx-auto pl-[500px] pt-[12px] text-right ">
      <select
        value={null}
        onChange={handleCourseStatus} 
        class="bg-[#ffff] border border-[#158B68] text-right text-[#158B68] gray-900 text-sm rounded-lg focus:ring-[#158B68] focus:border-[#158B68] block w-full p-[13px] ">
          {CourseStatus.map((item)=> { return <option value={item.id}> {item.statusName} </option>})}
          
        <option >مرتب سازی</option>

      </select>
    </form>


  )
};

export default Dropdown;