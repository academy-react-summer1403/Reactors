import React, { useState } from "react";
import bgUp from "../../../assets/Image/bgUp.png";
import like from "../../../assets/Image/like.png";
import disLike from "../../../assets/Image/dislike.png";
import Star from "../../../assets/Image/star.png";

import author from "../../../assets/Image/author.png";
import view from "../../../assets/Image/view.png";
import calender from "../../../assets/Image/calender.png";
import key from "../../../assets/Image/key.png";
import NewsUserComment from "./User Comment/UserComment";
import Comment from "./Form/Comment";

const NewsContainer = () => {
  const [cardType, setCardType] = useState("userReview");

  const handleReviewForm = () => {
    setCardType("reviewForm");
  };

  const handleUserReview = () => {
    setCardType("userReview");
  };

  return (
    <div className="min-h-screen bg-[#FBF6F6] rounded-[40px] flex justify-center p-6 ">
      <div className="flex flex-col w-full min-w-[100px]  gap-6">
        <div className=" flex-col rounded-[30px] flex items-center justify-center p-6">
          <img
            src={bgUp}
            alt="image"
            className="min-w-[300px] object-cover rounded-[30px]"
          />
        </div>
        <div className="bg-white p-6  flex-col rounded-[30px] shadow-md px-9">
          <h1 className="text-[30px] w-full flex flex-col items-center">
            عنوان مقاله
          </h1>
          <div className="text-gray-700 pt-8">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و
            استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها
            و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه
            در حال توسعه است. لورم ایپسوم فقط برای توسعه دهندگان وب نیست.
            <p className="pt-8">
              طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ
              استفاده می کنند. لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی
              است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می
              شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است.
              لورم ایپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از
              آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.
            </p>
            <p className="pt-8">
              لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
              توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های
              لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم
              فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم
              افزارهای مختلفی مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب
              ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب،
              تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می
              دهد که یک پروژه در حال توسعه است.
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between items-center">
            <div className="flex flex-row-reverse gap-4">
              <span>
                {" "}
                <img src={like} />
              </span>
              <span>
                <img src={disLike} />
              </span>
              <span>
                <img src={Star} />
              </span>
            </div>
            <div className="flex flex-row gap-11 py-8">
              <div className="flex flex-row-reverse gap-3">
                <span className="text-[13px] text-[#126F94] w-full">
                  نام نویسنده :{" "}
                </span>
                <img src={author} />
              </div>

              <div className="flex flex-row-reverse gap-3">
                <span className="text-[13px] text-[#807A7A] w-full">1124</span>
                <img src={view} />
              </div>

              <div className="flex flex-row-reverse gap-3">
                <span className="text-[13px] text-[#807A7A] w-full">
                  مهر 1402
                </span>
                <img src={calender} />
              </div>

              <div className="flex flex-row-reverse gap-3">
                <span className="text-[13px] text-[#807A7A] w-full">
                  کلمات کلیدی
                </span>
                <img src={key} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row rounded-[15px] px-28 py-3">
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
            }          >
            نظرات کاربران
          </button>
        </div>

        <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md">
          {/* <NewsUserComment /> */}
          {cardType === "userReview" ? <NewsUserComment /> : <Comment />}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
