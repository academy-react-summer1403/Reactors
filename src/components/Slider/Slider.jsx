import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { getCourseList } from '../../core/services/api/courseList';
import Card from '../LandingPage/Teachers/Card/Card';

export default function Slider() {
  const [course, setcourse] = useState([]);

  const getcourses = async () => {
    const course = await getCourseList();
    setcourse(course);
    console.log(course, "courseTop");
  };

  useEffect(() => {
    getcourses();
  }, []);

  return (
    <>
    
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {course.map((item, index) => {
            return (
              <SwiperSlide  key={index}>
                <Card data={item} />
                
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}