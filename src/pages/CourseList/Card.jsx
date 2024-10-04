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
      className=" justify-center mb-[100px] bg-[#FBF6F6] rounded-2xl shadow-lg shadow-slate-600/80 w-full  min-h-[287px] px-[26px] pb-10"
    >

      <img
        className="aspect-video rounded-t-2xl object-cover object-center "
        src={tumbImageAddress}
      />

      <div className="pl-[2px] w-full flex flex-row flex-nowrap  justify-start gap-6" >

        <p className="rounded-[12px]  px-3 py-2 bg-[#BFF4E4] text-xs font-medium text-[#158B68] ml-[164px] mt-[20px]">
          {statusName}
        </p>
        
    
        <p className=" flex flex-col flex-nowrap text-xs font-medium text-[#089E71]  pb-2 mt-[20px] ml-[-259px] ">
          <img className="w-[20px] h-[18px]" src={like}/>
          {likeCount}
        </p>


        <p className=" text-xs font-medium text-[#089E71] mt-[20px] pb-2 ">
          <img className="w-[20px] h-[18px]" src={disLike} />          
         {dissLikeCount}
        </p>

        <p className=" text-xs font-medium text-[#089E71] mt-[20px] pb-2 ">
          <img className="w-[20px] h-[18px]" src={Star} />          
          {courseRate}
        </p>

      </div>


      <div className="text-right mt-[9px]">
        {title}
      </div>


      <p className=" text-xs font-medium text-[#676464]  pb-2 text-right ">
        {teacherName}
      </p>



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






      {/* <img className=" me-4 rounded-full ml-28" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""></img>

      <div className="flex items-center ">

        <svg className="-mt-14 w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>

        <p className="-mt-14 ms-2 text-sm font-bold text-gray-900 dark:text-black">4.95</p>
        
      </div> */}



      <h1 className=" text-xs font-medium text-slate-600 pb-2 ">
        {/* {title} */}
      </h1>

      
      <p className="  text-sm tracking-tight font-light text-slate-400 leading-6 text-right">
        {describe}
      </p>

      <p className=" text-[20px] font-medium border border-b-0 text-[#E11818] pb-2 text-right ">
        <span className="text-[#12926C] ml-[30px]">
          هزینه تمام دوره:
        </span>
        {cost}
      </p>
      
      <div className="flex justify-between" >
        <button className="py-2.5  px-5 ml-[3px]  text-sm font-medium text-gray-900 bg-[#5BE1B9] rounded-lg border  hover:bg-emerald-400 "
          onClick={() => navigate("/ProductDetail/" + courseId)}>
          {reserv} رزرو دوره
        </button>

        <button className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 "
          onClick={() => navigate("/ProductDetail/" + courseId)}>
          {readMore}جزئیات دوره
        </button>


      </div>
    </div>
  );
}

export { Card }
