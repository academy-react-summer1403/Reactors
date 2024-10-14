import React from 'react'

const HeaderOptions = ({ icon, span }) => {
    return (
        <div className="p-[10px] text-3xl relative">
            {span ? span : null}
            {icon ? icon : null}
        </div>
    )
}

export { HeaderOptions }
