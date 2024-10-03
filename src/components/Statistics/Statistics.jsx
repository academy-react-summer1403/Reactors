import { Title } from "./title";
import { Numbers } from "./numbers";

const Statistics = (props) => {

    const { numbers , img , title , id} = props;

    return(
        <div className=" h-[300px] py-10 rounded  m-auto flex flex-col flex-nowrap gap-4 justify-center ">
            <img src={img} className="  " alt="" />
            
            <Title title={title}  />

            <Numbers numbers={numbers} />

        </div>
    )
}

export{Statistics}