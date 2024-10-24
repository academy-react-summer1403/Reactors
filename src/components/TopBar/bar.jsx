import React from "react";
import Search from "./Search";
import Dropdown from "./dropDown";
import ChangeBar from "./changeBar";
const Bar = () => {
  return (
    <div className="w-full py-3 px-8 flex flex-row rounded-[37px] bg-[#FBF6F6] text-[#158B68] shadow-2xl shadow-black/20 justify-between items-center">
      <div className="grid grid-row md:grid-cols-2 gap-2 py-4 items-center ">
        <ChangeBar></ChangeBar>
        <Dropdown></Dropdown>
      </div>
      <div className="grid grid-row mx:grid-cols-">
        <Search></Search>
      </div>
    </div>
  );
};
export { Bar };
