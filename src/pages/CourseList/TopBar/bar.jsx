import React from "react";
import Search from "./Search";
import Dropdown from "./dropDown";
const Bar = () => {

    return (
        <>
        <div class="mx-auto flex  flex-row mt-[10rem] justify-center bg-[#FBF6F6] rounded-xl shadow-md w-[1189px] h-16">
            <div className="p-4 text-right -mt-28 ml-[440px] h-full">
            <h2 className="text-2xl font-bold ml-10 ">لیست دوره‌ها</h2>
            </div>
            
            <Search></Search>
            <Dropdown></Dropdown>

        </div>

</>
    );

}
export { Bar }