import React from "react";
import like from "../assets/like.png";
import disLike from "../assets/disLike.png";
import Star from "../assets/Star.png";
import CourseRate from "../assets/Image/CourseRate.png";
import { handleCardView } from "../Redux/CourseSlice";
import dateModifier from "../core/utils/dateModifier";

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
      <div className="flex flex-row-reverse items-center bg-white border ">
        <div className="w-[180px] h-full flex items-center justify-center bg-slate-600">
          <img src={tumbImageAddress} className="w-full h-full object-cover" />
        </div>

        {/* Course Content */}
        <div className="flex flex-col items-end w-full px-4 gap-2">
          <h3>{title}</h3>

          <div className="flex items-center justify-between">
            <div className=""></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
