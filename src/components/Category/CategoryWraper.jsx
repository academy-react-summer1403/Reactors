
import { useState } from "react"
import { Category } from "./Category"
import aks1 from "../../images/1.png"
import aks2 from "../../images/2.png"
import aks3 from "../../images/3.png"
import aks4 from "../../images/4.png"
import aks5 from "../../images/5.png"



const CategoryWraper = () => {

    const [ card , setCard] = useState([
        {
            id:1,
            img:aks1,
            title:"دوره های طراحی UI/UX" ,
            numbers:"25 جلسه"
        },
        {
            id:2,
            img:aks2,
            title:"دوره های طراحی UI/UX",
            numbers:"25 جلسه"
        },
        {
            id:3,
            img:aks3,
            title:"دوره های طراحی UI/UX" ,
            numbers:"25 جلسه"
        },
        {
            id:4,
            img:aks4,
            title:"دوره های طراحی UI/UX",
            numbers:"25 جلسه"
        },
        {
            id:5,
            img:aks5,
            title:"دوره های طراحی UI/UX" ,
            numbers:"25 جلسه"
        },
    ])


    return(
        <div className=" w-full h-[500px]   flex flex-col flex-nowrap  mt-36  ">
            <div className="w-full h-[150px]   ">

            <h1 className="text-center text-[34px]  "> دسته بندی</h1>

            <h2 className="text-center text-[20px] mt-5 "> ما فرصت آماده شدن برای زندگی را فراهم میکنیم </h2>

            </div>

            <div className=" w-[90%] h-[350px]  m-auto px-14 flex flex-row flex-wrap gap-8   ">
            
            {card.map((value , index) => {
                return(
                    
                    <Category
                        key={index}
                        title={value.title}
                        numbers={value.numbers}
                        img={value.img}
                    />

                )
            })}
             
            </div>
        </div>

    )
}

export{CategoryWraper}