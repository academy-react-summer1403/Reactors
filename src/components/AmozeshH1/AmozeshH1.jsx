import aks from "../../assets/3190341.png"
import "../../app/App.css"

const AmozeshH1 = () => {
    return(
        <div className="width-full h-[600px]  flex flex-nowrap  flex-row  " id="bgAmozesh"  >

            <div className="w-[50%] h-[100%]  flex flex-nowrap flex-col  gap-[15px] tex ">

                <div className=" w-[40%] h-[85px]  font text-[40px] text-center mt-[100px] mr-[80px] " > آموزشگاه اچ وان</div>
                <div  className="  w-[80%]    font text-[16px]  leading-[30px]  mr-[80px]  " >لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم اپسوم فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم افزارهای مختلفی مانند فوتوشاپ استفاده می کنند.</div>
                <button className="w-[150px] h-[60px] text-white bg-[#12926C] rounded-full mt-[100px]  mr-[80px]  "> شروع یادگیری </button>

            </div>

            <div className="  w-[50%] h-[100%]  " >
                <img src={aks} className=" w-[490px] h-[520px] mx-[100px] my-[50px] " alt="" />
            </div>



        </div>
    )
}

export {AmozeshH1}