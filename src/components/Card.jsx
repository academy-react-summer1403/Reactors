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
import {
  BiDislike,
  BiLike,
  BiSolidDislike,
  BiSolidLike,
  BiSolidStar,
  BiSolidTrafficBarrier,
  BiStar,
} from "react-icons/bi";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Card = ({ data }) => {
  const {
    teacherName,
    statusName,
    cost,
    likeCount,
    userIsLiked,
    currentUserDissLike,
    courseRate,
    title,
    describe,
    tumbImageAddress,
    lastUpdate,
    courseId,
    dissLikeCount,
    userFavorite,
  } = data;

  const queryClient = useQueryClient();

  const reserveMutation = useMutation({
    mutationFn: postCourseReserve,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseList"] });
      toast.success("این دوره رزرو شد!", {});
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postReserve = () => {
    const userReserve = reserveMutation.mutate(courseId);
  };

  const likeMutation = useMutation({
    mutationFn: postCourseLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseList"] });
      toast("این دوره رو پسندیدی!", {
        icon: "👍",
      });
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postLikeUser = () => {
    const userLike = likeMutation.mutate(courseId);
  };

  const disLikeMutation = useMutation({
    mutationFn: postCourseDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseList"] });
      toast("این دوره رو نپسندیدی!", {
        icon: "👎",
      });
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postDiseLikeUser = async () => {
    const userDisLike = disLikeMutation.mutate(courseId);
  };

  const favMutation = useMutation({
    mutationFn: postfaouriteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseList"] });
      toast.success("به دوره های مورد علاقه اضافه شد");
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postFavouriteUser = () => {
    const result = favMutation.mutate(courseId);
  };

  return (
    <div className="flex flex-col items-center bg-[#FBF6F6]  shadow md:shadow-lg  shadow-slate-600/80 rounded-[30px]  min-h-[392px] w-full">
      <img
        className="flex justify-center pb-4 rounded-tl-[1rem] rounded-tr-[1rem] object-cover object-center h-[250px] min-w-full min-h-[200px] "
        src={tumbImageAddress ? tumbImageAddress : notfoundImage}
      />

      <div className="flex justify-between flex-row-reverse items-center px-4 py-[1px] text-sm min-w-full gap-2">
        <div className="flex justify-between flex-row-reverse gap-2">
          <div
            className="text-[#089E71] flex items-center flex-col cursor-pointer "
            onClick={postLikeUser}
          >
            {userIsLiked ? (
              <BiSolidLike className="text-2xl" />
            ) : (
              <BiLike className="text-2xl" />
            )}

            <p>{likeCount}</p>
          </div>

          <div
            className="text-[#089E71] flex flex-col items-center cursor-pointer"
            onClick={postDiseLikeUser}
          >
            {currentUserDissLike ? (
              <BiSolidDislike className="text-2xl" />
            ) : (
              <BiDislike className="text-2xl" />
            )}

            <p>{dissLikeCount}</p>
          </div>

          <div
            className="text-[#089E71] cursor-pointer"
            onClick={postFavouriteUser}
          >
            {userFavorite ? (
              <BiSolidStar className="text-2xl" />
            ) : (
              <BiStar className="text-2xl" />
            )}
          </div>
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
        <div className="flex flex-row">
          <span>{courseRate}</span>
          <BiSolidStar className="text-xl text-yellow-300" />
        </div>
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
        <button
          onClick={postReserve}
          className="bg-[#5BE1B9] text-black py-2 w-[80%] rounded-lg"
        >
          رزرو دوره
        </button>

        <button className="bg-white border border-[#5BE1B9] text-black py-2 w-[80%] rounded-lg">
          <Link to={"/course-details/" + courseId}>جزئیات دوره</Link>
        </button>
      </div>
    </div>
  );
};

export { Card };
