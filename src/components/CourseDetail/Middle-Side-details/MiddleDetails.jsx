import React, { useState } from "react";

import Cdbg from "../../../assets/Image/Cdbg.png";
// import download from "../../../assets/Image/download.png";
import Comment from "./Form/Comment";
import UserComment from "./User Comment/UserComment";
import { postCourseLike } from "../../../core/services/api/postCourseLike";
import { postCourseDisLike } from "../../../core/services/api/postCourseDisLike";
import { postfaouriteUser } from "../../../core/services/api/postFavouriteUser";
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
import toast from "react-hot-toast";
import { getCourseComments } from "../../../core/services/api/getCourseID";
import SyncLoader from "react-spinners/SyncLoader";
import { CardWrapperComment } from "../Card Details Wrapper/CardWrapper";

const MiddleDetails = ({ courseDetail }) => {
  const { data: coursesComments, isLoading } = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => {
      const result = getCourseComments(courseId);
      return result;
    },
  });

  const queryClient = useQueryClient();

  const [cardType, setCardType] = useState("userReview");

  const handleReviewForm = () => {
    setCardType("reviewForm");
  };

  const handleUserReview = () => {
    setCardType("userReview");
  };

  const {
    title,
    imageAddress,
    likeCount,
    dissLikeCount,
    isUserFavorite,
    describe,
    courseId,
    currentUserLike,
    currentUserDissLike,
  } = courseDetail;

  const likeMutation = useMutation({
    mutationFn: postCourseLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseDetails"] });
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
      queryClient.invalidateQueries({ queryKey: ["courseDetails"] });
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
      queryClient.invalidateQueries({ queryKey: ["courseDetails"] });
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
    <div className="w-full md:w-[95%]  bg-[#fbf6f6] rounded shadow-lg p-6 flex flex-col gap-6 order-2 md:order-none">
      <div className="flex flex-col   gap-4">
        {/* دایو عکس در بالای همه */}
        <div className=" flex-col rounded-[30px] flex items-center justify-center p-6 ">
          <img
            className="w-full h-[340px] object-cover rounded-[30px]"
            src={imageAddress ? imageAddress : Cdbg}
          />
        </div>

        {/* دایو سفید با اطلاعات */}
        <div className="flex flex-col rounded-[30px] gap-6">
          {/* دایو تاپ: عنوان دوره و لایک/دیس‌لایک/فیوریت */}
          <div>
            <div className="bg-white p-6 rounded-[30px] gap-5 shadow-md flex flex-col justify-between">
              <div className="flex flex-row">
                <h1 className="font-bold text-lg w-full">{title}</h1>

                <div className="flex flex-row-reverse gap-4 w-full">
                  <div
                    className="text-[#089E71] flex items-center flex-col cursor-pointer "
                    onClick={postLikeUser}
                  >
                    {currentUserLike=="1" ? (
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
                    {currentUserDissLike=="1" ? (
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
                    {isUserFavorite ? (
                      <BiSolidStar className="text-2xl" />
                    ) : (
                      <BiStar className="text-2xl" />
                    )}
                  </div>
                </div>
              </div>
              <div className="text-gray-700 ">{describe}</div>
            </div>
          </div>

          {/* دایو ویدیوهای دوره */}
          <div className="bg-white p-6 flex-col rounded-[30px] shadow-md">
            <h2 className="font-bold text-lg mb-4">ویدیوهای دوره</h2>
            <div className=" flex-col rounded-[30px] flex items-center justify-center p-6 ">
              <img
                src="https://ad-exchange.fr/wp-content/uploads/2019/04/Video_mobile_800x533.jpg"
                className="w-full h-[440px] object-cover rounded-[30px]"
              />
            </div>
            <ul className="flex flex-col text-nowrap w-full  gap-4">
              <div className="flex flex-row border-b pb-3 gap-20">
                <li>ویدیو 1: معرفی دوره</li>
              </div>
              <li className="border-b pb-3 ">ویدیو 2: نصب و پیکربندی ابزارها</li>
              <li className="border-b pb-3">ویدیو 3: شروع برنامه‌نویسی</li>
              <li className="border-b pb-3">ویدیو 4: نکات پیشرفته</li>
            </ul>
          </div>

          {/* دایو اضافی */}
          <div className="bg-white p-6 flex-col rounded-[30px] shadow-md">
            <div className="flex pb-10  ">
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
            {isLoading ? (
              <div className="flex items-center justify-center w-full">
                <SyncLoader size={24} color="#a4f6de" />{" "}
              </div>
            ) : (
              <>
                {cardType === "userReview" ? (
                  <CardWrapperComment courseComment={coursesComments} />
                ) : (
                  <Comment />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleDetails;
