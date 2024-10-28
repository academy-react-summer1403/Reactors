import React from "react";
import {
  BiUserCircle,
  BiDislike,
  BiLike,
  BiSolidDislike,
  BiSolidLike,
  BiSolidStar,
  BiStar,
} from "react-icons/bi";
import { LiaReplySolid } from "react-icons/lia";
import dateModifier from "../../../../core/utils/dateModifier";
import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";

const UserComment = ({ courseComment }) => {
  const {
    courseId,
    author,
    likeCount,
    currentUserLikeId,
    disslikeCount,
    acceptReplysCount,
    pictureAddress,
    title,
    describe,
    insertDate,
  } = courseComment;
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    // mutationFn: postCourseLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseComments"] });
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
    // mutationFn: postCourseDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseComments"] });
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

  const replyMutation = useMutation({
    // mutationFn: postfaouriteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseComments"] });
      toast.success("ریپلای شما ثبت شد");
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postFavouriteUser = () => {
    const result = replyMutation.mutate(courseId);
  };

  return (
    <div>
      <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-[#158B68]">
              <img
                className="w-14 rounded-full"
                src={pictureAddress ? pictureAddress : <BiUserCircle />}
              />
            </div>
            <h2 className="text-[15px] text-nowrap">
              {author ? author : "عنوان"} : {title}
            </h2>
          </div>
          <div className="flex flex-row gap-4">
            <div
              className="text-[#158B68] flex items-center flex-col cursor-pointer "
              onClick={postLikeUser}
            >
              {currentUserLikeId ? (
                <BiLike className="text-2xl" />
              ) : (
                <BiSolidLike className="text-2xl" />
              )}
              {likeCount}
            </div>

            <div
              className="text-[#158B68] flex items-center flex-col cursor-pointer "
              onClick={postDiseLikeUser}
            >
              {currentUserLikeId ? (
                <BiDislike className="text-2xl" />
              ) : (
                <BiSolidDislike className="text-2xl" />
              )}
              {disslikeCount}
            </div>
            <div className="text-[#158B68] flex items-center flex-col cursor-pointer ">
              <LiaReplySolid className="text-2xl" />
              <p>{acceptReplysCount}</p>
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-5 min-h-[110px]">{describe}</div>
        <div className="flex flex-row-reverse justify-between items-center text-xs text-gray-500">
          <span>{dateModifier(insertDate)}</span>
        </div>
      </div>
      <div className="p-4 pt-1 flex flex-row-reverse gap-6">
        <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
        <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
      </div>
    </div>
  );
};

export default UserComment;
