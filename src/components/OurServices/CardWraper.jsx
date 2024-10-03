import { Card } from "./Card"
import { useState } from "react"
import aks1 from "../../images/service1.png"
import aks2 from "../../images/sevice2.png"
import aks3 from "../../images/sevice3.png"
import aks4 from "../../images/sevice4.png"
import aks5 from "../../images/sevice5.png"
import aks6 from "../../images/service6.png"


const CardWraper = () => {

    const [ card , setCard] = useState([
        {
            id:1,
            img:aks1,
            titr:"اساتید مجرب" ,
            desc:"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "
        },
        {
            id:2,
            img:aks2,
            titr:"مشاوره رایگان" ,
           desc:"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "
        },
        {
            id:3,
            img:aks3,
            titr:"فرصت های شغلی" ,
           desc:"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "
        },
        {
            id:4,
            img:aks4,
            titr:"ارائه مدرک معتبر" ,
           desc:"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "
        },
        {
            id:5,
            img:aks5,
            titr:"دوره های جامع و متنوع" ,
           desc:"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "
        },
        {
            id:6,
            img:aks6,
            titr:"آموزش پروژه محور" ,
           desc:"لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود "
        }

        


    ])
    return(
        <div className=" w-full h-[500px]   flex flex-col flex-nowrap  mt-14  ">
            <div className="w-full h-[150px]   ">

            <h1 className="text-center text-[34px]  "> خدمات ما </h1>

            <h2 className="text-center text-[20px] mt-5 "> ما فرصت آماده شدن برای زندگی را فراهم میکنیم </h2>

            </div>

            <div className=" w-[100%] h-[350px]  m-auto px-14 flex flex-row flex-wrap gap-8   ">

            {card.map((value , index) => {
                return(
                    
                    <Card
                        key={index}
                        titr={value.titr}
                        desc={value.desc}
                        img={value.img}
                    />

                )
            })}
             
            </div>
        </div>

    )
}

export{CardWraper}