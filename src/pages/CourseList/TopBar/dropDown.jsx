import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleSortingCol, handleSortingType } from "../../../Redux/CourseSlice";

const SortDictionary = {
  newest: { SortingCol: "insertDate", SortingType: "DESC" },
  oldest: { SortingCol: "insertDate", SortingType: "ASC" },
  cheap: { SortingCol: "Cost", SortingType: "ASC" },
  expensive: { SortingCol: "Cost", SortingType: "DESC" },
  hardest: { SortingCol: "LevelName", SortingType: "DESC" },
  easiest: { SortingCol: "LevelName", SortingType: "ASC" }
}


const Dropdown = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const { value } = e.target;
    dispatch(handleSortingCol(SortDictionary[value].SortingCol))
    dispatch(handleSortingType(SortDictionary[value].SortingType))
  }

  return (
    <form class="max-w-[700px] mx-auto pl-[500px] pt-[12px] text-right ">
      <select
        value={null}
        onChange={handleSortChange}
        class="bg-[#ffff] border border-[#158B68] text-right text-[#158B68] gray-900 text-sm rounded-lg focus:ring-[#158B68] focus:border-[#158B68] block w-full p-[13px] ">
        <option value={null} >مرتب سازی</option>
        <option value="newest">جدید ترین</option>
        <option value="oldest">قدیمی ترین</option>
        <option value="cheap">ارزان ترین</option>
        <option value="expensive">گران ترین</option>
        <option value="hardest">سخت ترین</option>
        <option value="easiest">آسان ترین</option>


      </select>
    </form>


  )
};

export default Dropdown;