import React from 'react'
import { DashboardPartsTitle } from '../Styled DashboardPages/StyledDashboardPartsTitle'
import { TableHeader } from './Styled Dashboard Tables/StyledTableHeader'

const ComplexTableHeader = ({ tableHeaders, gridTemp }) => {
    return (
        <DashboardPartsTitle className="py-6 px-9 text-nowrap" style={{ fontSize: "20px" }}>
            <TableHeader style={{ gridTemplateColumns: gridTemp }}>
                {tableHeaders.map((title, key) => <p key={key}> {title} </p>)}
            </TableHeader>
        </DashboardPartsTitle>
    )
}

export { ComplexTableHeader }
