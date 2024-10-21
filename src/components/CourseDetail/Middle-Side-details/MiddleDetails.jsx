import React, { useState } from "react";
import like from "../../../assets/Image/like.png";
import disLike from "../../../assets/Image/dislike.png";
import Star from "../../../assets/Image/star.png";
import Cdbg from "../../../assets/Image/Cdbg.png";
import download from "../../../assets/Image/download.png";
import Comment from "./Form/Comment";
import UserComment from "./User Comment/UserComment";

const MiddleDetails = ({ courseDetail }) => {
  const [cardType, setCardType] = useState("userReview");

  const handleReviewForm = () => {
    setCardType("reviewForm");
  };

  const handleUserReview = () => {
    setCardType("userReview");
  };

  const {
    title,
    imageAddress,
    likeCount,
    dissLikeCount,
    isUserFavorite,
    describe,
  } = courseDetail;

  return (
    <div className="min-h-screen bg-[#FBF6F6] rounded-[40px] flex justify-center p-6">
      {/* گرید اصلی */}
      <div className="flex flex-col w-full min-w-[300px]  gap-6">
        {/* دایو عکس در بالای همه */}
        <div className=" flex-col rounded-[30px] flex items-center justify-center p-6 ">
          <img
            className="w-full h-[340px] object-cover rounded-[30px]"
            src={imageAddress ? imageAddress : Cdbg}
          />
        </div>

        {/* دایو سفید با اطلاعات */}
        <div className="flex flex-col rounded-[30px] gap-6">
          {/* دایو تاپ: عنوان دوره و لایک/دیس‌لایک/فیوریت */}
          <div>
            <div className="bg-white p-6 rounded-[30px] gap-5 shadow-md flex flex-col justify-between">
              <div className="flex flex-row">
                <h1 className="font-bold text-lg w-full">{title}</h1>

                <div className="flex flex-row-reverse gap-4 w-full">
                  <button className="text-gray-500 hover:text-green-500">
                    <img src={like} />
                    {likeCount}
                  </button>
                  <button className="text-gray-500 hover:text-red-500">
                    <img src={disLike} />
                    {dissLikeCount}
                  </button>
                  <button className="text-gray-500 hover:text-yellow-500">
                    <img src={Star} />
                    {isUserFavorite}0
                  </button>
                </div>
              </div>
              <div className="text-gray-700 ">{describe}</div>
            </div>
          </div>

          {/* دایو ویدیوهای دوره */}
          <div className="bg-white p-6 flex-col rounded-[30px] shadow-md">
            <h2 className="font-bold text-lg mb-4">ویدیوهای دوره</h2>
            <div className=" flex-col rounded-[30px] flex items-center justify-center p-6 ">
              <img
                src="https://ad-exchange.fr/wp-content/uploads/2019/04/Video_mobile_800x533.jpg"
                alt="image"
                className="w-full h-[340px] object-cover rounded-[30px]"
              />
            </div>
            <ul className="flex flex-col gap-4">
              <div className="flex flex-row border-b pb-3 gap-20">
                <li>ویدیو 1: معرفی دوره</li>
                <img className="pl-6" src={download} />
              </div>
              <li className="border-b pb-3">ویدیو 2: نصب و پیکربندی ابزارها</li>
              <li className="border-b pb-3">ویدیو 3: شروع برنامه‌نویسی</li>
              <li className="border-b pb-3">ویدیو 4: نکات پیشرفته</li>
            </ul>
          </div>

          {/* دایو اضافی */}
          <div className="bg-white p-6 flex-col rounded-[30px] shadow-md">
            <div className="flex pb-10  ">
              <button
                type="button"
                onClick={handleReviewForm}
                className={
                  cardType === "reviewForm"
                    ? "w-1/2 py-2 text-center rounded-[5px] bg-[#A4F6DE]"
                    : "w-1/2 py-2 border-2 border-[#A4F6DE] rounded-[5px] text-center"
                }
              >
                ثبت نظر
              </button>
              <button
                type="button"
                onClick={handleUserReview}
                className={
                  cardType === "userReview"
                    ? "w-1/2 py-2 text-center rounded-[5px] bg-[#A4F6DE]"
                    : "w-1/2 py-2 border-2 border-[#A4F6DE] rounded-[5px] text-center"
                }
              >
                نظرات کاربران
              </button>
            </div>
            {cardType === "userReview" ? <UserComment /> : <Comment />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleDetails;
