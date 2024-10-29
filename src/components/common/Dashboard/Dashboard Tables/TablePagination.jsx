import React from 'react'
import { Pagination, Stack } from '@mui/material'

const TablePagination = () => {
    return (
        <div className="w-full p-5 flex justify-center">
            <Stack spacing={2}>
                <Pagination count={4} dir='ltr' onChange={(value) => {console.log(value)}} />
            </Stack>
        </div>
    )
}

export { TablePagination }
