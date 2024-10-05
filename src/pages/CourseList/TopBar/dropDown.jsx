import React, { useState } from "react";
import { handleSort } from '../../../Redux/CourseSlice';
import { useDispatch } from "react-redux";


const Dropdown = () => {
  const dispatch = useDispatch();


  const [CourseSort, setCourseSort] = useState([]);

  const handCourseleSort = (e) => {
    const { value } = e.target;
    dispatch(handleSort(value));
  }


  return (


    <form class="max-w-[700px] mx-auto pl-[500px] pt-[12px] text-right ">
      <select value={null} onChange={handCourseleSort} class="bg-[#ffff] border border-[#158B68] text-right text-[#158B68] gray-900 text-sm rounded-lg focus:ring-[#158B68] focus:border-[#158B68] block w-full p-[13px] ">
        <option selected>مرتب سازی</option>
        {CourseSort?.map((item) => {
          return <option value={item.id}>
            {item.Sort}
          </option>
        })}        
        <option value="CA">قیمت</option>
        <option value="FR">محبوب ترین</option>
        <option value="DE">بروز ترین</option>
      </select>
    </form>


  )
};

export default Dropdown;