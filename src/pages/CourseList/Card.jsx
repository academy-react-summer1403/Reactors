import React from 'react'
// import { useNavigate } from 'react-router-dom';
import like from '../../assets/like.png'
import disLike from '../../assets/disLike.png'
import Star from '../../assets/Star.png'


const Card = ({ data }) => {
  const { teacherName, classRoomName, statusName, levelName, cost, currentRegistrants, likeCount, commandCount, userIsLiked, userLikedId, userFavorite, userFavoriteId, courseRate, title, describe, tumbImageAddress, lastUpdate, courseId, technologyList, dissLikeCount, currentUserDissLike, currentUserSetRate, currentUserRateNumber, readMore, reserv } = data
  //   const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate("/detail/" + courseId)}
      className=" justify-center mb-[100px] bg-[#FBF6F6] rounded-2xl shadow-lg shadow-slate-600/80 w-full h-[567px]  min-h-[287px]"
    >

      <img
        className="aspect-vide rounded-tl-[1rem] rounded-tr-[1rem] object-cover object-center w-full h-[200px] "
        src={tumbImageAddress}
      />

      <p className="rounded-[12px] float-right bg-[#BFF4E4] text-xs font-medium text-[#158B68] h-[35px] pl-[13px] pr-[6px] mt-[10px] pt-[10px] w-[100px]">
        {statusName}
      </p>

      <div className="pl-[15px] w-full flex flex-row flex-nowrap mt[-30px]  justify-start gap-[0.5rem]">

        <p className=" flex flex-col flex-nowrap mt-[-30px]  text-xs font-medium text-[#089E71]">
          <img className="w-[20px] h-[18px]" src={like} />
          {likeCount}
        </p>


        <p className=" text-xs font-medium mt-[-30px]  text-[#089E71]">
          <img className="w-[20px] h-[18px]" src={disLike} />
          {dissLikeCount}
        </p>

        <p className=" text-xs font-medium mt-[-30px]  text-[#089E71]">
          <img className="w-[20px] h-[18px]" src={Star} />
          {courseRate}
        </p>



      </div>


      <div className="text-right mt-[9px] p-[10px]">
        {title}
      </div>


      <div className="flex justify-end text-xs font-medium text-[#676464] mt-[10px] mb-[-24px] pr-[10px]   ">
        <h3>
          {teacherName}
        </h3>
        <span>
          : مدرس
        </span>
      </div>



      {/* <h1 className=" text-xs font-medium text-slate-600 pb-2 ">
        {commandCount}
      </h1> */}

      {/* <h1 className=" text-xs font-medium text-slate-600 pb-2 ">
        {classRoomName}
      </h1> */}


      {/*       
      <h1 className=" text-xs font-medium text-slate-600 pb-2 ">
        {levelName}
      </h1> */}

      {/* <h1 className=" text-xs font-medium text-slate-600 pb-2 ">
        {currentRegistrants}
      </h1> */}





      {/* <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {userIsLiked}
      </div>

      <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {userLikedId}
      </div>

      <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {userIsLiked}
      </div>

      <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {userFavorite}
      </div>

      <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {userFavoriteId}
      </div> */}


      {/* <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {lastUpdate}
      </div> */}

      {/* <h1 className=" text-xs font-medium text-slate-600 pb-2 ">
        {technologyList}
      </h1> */}



      {/* <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {currentUserDissLike}
      </div>

      <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {currentUserSetRate}
      </div>
      
      <div className=" text-xs font-medium text-slate-600 pb-2 ">
        {currentUserRateNumber}
      </div> */}













      <p className="h-[115px] mt-10 text-sm tracking-tight font-light text-slate-400 leading-6 text-right pr-[10px]">
        {describe}
      </p>

      <p className=" h-[45px] text-[20px] font-medium  border-t-[1px] text-[#E11818] text-right pr-[10px] ">
        <span className="text-[#12926C] ">
          هزینه تمام دوره:
        </span>
        {cost}
      </p>

      <div className="flex justify-between pt-[10px] px-[28px]" >
        <button className=" py-[10px]  px-5   text-sm font-medium text-gray-900 bg-[#5BE1B9] rounded-lg border  hover:bg-emerald-400 "
          onClick={() => navigate("/ProductDetail/" + courseId)}>
          {reserv} رزرو دوره
        </button>

        <button className="py-[10px]   px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 "
          onClick={() => navigate("/ProductDetail/" + courseId)}>
          {readMore}جزئیات دوره
        </button>


      </div>
    </div>
  );
}

export { Card }
