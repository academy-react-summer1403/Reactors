import React from "react";
import { Header } from "../../components/common/Header/Header";
import { Footer } from "../../components/common/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import CourseDetail from "../../components/CourseDetail/CourseDetail";

const CourseDetails = () => {
  return (
    <>
      <Header />
      <CourseDetail/>
      <Slider/>
      <Footer/>
    </>
  );
};

export default CourseDetails;
