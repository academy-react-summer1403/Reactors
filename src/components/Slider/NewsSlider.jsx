import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Card } from "../Card/Card";
import { getSameNews } from "../../core/services/api/getSameNews";

export default function NewsSlider() {
  const [news, setnews] = useState();
  const getnews = async () => {
    const {news} = await getSameNews();
    setnews(news);
  };

  useEffect(() => {
    getnews();
  }, []);

  return (
    <div className="">
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        {news?.slice(0,3).map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
