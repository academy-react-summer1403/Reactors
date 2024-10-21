import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Coursestyles.css";
import { getCourseTop } from "../../../core/services/api/getCourseTop";
import { Card } from "../../Card";

export default function CardSlider() {
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
