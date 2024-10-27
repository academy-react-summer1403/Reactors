import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.css'
import profile from '../../../../../assets/images/profile.png'
import { useSelector } from 'react-redux'
import { Button } from 'flowbite-react'
import { Menu, MenuItem } from '@mui/material'

const ProfileImagesSlider = () => {

    const { userProfile } = useSelector((state) => state.userInfo)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const getProileImageIndex = () => {
        for (let i; i < userProfile?.userImage.length; i++) {
            if (userProfile?.userImage[i] === userProfile?.currentPictureAddress) {
                return i
            }
        }
    }

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
                {/* <SwiperSlide>
                    <div className="w-1/2 h-full flex justify-center items-center mb-2">
                        <img src={profile} alt="" className="shrink-0 pb-10" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide> */}
                {userProfile?.userImage.map((item, key) => <SwiperSlide key={key}>
                    <div className="w-1/2 h-full flex justify-center items-center mb-2 relative">
                        <img src={item.puctureAddress} alt="" className="shrink-0" />
                        <Button 
                            className="absolute top-0 right-1 w-10 border-none"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <p className="text-[#5BE1B9] text-[50px]"> ... </p>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}> انتخاب </MenuItem>
                            <MenuItem onClick={handleClose}> حذف </MenuItem>
                        </Menu>
                    </div>
                </SwiperSlide>)}

            </Swiper>
        </div>
    )
}

export { ProfileImagesSlider }
