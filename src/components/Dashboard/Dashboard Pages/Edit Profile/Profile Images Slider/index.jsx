import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'
import profile from '../../../../../assets/images/profile.png'

const ProfileImagesSlider = () => {
    return (
        <div className="w-full h-full">
            <Swiper
                dir="ltr"
                loop={true}
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-1/2 h-full flex justify-center items-center mb-2">
                        <img src={profile} alt="" className="shrink-0 pb-10" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export { ProfileImagesSlider }
