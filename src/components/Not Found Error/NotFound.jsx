import React from "react";
import error from "../../assets/Image/error.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" flex flex-col items-center py-[60px]">
      <div className="w-full md:w-3/5 px-1">
        <img src={error} />
      </div>
      <button className="bg-[#12926C] text-white px-8 py-3 rounded-[11px]">
        <Link
          to="/"
          className={({ isActive }) =>
            `${
              isActive && "bg-[#6D676757] text-[#158B68]"
            } text-gray-800 dark:text-teal-950  hover:bg-[#6D676757] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 `
          }
        >
          بازگشت به خانه
        </Link>{""}
      </button>
    </div>
  );
};

export default NotFound;
