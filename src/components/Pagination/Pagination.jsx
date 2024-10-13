import React from 'react'
import Pagination from '@mui/material/Pagination';
import { handlePageNumber } from '../../Redux/CourseSlice';
import { useDispatch } from 'react-redux';

const PaginationWrapper = ({ count ,handleChangePage }) => {



    return (
        <div dir='ltr' className='w-full flex  items-center justify-center'>
            <Pagination count={count} variant='outline' onChange={handleChangePage}/>
        </div>
    )
}

export default PaginationWrapper
