import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { getCourseTop } from "../../core/services/api/getCourseTop";
import { Card } from "../Card";
// import { getCourseList } from '../../core/services/api/courseList';
// import Card from '../LandingPage/Teachers/Card/Card';

export default function Slider() {
  const [course, setcourse] = useState([]);

  const getcourses = async () => {
    const course = await getCourseTop();
    setcourse(course);
    console.log(course, "courseTop");
  };

  useEffect(() => {
    getcourses();
  }, []);

  return (
    <>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation]}
        width={990}
        height={400}
        
      >
          {courseTop.map((item, index) => { */}

      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        {course.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
