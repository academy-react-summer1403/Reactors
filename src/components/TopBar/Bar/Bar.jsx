import React from "react";
import DropDown from "../DropDown/DropDown";
import Category from "../Category/Category";
import Search from "../Search/Search";
const Bar = () => {
  return (
    <div className="w-full py-3 px-8 flex flex-row rounded-[37px] bg-[#FBF6F6] text-[#158B68] shadow-2xl shadow-black/20 justify-between items-center">
      <div className="grid grid-row md:grid-cols-2 gap-2 py-4 items-center ">
        <DropDown></DropDown>
        <Category></Category>

        <div className="grid grid-row mx:grid-row-2 ">
        <Search></Search>
        </div>

      </div>
    </div>
  );
};

export default Bar;
