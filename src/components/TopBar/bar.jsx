import React from "react";
import Search from "./Search";
import Dropdown from "./dropDown";
import ChangeBar from "./changeBar";
const Bar = () => {
  return (
    <div className="w-full py-3 px-8 flex rounded-[37px] bg-[#FBF6F6] shadow-2xl shadow-black/20 justify-between items-center">
      <div className="flex items-center gap-5">
        <ChangeBar></ChangeBar>
        <Dropdown></Dropdown>
      </div>
      <div className="">
        <Search></Search>
      </div>
    </div>
  );
};
export { Bar };
