import React, { useEffect, useState } from 'react'
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
import { useMutation, useQueryClient } from 'react-query'
import { deleteProfileImage, selectProfileImage } from '../../../../../core/services/api/dashboard'
import toast from 'react-hot-toast'

const ProfileImagesSlider = () => {

    const { userProfile } = useSelector((state) => state.userInfo)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const [imageIndex, setImageIndex] = useState()
    const client = useQueryClient()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const getProileImageIndex = () => {
        setImageIndex(userProfile?.userImage.findIndex((item) => {
            return item.puctureAddress == userProfile?.currentPictureAddress
        }))
    }

    const mutationSelect = useMutation({
        mutationFn: selectProfileImage,
        onSuccess: () => {
            toast.success("عملیات با موفقیت انجام شد")
            client.invalidateQueries({queryKey: ["userInfo"]})
        }
    })

    const mutationDelete = useMutation({
        mutationFn: deleteProfileImage,
        onSuccess: () => {
            toast.success("پروفایل شما حذف شد")
            client.invalidateQueries({queryKey: ["userInfo"]})
        }
    })

    const handleSelectProfileImage = (id) => {
        const selectedImage = new FormData()
        selectedImage.append("ImageId", id)
        mutationSelect.mutate(selectedImage)
    }

    const handleDeleteProfile = (id) => {
        const deletedImage = new FormData()
        deletedImage.append("DeleteEntityId", id)
        mutationDelete.mutate(deletedImage)
    }

    useEffect(() => {
        getProileImageIndex()
    }, [imageIndex])


    return (
        <div className="w-full h-full">
            {imageIndex && <Swiper
                dir="ltr"
                loop={true}
                initialSlide={imageIndex}
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
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
                            <MenuItem onClick={() => {
                                // handleSelectProfileImage(item.id)
                                console.log(item.id)
                                handleClose()
                            }}> انتخاب </MenuItem>
                            <MenuItem onClick={handleClose}> حذف </MenuItem>
                        </Menu>
                    </div>
                </SwiperSlide>)}

            </Swiper>}

        </div>
    )
}

export { ProfileImagesSlider }
