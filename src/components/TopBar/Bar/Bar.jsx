import React from "react";
import DropDown from "../DropDown/DropDown";
import Category from "../Category/Category";
import Search from "../Search/Search";
const Bar = () => {
  return (
    <div className="w-full py-5 mx-4 px-8 flex flex-col gap-5 lg:flex-row rounded-[37px] bg-[#FBF6F6] text-[#158B68] shadow-2xl shadow-black/20 justify-between items-center">
      <div className="flex items-center gap-6">
        <DropDown/>
        <Category/>
      </div>

        <div className="lg:w-auto w-full ">
        <Search/>
        </div>

    </div>
  );
};

export default Bar;
