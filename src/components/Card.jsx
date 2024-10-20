import React from "react";
// import { useNavigate } from 'react-router-dom';
import like from "../assets/like.png";
import disLike from "../assets/disLike.png";
import Star from "../assets/Star.png";
import CourseRate from "../assets/Image/CourseRate.png";
import dateModifire from "../core/utils/dateModifier";
import notfoundImage from "../assets/Image/notfoundImage.webp";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    teacherName,
    statusName,
    cost,
    likeCount,
    userIsLiked,
    courseRate,
    title,
    describe,
    tumbImageAddress,
    lastUpdate,
    courseId,
    dissLikeCount,
    readMore,
    reserv,
  } = data;
  // const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate("/detail/" + courseId)}
      className="flex flex-col items-center bg-[#FBF6F6]  shadow md:shadow-lg  shadow-slate-600/80 rounded-[30px]  min-h-[392px] w-full"
    >
      <img
        className="flex justify-center pb-4 rounded-tl-[1rem] rounded-tr-[1rem] object-cover object-center h-[250px] min-w-full min-h-[200px] "
        src={tumbImageAddress ? tumbImageAddress : notfoundImage}
        // ${techName ? `&TechCount=1&ListTech=${techName}` :""}
      />

      <div className="flex justify-between flex-row-reverse items-center px-4 py-[1px] text-sm min-w-full gap-2">
        <div className="flex justify-between flex-row-reverse gap-2">
          <p className="text-[#089E71]">
            <img className="flex items-center" src={like} />
            {likeCount}
          </p>

          <p className="text-[#089E71]">
            <img className="flex items-center" src={disLike} />
            {dissLikeCount}
          </p>

          <p className="text-[#089E71]">
            <img className="flex items-center" src={Star} />
            {userIsLiked}
          </p>
        </div>

        <div className="flex justify-between items-center px-4 pb-2 text-[12px] text-[#158B68] rounded-[12px] bg-[#BFF4E4] ">
          <p className=" pt-[2px]">{statusName}</p>
        </div>
      </div>

      <h2 className="flex justify-between items-center text-[20px] w-full px-4 pb-4">
        {title}
      </h2>

      <div className="flex justify-between flex-row items-center text-sm w-full px-4 pb-4">
        <div className="">
          <div className="text-[#8C9F9A] text-[12px] w-full ">
            {teacherName}
          </div>
        </div>
        <span className="pr-[137px] ">{courseRate}</span>
        <img src={CourseRate} />
      </div>

      <div className="flex justify-between items-center text-[12px] text-[#158B68] w-full px-4 pb-4">
        {dateModifire(lastUpdate)}
      </div>

      <p className="flex justify-between items-center h-[100px] text-[12px] text-[#6D6767] w-full  px-4 pb-4">
        {describe}
      </p>

      <p className=" text-center text-red-500  text-base pb-4 border-t w-full border-[#158B68] ">
        <span className="text-[#12926C] pl-[10px] ">هزینه تمام دوره:</span>
        {cost}تومان
      </p>

      <div className="flex justify-between w-[90%] gap-2 pb-[10px]">
        <button
          className="bg-[#5BE1B9] text-black py-2 w-[80%] rounded-lg"
          onClick={() => navigate("/ProductDetail/" + courseId)}
        >
          {reserv} رزرو دوره
        </button>

        <button
          className="bg-white border border-[#5BE1B9] text-black py-2 w-[80%] rounded-lg"
          onClick={() => navigate("/ProductDetail/" + courseId)}
        >
          <Link
            to={"/CourseDetails"}
            className={({ isActive }) =>
              `${
                isActive && "bg-[#6D676757] text-[#158B68]"
              } text-gray-800 dark:text-teal-950  hover:bg-[#6D676757] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 `
            }
          >
            جزئیات دوره
          </Link>
          {readMore}
        </button>
      </div>
    </div>
  );
};

export { Card };
