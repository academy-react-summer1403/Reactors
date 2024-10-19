import React from "react";
// import profile from "../../../assets/Image/profile.png";
import h1 from "../../../assets/Image/h1.png";
// import basket from "../../../assets/Image/basket.png";
import { Link, NavLink } from "react-router-dom";

import search from "../../../assets/Image/search.png";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-1 py-2.5 dark:bg-[#A4F6DE]">
        <div className="flex flex-row-reverse justify-between items-center mx-auto max-w-screen-xl">
          <div className=" flex flex-row-reverse items-center gap-2 px-4">
            <button className="bg-[#00DF9D] text-[12px] p-4  text-black py-2 rounded-lg">
              <Link
                to={"/authentication"}
                className={({ isActive }) =>
                  `${
                    isActive && "bg-[#6D676757] text-[#158B68]"
                  } text-gray-800 dark:text-teal-950  hover:bg-[#6D676757] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 `
                }
              >
                ورود/ثبت نام
              </Link>
            </button>

            <img className="pl-2" src={search}></img>
          </div>

          <a href="https://flowbite.com" className="flex items-center"></a>

          <div className="flex flex-row-reverse items-center lg:order-2  ">
            <span className="pr-2 text-[18px] text-[#22445D] ">
              آکادامی اچ وان
            </span>
            <img src={h1} className="pr-2 sm:h-9" alt="Logo" />
          </div>

          <div
            className="hidden justify-between  items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col  font-medium lg:flex-row lg:space-x  pr-[147px]">
              <li>
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    `${
                      isActive && "bg-[#6D676757] text-[#158B68]"
                    } text-gray-800 dark:text-teal-950  hover:bg-[#6D676757] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 `
                  }
                >
                  صفحه اصلی
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/CourseList"
                  className={({ isActive }) =>
                    `${
                      isActive && "bg-[#6D676757] text-[#158B68]"
                    } text-gray-800 dark:text-teal-950  hover:bg-[#6D676757] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 `
                  }
                >
                  دوره ها
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/NewsList"
                  className={({ isActive }) =>
                    `${
                      isActive && "bg-[#6D676757] text-[#158B68]"
                    } text-gray-800 dark:text-teal-950  hover:bg-[#6D676757] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 `
                  }
                >
                  مقالات
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="#"
                  className="text-gray-800 dark:text-teal-950 dark:hover:text-[#158B68] hover:bg-[#6D676757]  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:hover:bg-slate-100 "
                >
                  درباره ما
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
