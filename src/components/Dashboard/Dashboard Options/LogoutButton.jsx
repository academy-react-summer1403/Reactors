import React, { useState } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { BiSolidError } from 'react-icons/bi';
import { logout } from '../../../core/utils/logout.services';
import { useNavigate } from 'react-router-dom';

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
};

const LogoutButton = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()

    return (
        <div className="w-full">
            <Button onClick={handleOpen} style={{ width: "100%" }}>
                <div className="text-[#158B68] flex items-center gap-[15px] py-[10px] px-5 rounded-[45px] duration-200 w-full hover:text-white hover:bg-[#158B68]">
                    <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center text-2xl">
                        <HiOutlineLogout />
                    </div>
                    <p className="text-[18px]"> خروج </p>
                </div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-5 items-center">
                            <BiSolidError className="size-10 text-[#fcad03]" />
                            <p className="text-[20px] font-semibold"> آیا مطمئن هستید؟ </p>
                        </div>
                        <div className="flex flex-row-reverse gap-[5px]">
                            <button onClick={()=>{
                                logout()
                                navigate("/")
                            }} className="bg-[#158B68] text-white rounded-[5px] py-[10px] px-[20px] shadow-[0_3px_3px_0_#57575729]"> بله </button>
                            <button onClick={handleClose} className="bg-white text-[#158B68] border border-[#158B68] rounded-[5px] py-[10px] px-[20px] shadow-[0_3px_3px_0_#57575729]"> خیر </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export { LogoutButton }
