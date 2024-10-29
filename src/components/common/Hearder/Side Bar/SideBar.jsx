import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
export default function SlidBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ duration: 0.35 }}
              className="md:hidden flex flex-col fixed right-0 min-w-[440px] py-10
         items-center bottom-0 top-0 bg-[#22c7ab] z-20"
            >
              <div className="px-1 pt-1 pb-3 space-y-1 flex flex-col ">
                <a className="py-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive && " text-white bg-[#1a9a85]"
                      }  px-16 py-2 rounded-md text-base font-medium hover:bg-[#1a9a85]`
                    }
                  >
                    صفحه اصلی
                  </NavLink>
                </a>
                <a className="py-2">
                  <NavLink
                    to="/course-list"
                    className={({ isActive }) =>
                      `${
                        isActive && " text-white bg-[#1a9a85]"
                      }  px-16 py-2 rounded-md text-base font-medium hover:bg-[#1a9a85]`
                    }
                  >
                    دوره ها
                  </NavLink>
                </a>
                <a className="py-2">
                  <NavLink
                    to="/news-list"
                    className={({ isActive }) =>
                      `${
                        isActive && " text-white bg-[#1a9a85]"
                      }  px-16 py-2 rounded-md text-base font-medium hover:bg-[#1a9a85]`
                    }
                  >
                    مقالات
                  </NavLink>
                </a>
                <a className="py-2">
                  <NavLink
                    to="/AboutUs"
                    className={({ isActive }) =>
                      `${
                        isActive && " text-white bg-[#1a9a85]"
                      }  px-16 py-2 rounded-md text-base font-medium hover:bg-[#1a9a85]`
                    }
                  >
                    درباره ما
                  </NavLink>
                </a>
              </div>
            </motion.div>
            <div
              className="absolute top-0 bottom-0 w-full z-10"
              onClick={() => {
                setIsOpen(false);
              }}
            ></div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
