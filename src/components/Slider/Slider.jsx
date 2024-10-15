import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { getSameNews } from "../../core/services/api/getSameNews";
import { Card } from "../Card/Card";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

export default function Slider() {
  const [sameNews, setSameNews] = useState([]);

  const getNews = async () => {
    const sameNews = await getSameNews();
    setSameNews(sameNews);
    console.log(sameNews, "courseTop");
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        {sameNews.map((item, index) => {
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
