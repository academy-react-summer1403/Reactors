import { Title } from "./Title";
import { Numbers } from "./Numbers";

const Category = (props) => {

    const { numbers , img , title , id} = props;

    return(
        <div className=" h-[320px] w-[15%] py-10 rounded  m-auto flex flex-col gap-10 flex-nowrap  justify-center border-b-2 border-gray-300 ">
            <img src={img} className=" w-[100px] mx-auto  " alt="" />
            
            <Title title={title}  />

            <Numbers numbers={numbers} />

        </div>
    )
}

export{Category}