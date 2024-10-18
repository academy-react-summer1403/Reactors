import React from "react";
import { useDispatch } from "react-redux";
import { handleSortingCol, handleSortingType } from "../../../Redux/NewsSlice";


const SortDictionary = {
  newest: { SortingCol: "insertDate", SortingType: "DESC" },
  oldest: { SortingCol: "insertDate", SortingType: "ASC" },
};

const DropDown = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const { value } = e.target;
    dispatch(handleSortingCol(SortDictionary[value].SortingCol));
    dispatch(handleSortingType(SortDictionary[value].SortingType));
  };

  return (
    <div>
      <form>
        <select
          className=" gap-9 rounded-full border border-[#158B68] text-[16px] bg-[#FFFFFF] px-14 py-4"
          value={null}
          onChange={handleSortChange}
        >
          <option className="border-[#158B68]" value={null}>
            مرتب سازی
          </option>
          <option value="newest">جدید ترین</option>
          <option value="oldest">قدیمی ترین</option>
        </select>
      </form>
    </div>
  );
};

export default DropDown;
