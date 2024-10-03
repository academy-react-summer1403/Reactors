const CardWraper = () => {

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