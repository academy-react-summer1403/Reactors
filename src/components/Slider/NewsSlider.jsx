import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';
// import Card from '../LandingPage/Teachers/Card/Card';
import { getNewsList } from '../../core/services/api/newsList';
import { Card } from '../Card/Card';

export default function NewsSlider() {
  const [news, setnews] = useState([]);

  const getnews = async () => {
    const news = await getNewsList();
    setnews(news);
    console.log(news, "newsList");
  };

  useEffect(() => {
    getnews();
  }, []);

  return (
    <>
    
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
      >
          {news.map((item, index) => {
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