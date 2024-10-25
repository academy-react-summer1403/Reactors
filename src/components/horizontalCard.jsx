import React from "react";
import like from "../assets/like.png";
import disLike from "../assets/disLike.png";
import Star from "../assets/Star.png";
import CourseRate from "../assets/Image/CourseRate.png";
import { handleCardView } from "../Redux/CourseSlice";
import dateModifier from "../core/utils/dateModifier";
import notfoundImage from "../assets/Image/notfoundImage.webp";
import dateModifire from "../core/utils/dateModifier";
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

const HorizontalCard = ({ data }) => {
  const {
    teacherName,
    statusName,
    cost,
    likeCount,
    userIsLiked,
    courseRate,
    title,
    describe,
    tumbImageAddress,
    lastUpdate,
    courseId,
    dissLikeCount,
    readMore,
    reserv,
    currentUserDissLike,
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
    <div>
      <div
        dir="ltr"
        className="flex flex-row-reverse items-center rounded-[10px] bg-white border "
      >
        <div className="w-[280px]  flex items-center justify-center">
          <img
            src={tumbImageAddress ? tumbImageAddress : notfoundImage}
            className="w-full h-full rounded-tr-[10px] rounded-br-[10px] object-cover"
          />
        </div>

        {/* Course Content */}
        <div className="flex flex-col items-end w-full px-4 gap-2">
          <div className="text-[15px]">{title}</div>
          <div className="flex justify-between flex-row items-center px-4 py-[1px] text-sm min-w-full gap-2">
            <div className="flex justify-between flex-row gap-2">
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

            <div className="flex mr-[-21px] justify-between items-center px-4 pb-2 text-[12px] text-[#158B68] rounded-[12px] bg-[#BFF4E4] ">
              <p className=" pt-[2px]">{statusName}</p>
            </div>
          </div>
          <div className="text-[12px] text-[#8C9F9A]"> {teacherName} </div>

          <div className="text-[11px] text-[#158B68]">
            {dateModifire(lastUpdate)}
          </div>

          <div className="flex  flex-col pb-[19px] items-center justify-between">
            <div dir="rtl" className=" text-[11px] ">
              {describe}
            </div>
          </div>
          <p className=" text-center text-red-500  text-base pb-4 border-t min-w-[90%] border-[#158B68] ">
            <span className="text-[#12926C] pl-[10px] ">هزینه تمام دوره:</span>
            {cost}تومان
          </p>
          <div className="flex justify-between gap-2 pb-[7px]">
            <button
              className="bg-[#5BE1B9] text-black py-2 w-[112px] rounded-lg"
              onClick={postReserve}
              >
              رزرو دوره
            </button>

            <button className="bg-white border border-[#5BE1B9] text-black py-2 w-[112px] rounded-lg">
              <Link to={"/course-details/" + courseId}>جزئیات دوره</Link>

              {readMore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
