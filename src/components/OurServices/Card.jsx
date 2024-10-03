import { Titr } from "./Titr"
import { Desc } from "./desc"

const Card = (props) => {

    const { desc , img , titr , id} = props;

    return(
        <div className=" w-[31%] h-[150px]  m-auto flex flex-col flex-wrap gap-x-[20px]   ">
            <img src={img} className="h-[130px] w-[120px]  " alt="" />
            
            <Titr titr={titr}  />

            <Desc desc={desc} />

        </div>
    )
}

export{Card}