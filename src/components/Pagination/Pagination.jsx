import React from 'react'
import Pagination from '@mui/material/Pagination';
import { handlePageNumber } from '../../Redux/CourseSlice';
import { useDispatch } from 'react-redux';

const PaginationWrapper = ({ count ,handlePageNumber }) => {

    const dispatch = useDispatch();

    const handleChangePage = (event, newPage) => {
        const { value } = event.target;
        console.log("page :", newPage);
        dispatch(handlePageNumber(value));

    };


    return (
        <div className='w-full flex items-center justify-center'>
            <Pagination count={count} variant='outline' onChange={handleChangePage}/>
        </div>
    )
}

export default PaginationWrapper
