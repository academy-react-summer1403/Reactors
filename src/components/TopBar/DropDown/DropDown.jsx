import React from "react";
import { useDispatch } from "react-redux";
import { handleSortingCol, handleSortingType } from "../../../Redux/NewsSlice";


const SortDictionary = {
  newest: { SortingCol: "insertDate", SortingType: "DESC" },
  oldest: { SortingCol: "insertDate", SortingType: "ASC" },
  mostView: { SortingCol: "currentView", SortingType: "DESC" },
  mostLike: { SortingCol: "currentLikeCount", SortingType: "ASC" },
  Sort : { SortingCol: "", SortingType: "" }

};

const DropDown = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const { value } = e.target;
    dispatch(handleSortingCol(SortDictionary[value].SortingCol));
    dispatch(handleSortingType(SortDictionary[value].SortingType));
  };

  return (
      <form>
        <select
          className=" gap-9 rounded-full border border-[#158B68] text-[16px] bg-[#FFFFFF] px-14 py-4"
          value={null}
          onChange={handleSortChange}
        >
          <option className="border-[#158B68" value="Sort">
            مرتب سازی
          </option>
          <option value="newest">جدید ترین</option>
          <option value="oldest">قدیمی ترین</option>
          <option value="mostView">پر بازدید ترین</option>
          <option value="mostLike">محبوب ترین</option>
        </select>
      </form>
  );
};

export default DropDown;
