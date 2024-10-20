import React from "react";
import like from "../assets/like.png";
import disLike from "../assets/disLike.png";
import Star from "../assets/Star.png";
import CourseRate from "../assets/Image/CourseRate.png";
import { handleCardView } from "../Redux/CourseSlice";
import dateModifier from "../core/utils/dateModifier";
import notfoundImage from "../assets/Image/notfoundImage.webp";
import dateModifire from "../core/utils/dateModifier";
import { Link } from "react-router-dom";


const HorizontalCard = ({ data }) => {
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
    <div>
      <div
        dir="ltr"
        className="flex flex-row-reverse items-center rounded-[10px] bg-white border "
      >
        <div className="w-[280px]  flex items-center justify-center">
          <img
            src={tumbImageAddress ? tumbImageAddress : notfoundImage}
            className="w-full h-full rounded-tr-[10px] rounded-br-[10px] object-cover"
          />
        </div>

        {/* Course Content */}
        <div className="flex flex-col items-end w-full px-4 gap-2">
          <div className="text-[15px]">{title}</div>
          <div className="flex justify-between flex-row items-center px-4 py-[1px] text-sm min-w-full gap-2">
            <div className="flex justify-between flex-row gap-2">
              <p className="text-[#089E71]">
                <img className="flex items-center" src={like} />
                {likeCount}
              </p>

              <p className="text-[#089E71]">
                <img className="flex items-center" src={disLike} />
                {dissLikeCount}
              </p>
            </div>

            <div className="flex mr-[-21px] justify-between items-center px-4 pb-2 text-[12px] text-[#158B68] rounded-[12px] bg-[#BFF4E4] ">
              <p className=" pt-[2px]">{statusName}</p>
            </div>
          </div>
          <div className="text-[12px] text-[#8C9F9A]"> {teacherName} </div>

          <div className="text-[11px] text-[#158B68]">
            {dateModifire(lastUpdate)}
          </div>

          <div className="flex  flex-col pb-[19px] items-center justify-between">
            <div dir="rtl" className=" text-[11px] ">
              {describe}
            </div>
          </div>
          <p className=" text-center text-red-500  text-base pb-4 border-t min-w-[90%] border-[#158B68] ">
            <span className="text-[#12926C] pl-[10px] ">هزینه تمام دوره:</span>
            {cost}تومان
          </p>
          <div className="flex justify-between gap-2 pb-[7px]">
            <button
              className="bg-[#5BE1B9] text-black py-2 w-[112px] rounded-lg"
              onClick={() => navigate("/ProductDetail/" + courseId)}
            >
              {reserv} رزرو دوره
            </button>

            <button
              className="bg-white border border-[#5BE1B9] text-black py-2 w-[112px] rounded-lg"
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
      </div>
    </div>
  );
};

export default HorizontalCard;
