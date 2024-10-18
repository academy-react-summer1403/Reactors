import React from "react";
import FirstSection from "./Section1/FirstSection";
import SecondeSection from "./section2/SecondeSection";
import Slider from "../Slider/Slider";

const LandingPage = () => {
  return (
    <>
      <FirstSection />
      <SecondeSection />
      <div className="pb-[80px]">
        <div className="text-[30px] w-full flex flex-col items-center">
          دوره های ما
        </div>
        <div className="text-[15px] w-full flex flex-col items-center">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </div>
      </div>
      <Slider />
    </>
  );
};

export default LandingPage;
