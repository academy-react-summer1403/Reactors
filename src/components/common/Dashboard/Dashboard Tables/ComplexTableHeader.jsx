import React from 'react'
import { DashboardPartsTitle } from '../Styled DashboardPages/StyledDashboardPartsTitle'
import { TableHeader } from './Styled Dashboard Tables/StyledTableHeader'

const ComplexTableHeader = ({ tableHeaders }) => {
    return (
        <DashboardPartsTitle className="py-6 px-9" style={{ fontSize: "20px" }}>
            <TableHeader>
                {tableHeaders.map((title, key) => <p key={key}> {title} </p>)}
            </TableHeader>
        </DashboardPartsTitle>
    )
}

export { ComplexTableHeader }
