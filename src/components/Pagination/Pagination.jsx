import React from 'react'
import Pagination from '@mui/material/Pagination'; 
const PaginationWrapper = ({count}) => {
    const handleChangePage = (event, newPage) => {
        console.log(newPage);
      };
  return (
    <div className='w-full flex items-center justify-center'>
      <Pagination count={count} variant='outline'  onChange={handleChangePage} />
    </div>
  )
}

export default PaginationWrapper
