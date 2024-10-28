import React, { useState } from "react";
import bgUp from "../../../assets/Image/bgUp.png";
import NewsUserComment from "./User Comment/UserComment";
import Comment from "./Form/Comment";
import {
  BiCalendar,
  BiDislike,
  BiLike,
  BiSolidDislike,
  BiSolidLike,
  BiSolidStar,
  BiSolidTrafficBarrier,
  BiStar,
  BiUser,
} from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import dateModifier from "../../../core/utils/dateModifier";
import { postNewsLike } from "../../../core/services/api/postNewsLike";
import { postNewsDisLike } from "../../../core/services/api/postNewsDislike";
import { postNewsFav } from "../../../core/services/api/postNewsFav";

const NewsContainer = ({ newsesDetails, commentDetail }) => {
  const {
    currentLikeCount,
    currentDissLikeCount,
    currentView,
    addUserFullName,
    insertDate,
    keyword,
    googleTitle,
    googleDescribe,
    currentRate,
    currentUserIsLike,
    currentUserIsDissLike,
    isCurrentUserFavorite,
    id,
  } = newsesDetails;

  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: postNewsLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsList"] });
      toast("این دوره رو پسندیدی!", {
        icon: "👍",
      });
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postLikeUser = () => {
    const userLike = likeMutation.mutate(id);
  };

  const disLikeMutation = useMutation({
    mutationFn: postNewsDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsList"] });
      toast("این دوره رو نپسندیدی!", {
        icon: "👎",
      });
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postDiseLikeUser = async () => {
    const userDisLike = disLikeMutation.mutate(id);
  };

  const favMutation = useMutation({
    mutationFn: postNewsFav,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsList"] });
      toast.success("به دوره های مورد علاقه اضافه شد");
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postFavouriteUser = () => {
    const result = favMutation.mutate(id);
  };

  const [cardType, setCardType] = useState("userReview");

  const handleReviewForm = () => {
    setCardType("reviewForm");
  };

  const handleUserReview = () => {
    setCardType("userReview");
  };

  return (
    <div className="min-h-screen bg-[#FBF6F6] rounded-[40px] flex justify-center p-6 ">
      <div className="flex flex-col w-full min-w-[100px]  gap-6">
        <div className=" flex-col rounded-[30px] flex items-center justify-center p-6">
          <img
            src={bgUp}
            alt="image"
            className="min-w-[300px] object-cover rounded-[30px]"
          />
        </div>
        <div className="bg-white p-6  flex-col rounded-[30px] shadow-md px-9">
          <h1 className="text-[30px] w-full flex flex-col items-center">
            {googleTitle}
          </h1>
          <div className="text-gray-700 pt-8">{googleDescribe}</div>
          <div className="flex flex-row-reverse justify-between items-center gap-6">
            <div className="flex flex-row-reverse gap-4">
              <div
                className="text-[#089E71] flex items-center flex-col cursor-pointer "
                onClick={postLikeUser}
              >
                {currentUserIsLike ? (
                  <BiSolidLike className="text-2xl" />
                ) : (
                  <BiLike className="text-2xl" />
                )}

                <p>{currentLikeCount}</p>
              </div>

              <div
                className="text-[#089E71] flex flex-col items-center cursor-pointer"
                onClick={postDiseLikeUser}
              >
                {currentUserIsDissLike ? (
                  <BiSolidDislike className="text-2xl" />
                ) : (
                  <BiDislike className="text-2xl" />
                )}

                <p>{currentDissLikeCount}</p>
              </div>

              <div
                className="text-[#089E71] cursor-pointer"
                onClick={postFavouriteUser}
              >
                {isCurrentUserFavorite ? (
                  <BiSolidStar className="text-2xl" />
                ) : (
                  <BiStar className="text-2xl" />
                )}
              </div>
            </div>

            <div className="flex flex-row gap-7 py-8 min-w-36">
              <div className="flex flex-row-reverse gap-2">
                <span className="text-[13px] text-[#126F94] ">
                  نام نویسنده :{addUserFullName}
                </span>
                <BiUser className="text-2xl text-[#158B68]" />
              </div>

              <div className="flex flex-row-reverse gap-2">
                <span className="text-[13px] text-[#807A7A]">
                  {currentView}
                </span>
                <MdOutlineVisibility className="text-2xl text-[#158B68]" />{" "}
              </div>

              <div className="flex flex-row-reverse gap-2">
                <span className="text-[13px] text-[#807A7A]">
                  {dateModifier(insertDate)}
                </span>
                <BiCalendar className="text-2xl text-[#158B68]" />
              </div>

              <div className="flex flex-row-reverse gap-2">
                <span className="text-[13px] text-[#807A7A] ">
                  {keyword}
                </span>
                <IoKeyOutline className="text-2xl text-[#158B68]" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row rounded-[15px] px-28 py-3">
          <button
            type="button"
            onClick={handleReviewForm}
            className={
              cardType === "reviewForm"
                ? "w-1/2 py-2 text-center rounded-[5px] bg-[#A4F6DE]"
                : "w-1/2 py-2 border-2 border-[#A4F6DE] rounded-[5px] text-center"
            }
          >
            ثبت نظر
          </button>
          <button
            type="button"
            onClick={handleUserReview}
            className={
              cardType === "userReview"
                ? "w-1/2 py-2 text-center rounded-[5px] bg-[#A4F6DE]"
                : "w-1/2 py-2 border-2 border-[#A4F6DE] rounded-[5px] text-center"
            }
          >
            نظرات کاربران
          </button>
        </div>

        <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md">
          {/* <NewsUserComment /> */}
          {cardType === "userReview" ? (
            <NewsUserComment commentDetail={commentDetail} />
          ) : (
            <Comment />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
