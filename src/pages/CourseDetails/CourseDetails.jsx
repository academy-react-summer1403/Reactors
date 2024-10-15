import React from "react";
import { Header } from "../../components/common/Header/Header";
import { Footer } from "../../components/common/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import LeftDetails from "../../components/Left-Side-details/LeftDetails";

const CourseDetails = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row-reverse px-16 py-[70px]">
        <LeftDetails />
      </div>

      {/* <Slider/> */}
      {/* <Footer/> */}
    </>
  );
};

export default CourseDetails;
