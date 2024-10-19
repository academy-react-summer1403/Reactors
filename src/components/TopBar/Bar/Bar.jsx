import React from "react";
import DropDown from "../DropDown/DropDown";
import Category from "../Category/Category";
import Search from "../Search/Search";
const Bar = () => {
  return (
    <div>
      <div className="flex items-center gap-5 px-5">
        <DropDown></DropDown>
        <Category></Category>

        <div className="pr-[245px]">
        <Search></Search>
        </div>

      </div>
    </div>
  );
};

export default Bar;
