import React from "react";
import Search from "./Search";
import Dropdown from "./dropDown";
const Bar = () => {

    return (
        <>
        <div class="mx-auto flex  flex-row justify-center bg-[#FBF6F6] rounded-xl shadow-md w-11/12 h-16">
            <div className="p-4 text-right">
            <h2 className="text-2xl font-bold -mt-16">لیست دوره‌ها</h2>
            </div>
            <Search></Search>
            <Dropdown></Dropdown>

        </div>

</>
    );

}
export { Bar }