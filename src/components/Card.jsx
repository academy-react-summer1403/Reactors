import React, { useEffect, useState } from "react";
import like from "../assets/like.png";
import disLike from "../assets/disLike.png";
import Star from "../assets/Star.png";
import CourseRate from "../assets/Image/CourseRate.png";
import dateModifire from "../core/utils/dateModifier";
import notfoundImage from "../assets/Image/notfoundImage.webp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCourseReserve } from "../core/services/api/postCourseReserve";
import toast from "react-hot-toast";
import { postCourseLike } from "../core/services/api/postCourseLike";
import { postCourseDisLike } from "../core/services/api/postCourseDisLike";
import { postfaouriteUser } from "../core/services/api/postFavouriteUser";

const Card = ({ data }) => {
  const { teacherName,statusName,cost,likeCount,userIsLiked,courseRate,title,describe,tumbImageAddress, lastUpdate,courseId,dissLikeCount} = data;

  // const [reservButton, setReservButton] = useState([]);

  // const reserCoureseButton = async () => {
  //   const reservButton = await postCourseReserve()
  //   setReservButton(reservButton.courseFilterDtos);
  //   console.log(reservButton, "reserv");
  // }

  // useEffect(() => {
  //   reserCoureseButton();
  // }, []);

  const [reservButton, setReservButton] = useState([]);

  const postcourseReserve = async () => {
    const reservButton = await postCourseReserve(courseId)
    setReservButton(reservButton)
  } 

  const [userLike, setUserLike] = useState([]);

  const postLikeUser = async () => {
    const userLike = await postCourseLike(courseId)
    setUserLike(userLike)
  } 

  const [userDisLike, setUserDisLike] = useState([]);

  const postDiseLikeUser = async () => {
    const userDisLike = await postCourseDisLike(courseId)
    setUserDisLike(userDisLike)
  } 

  const [userFavourite, setuserFavourite] = useState([]);

  const postFavouriteUser = async () => {
    const userFavourite = await postfaouriteUser(courseId)
    setuserFavourite(userFavourite)
  } 

  return (
    <div className="flex flex-col items-center bg-[#FBF6F6]  shadow md:shadow-lg  shadow-slate-600/80 rounded-[30px]  min-h-[392px] w-full">
      <img
        className="flex justify-center pb-4 rounded-tl-[1rem] rounded-tr-[1rem] object-cover object-center h-[250px] min-w-full min-h-[200px] "
        src={tumbImageAddress ? tumbImageAddress : notfoundImage}
      />

      <div className="flex justify-between flex-row-reverse items-center px-4 py-[1px] text-sm min-w-full gap-2">
        <div className="flex justify-between flex-row-reverse gap-2">
          <p className="text-[#089E71] cursor-pointer" onClick={postLikeUser}>
            <img className="flex items-center" src={like} />
            {likeCount}
          </p>

          <p className="text-[#089E71]" onClick={postDiseLikeUser}>
            <img className="flex items-center" src={disLike} />
            {dissLikeCount}
          </p>

          <p className="text-[#089E71]" onClick={postFavouriteUser}>
            <img className="flex items-center" src={Star} />
            {userIsLiked}
          </p>
        </div>

        <div className="flex justify-between items-center px-4 pb-2 text-[12px] text-[#158B68] rounded-[12px] bg-[#BFF4E4] ">
          <p className=" pt-[2px]">{statusName}</p>
        </div>
      </div>

      <h2 className="flex justify-between items-center text-[20px] w-full px-4 pb-4">
        {title}
      </h2>

      <div className="flex justify-between flex-row items-center text-sm w-full px-4 pb-4">
        <div className="">
          <div className="text-[#8C9F9A] text-[12px] w-full ">
            {teacherName}
          </div>
        </div>
        <span className="pr-[137px] ">{courseRate}</span>
        <img src={CourseRate} />
      </div>

      <div className="flex justify-between items-center text-[12px] text-[#158B68] w-full px-4 pb-4">
        {dateModifire(lastUpdate)}
      </div>

      <p className="flex justify-between items-center h-[100px] text-[12px] text-[#6D6767] w-full  px-4 pb-4">
        {describe}
      </p>

      <p className=" text-center text-red-500  text-base pb-4 border-t w-full border-[#158B68] ">
        <span className="text-[#12926C] pl-[10px] ">هزینه تمام دوره:</span>
        {cost}تومان
      </p>

      <div className="flex justify-between w-[90%] gap-2 pb-[10px]">
        <button onClick={()=>postcourseReserve()} className="bg-[#5BE1B9] text-black py-2 w-[80%] rounded-lg">
          رزرو دوره
        </button>

        <button className="bg-white border border-[#5BE1B9] text-black py-2 w-[80%] rounded-lg">
          <Link to={"/CourseDetails/" + courseId}>جزئیات دوره</Link>
          
        </button>
      </div>
    </div>
  );
};

export { Card };
