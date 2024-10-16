import React from "react";
import bgUp from "../../assets/Image/bgUp.png";
import like from "../../assets/Image/like.png";
import disLike from "../../assets/Image/dislike.png";
import Star from "../../assets/Image/star.png";

import author from "../../assets/Image/author.png";
import view from "../../assets/Image/view.png";
import calender from "../../assets/Image/calender.png";
import key from "../../assets/Image/key.png";

import user from "../../assets/Image/user.png";
import reply from "../../assets/Image/reply.png";

const NewsContainer = () => {
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
            className="w-1/2 py-4 text-center rounded-[10px] bg-[#A4F6DE]"
          >
            ثبت نظر
          </button>
          <button
            type="button"
            className="w-1/2 py-4 border-2 border-[#A4F6DE] rounded-[10px] text-center "
          >
            نظرات کاربران
          </button>
        </div>
        <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div>
                <img src={user} />
              </div>
              <h2 className="text-[15px]">عنوان : عنوان نظر</h2>
            </div>
            <div className="flex flex-row gap-4">
              <img src={like} />
              <img src={disLike} />
              <img src={reply} />
            </div>
          </div>
          <div className="text-gray-700 pt-5 min-h-[110px]">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و
            استانداردترین متن ساختگی است که توسط توسعه دهندگان وب،
          </div>
          <div className="flex flex-row-reverse justify-between items-center text-xs text-gray-500">
            <span>2024-10-15 | 12:45 </span>
          </div>
        </div>
        <div className="p-4 pt-0 flex flex-row-reverse gap-6">
            <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
            <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
          </div>
      </div>
    </div>
  );
};

export default NewsContainer;
