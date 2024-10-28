import React from "react";
import {
  BiUserCircle,
  BiDislike,
  BiLike,
  BiSolidDislike,
  BiSolidLike,
  BiSolidStar,
  BiStar,
} from "react-icons/bi";
import { LiaReplySolid } from "react-icons/lia";

const UserComment = () => {
  return (
    <div>
      <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-[#158B68]">
              <BiUserCircle />
            </div>
            <h2 className="text-[15px]">عنوان : عنوان نظر</h2>
          </div>
          <div className="flex flex-row gap-4">
            <BiLike className="text-2xl text-[#158B68]" />
            <BiDislike className="text-2xl text-[#158B68]" />
            <LiaReplySolid className="text-2xl text-[#158B68]" />
          </div>
        </div>
        <div className="text-gray-700 pt-5 min-h-[110px]">
          لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
          دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
          نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم فقط برای توسعه
          دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند
          فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب ترین و استانداردترین متن
          ساختگی است که توسط توسعه دهندگان وب،
        </div>
        <div className="flex flex-row-reverse justify-between items-center text-xs text-gray-500">
          <span>2024-10-15 | 12:45 </span>
        </div>
      </div>
      <div className="p-4 pt-1 flex flex-row-reverse gap-6">
        <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
        <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
      </div>
    </div>
  );
};

export default UserComment;
