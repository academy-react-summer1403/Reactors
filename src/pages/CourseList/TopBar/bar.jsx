import React from "react";
import Search from "./Search";
import Dropdown from "./dropDown";
import ChangeBar from "./changeBar";

const Bar = () => {

    return (
        <>
        <div className="mx-auto flex  flex-row mt-[10rem] justify-center bg-[#FBF6F6] rounded-xl shadow-md w-[1189px] h-[70px]">
            <div className="p-4 text-right -mt-28 ml-[440px] h-full">
            <h2 className="text-2xl font-bold ml-10 ">لیست دوره‌ها</h2>
            </div>
            
            <Search></Search>
            <Dropdown></Dropdown>
            <ChangeBar></ChangeBar>
            
    

        </div>

</>
    );

}
export { Bar }