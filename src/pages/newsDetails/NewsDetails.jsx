import React from "react";
import { Header } from "../../components/common/Header/Header";
import { Footer } from "../../components/common/Footer/Footr";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import Slider from "../../components/Slider/Slider";

const NewsDetails = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col px-16 py-[70px] ">
        <NewsContainer />
      </div>
      <div className="flex flex-col py-[37px]">
        <div className="pb-[80px]">
          <div className="text-[30px] w-full flex flex-col items-center">
            اخبار مقالات مشابه
          </div>
          <div className="text-[15px] w-full flex flex-col items-center">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </div>
        </div>
        <Slider></Slider>
      </div>

      <Footer />
    </>
  );
};

export default NewsDetails;
