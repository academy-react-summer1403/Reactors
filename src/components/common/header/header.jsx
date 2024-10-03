import { React }from "react"
import { NavLink } from "react-router-dom";
import "../../../app/App.css"

const Header = () => {

    return (
        <div className="w-full h-12  flex flex-nowrap flex-row-revers " id="header">
            <div className="flex flex-row-reverse flex-nowrap  w-36 mr-10">
                <div className="m-auto">آکادمی اچ وان</div>
                <img src="https://cdn-icons-png.flaticon.com/512/6395/6395489.png" className="h-10 w-10 inlineBlock" alt="" />
            </div>

            <ul className="flex flex-row flex-nowrap w-[40%] h-[100%] gap-10 leading-10 m-auto justify-center ">

                <li>صفحه اصلی</li>

                <li> دوره ها</li>

                <li>مقالات</li>

                <li>درباره ما</li>
                
            </ul>

            <div className="w-[100px] h-[80%] bg-[#33cb9d] rounded-[5px] ml-10 my-auto text-center text-[#0a1b27] leading-8 ">
                ورود/ثبت نام
            </div>


        </div>
    )

}

export { Header };