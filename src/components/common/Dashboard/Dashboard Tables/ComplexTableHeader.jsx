import React from 'react'
import { DashboardPartsTitle } from '../Styled DashboardPages/StyledDashboardPartsTitle'
import { TableHeader } from './Styled Dashboard Tables/StyledTableHeader'
import { TableFirstTitle } from './Styled Dashboard Tables/StyledTableFirstTitle'
import { TableLastTitle } from './Styled Dashboard Tables/StyledTableLastTitle'

const ComplexTableHeader = ({ first, second, third, forth, fifth, sixth,tableHeaders }) => {
    return (
        // <DashboardPartsTitle className="py-6 px-9 min-w-[700px]" style={{ fontSize: "20px" }}>
        //     <TableHeader>
        //         <TableFirstTitle> {first} </TableFirstTitle>
        //         <p> {second} </p>
        //         <p> {third} </p>
        //         <p> {forth} </p>
        //         <p> {fifth} </p>
        //         <TableLastTitle> {sixth} </TableLastTitle>
        //     </TableHeader>
        // </DashboardPartsTitle>
        <div className='grid grid-cols-6'>
            {tableHeaders.map(e=>{
                return <p>{e}</p>
            })}
        </div>
    )
}

export { ComplexTableHeader }
