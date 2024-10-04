import React, { useState } from "react";
import right from "../../../assets/right.png"
import left from "../../../assets/left.png"

const ChangeBar = () => {


  return (
    <div className="mt-[7px] mr-[15px]">
        <div className="inline-flex justify-center   rounded-[43px] border border-[#158B68] shadow-sm px-[3px] py-[3px] bg-white text-sm font-medium text-[#158B68] hover:bg-gray-50 focus:outline-none">
            <div>
                <img src={left} className="aspect-video object-cover object-center px-[7px] py-[7px] min-w-[24px] min-h-[21px]" />
            </div>
            <div>
                <img src={right} className="aspect-video object-cover object-center px-[7px] py-[7px] min-w-[24px] min-h-[21px]" />
            </div>
        </div>

    </div>
  );
};

export default ChangeBar;