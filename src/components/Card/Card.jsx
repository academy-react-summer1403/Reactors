import React from "react";
// import { useNavigate } from 'react-router-dom';
import like from "../../assets/Image/like.png";
import disLike from "../../assets/Image/dislike.png";
import Star from "../../assets/Image/star.png";
import rate from "../../assets/Image/rate.png";
// import dateModifire from "../core/utils/dateModifier";

const Card = ({ data }) => {
  const {
    title,
    miniDescribe,
    currentRate,
    currentImageAddressTumb,
    addUserProfileImage,
    addUserFullName,
    newsCatregoryName,
    currentLikeCount,
    currentUserRateNumber,
    currentDissLikeCount,
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
        src={currentImageAddressTumb}
      />

      <div className="flex justify-between flex-row-reverse items-center px-4 py-[1px] text-sm min-w-full gap-2">
        <div className="flex justify-between flex-row-reverse gap-2">
          <p className="text-[#089E71]">
            <img className="flex items-center" src={like} />
            {currentLikeCount}
          </p>

          <p className="text-[#089E71]">
            <img className="flex items-center"src={disLike} />
            {currentDissLikeCount}
          </p>

          <p className="text-[#089E71]">
            <img className="flex items-center" src={Star}  />
            {currentUserRateNumber}
          </p>
        </div>

        <div className="flex justify-between items-center px-4 pb-2 text-[12px] text-[#158B68] rounded-[12px] bg-[#BFF4E4] ">
          <p className=" pt-[2px]">{newsCatregoryName}</p>
        </div>
      </div>

      <h2 className="flex justify-between items-center text-[20px] w-full px-4 pb-4">
        {title}
      </h2>

      <div className="flex justify-between flex-row-reverse items-center text-sm w-full px-4">
        <div className="">
          <div className="flex flex-row-reverse gap-2 text-[#8C9F9A] text-[12px] w-full ">
            <img src={rate}></img>
            {currentRate}
          </div>
        </div>
        <div className="flex flex-row">
          <img
            className="rounded-full w-[33px] h-[34px] "
            src={addUserProfileImage}
          />
          <div className="pt-[5px] pr-[10px]">
            {addUserFullName}
          </div>
        </div>
      </div>


      <p className="flex justify-between items-center text-[12px] text-[#6D6767] w-full min-h-[80px] px-4 pb-4">
        {miniDescribe}
      </p>

      <div
        className=" text-[#807A7A] flex pr-[119px] border-t border-[#158B68] py-2 w-[90%]"
        onClick={() => navigate("/ProductDetail/" + courseId)}
      >
        {reserv} جزئیات دوره
      </div>
    </div>
  );
};

export { Card };
