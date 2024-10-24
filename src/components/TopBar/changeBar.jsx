import React, { useState } from "react";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import { useDispatch, useSelector } from "react-redux";
import { handleCardView } from "../../Redux/CourseSlice";

const ChangeBar = () => {
  const dispatch = useDispatch();
  const { CardView } = useSelector((state) => state.Courses);

  return (
    <div className="flex flex-row items-center rounded-full border w-3/4 px-8 border-[#158B68] bg-[#FFFFFF] py-4">
      <div className="px-2">
        <img
          onClick={() => dispatch(handleCardView(true))}
          className={`${CardView ? "" : ""}`}
          src={right}
        />
      </div>

      <div className="px-2">
        <img
          onClick={() => dispatch(handleCardView(false))}
          className={`${!CardView ? "" : ""}`}
          src={left}
        />
      </div>
    </div>
  );
};

export default ChangeBar;
