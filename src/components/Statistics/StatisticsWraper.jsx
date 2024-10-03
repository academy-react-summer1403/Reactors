import { Statistics } from "./Statistics"
import { useState } from "react"
import aks1 from "../../images/SVGRepo_iconCarrier.png"
import aks2 from "../../images/SVGRepo_iconCarrier (1).png"
import aks3 from "../../images/SVGRepo_iconCarrier (2).png"
import aks4 from "../../images/SVGRepo_iconCarrier (3).png"

const StatisticsWraper = () => {

    const [ card , setCard] = useState([
        {
            id:1,
            img:aks1,
            title:"استاید حرفه ای" ,
            numbers:"52"
        },
        {
            id:2,
            img:aks2,
            title:"دانشجو" ,
            numbers:"81"
        },
        {
            id:3,
            img:aks3,
            title:"دوره آموزشی" ,
            numbers:"182"
        },
        {
            id:4,
            img:aks4,
            title:"مقاله آموزشی" ,
            numbers:"182"
        }
    ])
    return(
            <div className=" mt-[70px] w-[90%] h-[400px] rounded-lg  m-auto px-14  flex flex-row flex-nowrap gap-8 bg-[#9bf1d7] ">

            {card.map((value , index) => {
                return(
                    
                    <Statistics
                        key={index}
                        title={value.title}
                        numbers={value.numbers}
                        img={value.img}
                    />

                )
            })}
             
            </div>


    )
}

export{StatisticsWraper}