import React from "react";
import bgL from "../../../assets/Image/bgL.png";
import karbar from "../../../assets/Image/karbar.png";
import mask from "../../../assets/Image/mask.png";
import video from "../../../assets/Image/video.png";
import note from "../../../assets/Image/note.png";
import figure from "../../../assets/Image/figure.png";
import chart from "../../../assets/Image/chart.png";
import map from "../../../assets/Image/map.png";
import office from "../../../assets/Image/office.png";
import analyze from "../../../assets/Image/analyze.png";
import project from "../../../assets/Image/project.png";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <div>
      {/* Section 1: Header */}
      <div className="flex flex-col md:flex-row-reverse bg-[#A4F6DE] justify-between items-center">
        <div className="w-full md:w-1/2 px-11">
          <img src={bgL} className="w-full py-7" />
        </div>
        <div className="w-full md:w-1/2 text-right px-24 pb-16">
          <h1 className="text-4xl py-10">آموزشگاه اچ وان</h1>
          <p className="pb-6">
            لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
            دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن
            نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه
            دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی
            مانند فوتوشاپ استفاده می کنند.
          </p>
          <button className="bg-[#12926C] text-white px-4 py-3 rounded-[51px]">
            <Link
              to={"/CourseList"}
              className={({ isActive }) =>
                `${
                  isActive && "bg-[#6D676757] text-[#158B68]"
                } text-gray-800 dark:text-teal-950  hover:bg-[#6D676757] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 `
              }
            >
              شروع یادگیری
            </Link>
          </button>
        </div>
      </div>

      {/* Section 2: خدمات ما */}
      <div className="text-center pt-16 px-28">
        <h2 className="text-[30px] pb-2">خدمات ما</h2>
        <p className="text-[15px] pb-8">
          ما فرصت آماده شدن برای زندگی را فراهم می‌کنیم
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-row items-center">
            <img src={figure} className=" pb-2" />
            <div className="flex flex-col">
              <p>اساتید مجرب</p>
              <p className="text-[10px] py-4">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img src={chart} className="pb-2" />
            <div className="flex flex-col">
              <p>مشاوره رایگان</p>
              <p className="text-[10px] py-4">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img src={map} className=" pb-2" />
            <div className="flex flex-col">
              <p>فرصت های شغلی</p>
              <p className="text-[10px] py-4">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img src={office} className=" mb-2" />
            <div className="flex flex-col">
              <p>ارائه مدرک معبتر</p>
              <p className="text-[10px] py-4">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img src={analyze} className=" pb-2" />
            <div className="flex flex-col">
              <p>دوره های جامع و متنوع</p>
              <p className="text-[10px] py-4">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <img src={project} className=" mb-2" />
            <div className="flex flex-col">
              <p>آموزش پروژه محور</p>
              <p className="text-[10px] py-4">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Footer */}
      <div className="p-7 ">
        <div className="p-16  bg-[#5BE1B9] text-[#158B68] rounded-[32px] text-center">
          <div className="flex flex-row justify-around">
            <div className="flex flex-col items-center">
              <img src={karbar} className=" pb-2" />
              <p>اساتید حرفه ای</p>
              <p className="text-[30px]">52</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={mask} className="pb-2" />
              <p>دانشجو</p>
              <p className="text-[30px]">81</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={video} className=" pb-6" />
              <p>دوره آموزشی</p>

              <p className="text-[30px]">182</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={note} className=" pb-4" />
              <p>مقاله آموزشی</p>

              <p className="text-[30px]">28</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
