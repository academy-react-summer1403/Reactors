import React, { useState } from "react";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import { useDispatch, useSelector } from "react-redux";
import { handleCardView } from "../../Redux/CourseSlice";

const ChangeBar = ({ course }) => {
  const dispatch = useDispatch();
  const { CardView } = useSelector((state) => state.Courses);

  return (
    <div className="flex items-center gap-9 rounded-full border border-[#158B68] px-3 bg-[#FFFFFF] py-2">
      <img
        onClick={() => dispatch(handleCardView(false))}
        className={`${CardView ? " text-white" : "bg-slte-400"}`}
        src={left}
      />

      <img
        onClick={() => dispatch(handleCardView(true))}
        className={`${!CardView ? "text-white" : "bg-gay-300"}`}
        src={right}
      />
    </div>
  );
};

export default ChangeBar;
