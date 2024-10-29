import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { HiOutlineDotsVertical } from "react-icons/hi";
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
import {motion,AnimatePresence} from 'framer-motion'

const ProfileImagesSlider = () => {
    const [dropdownIsOpen,setDropdownIsOpen] = useState(false)
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
        <>
        <div className='fixed top-0 left-0  bottom-0 right-0 ' onClick={()=>{
            setDropdownIsOpen(false)
        }}></div>
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
                {userProfile?.userImage.map((item, key) =>{
                    
                    return (
                         <SwiperSlide key={key}>
                        <div className="w-1/2 h-full flex justify-center items-center mb-2 relative">
                            <img src={item.puctureAddress} alt="" className="shrink-0" />
                            <div className='absolute top-0 right-0' onClick={()=>{
                                setDropdownIsOpen(!dropdownIsOpen)
                            }}>
                            
                                <HiOutlineDotsVertical size={32}/>
                                <AnimatePresence mode='wait'>
                                {dropdownIsOpen && <motion.div onClick={()=>{
                                    console.log(item.id);
                                    setDropdownIsOpen(false)
                                    }} initial={{y:-100}} animate={{y:-0}} exit={{y:-100}} className='bg-white px-4 py-2 absolute top-0 left-0'>
                                        click
                                    </motion.div>}
                                </AnimatePresence>
                            </div>
                        </div>
                    </SwiperSlide>)
                })}

            </Swiper>}

        </div>
        </>
    )
}

export { ProfileImagesSlider }
