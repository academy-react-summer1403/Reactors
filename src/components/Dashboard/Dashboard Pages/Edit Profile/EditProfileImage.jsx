import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { EditButton } from '../../../common/Dashboard/Styled DashboardPages/StyledEditButton'

import Profile from '../../../../assets/images/profile.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { ProfileImagesSlider } from './Profile Images Slider';
import { Field, Form, Formik } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
}

const EditProfileImage = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <DashboardPartsBody className="flex-col">
            <DashboardPartsTitle className="p-5">
                <p> عکس پروفایل </p>
            </DashboardPartsTitle>
            <div className="p-6 flex flex-col items-center gap-5">
                <div>
                    <img src={Profile} alt="" />
                </div>
                <Button onClick={handleOpen} style={{
                    padding: "10px 20px",
                    background: "#12926C",
                    color: "white",
                    borderRadius: "50px",
                    fontSize: "18px"
                }}> ویرایش عکس </Button>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <div className="w-full flex flex-col mb-5">
                            <ProfileImagesSlider />
                        </div>
                        <Formik>
                            <Form className="w-full flex flex-col justify-center items-center gap-5">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <label htmlFor="filePicker" className="py-[10px] px-5 border border-[#158B68] rounded-[5px]"> انتخاب فایل </label>
                                    <Field type="file" id="filePicker" className="" />
                                    <p> JPG or PNG no larger than 5 MB </p>
                                </div>
                                <EditButton> آپلود عکس </EditButton>
                            </Form>
                        </Formik>
                    </Box>
                </Modal>
            </div>
        </DashboardPartsBody>
    )
}

export { EditProfileImage }
