import React from "react";
import FirstSection from "./Section1/FirstSection";
import SecondeSection from "./section2/SecondeSection";
import Slider from "../Slider/Slider";
import Teacher from "./Teachers/Teacher";
import NewsSlider from "../Slider/NewsSlider";
import Suggestion from "./Suggest criticism/Suggestion";

const LandingPage = () => {
  return (
    <>
      <FirstSection />
      <SecondeSection />
      <div className="pb-[40px] pt-[80px]">
        <div className="text-[30px] w-full flex flex-col items-center">
          دوره های ما
        </div>
        <div className="text-[15px] w-full flex flex-col items-center">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </div>
      </div>
      <div className="pb-12">
        <Slider />
      </div>

      <Teacher />
      <div className="pb-[40px] pt-[80px]">
        <div className="text-[30px] w-full flex flex-col items-center">
          اخبار و مقالات
        </div>
        <div className="text-[15px] w-full flex flex-col items-center">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </div>
      </div>
      <div className="pb-12">
        <NewsSlider />
      </div>

      <div className="flex flex-col">
        <div className="text-[30px]  flex flex-col items-center">
          پیشنهادات و انتقادات
        </div>
        <div className="text-[15px]  flex flex-col items-center">
          نظرات خود را با ما درمیان بگذارید
        </div>
      <Suggestion />

      </div>

    </>
  );
};

export default LandingPage;
