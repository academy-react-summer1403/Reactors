import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { getSameNews } from '../../../core/services/api/getSameNews';
import { Card } from '../../Card/Card';

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
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
          {sameNews.map((item, index) => {
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