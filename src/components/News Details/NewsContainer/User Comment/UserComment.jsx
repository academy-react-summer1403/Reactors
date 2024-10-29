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
import user from "../../../../assets/Image/user.png";
import { postNewsDisLikeComments, postNewsLikeComments } from "../../../../core/services/api/getNewsID";

const NewsUserComment = ({ newsComment }) => {
  const {
    title,
    describe,
    replyCount,
    autor,
    pictureAddress,
    currentUserLikeId,
    likeCount,
    currentUserIsLike,
    dissLikeCount,
    currentUserIsDissLike,
    inserDate,
    newsId,
    id,
  } = newsComment;

  console.log(newsId)

  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: postNewsLikeComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsComments"] });
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
    mutationFn: postNewsDisLikeComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsComments"] });
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

  const replyMutation = useMutation({
    // mutationFn: postfaouriteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["newsComments"] });
      toast.success("ریپلای شما ثبت شد");
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postReplyUser = () => {
    const result = replyMutation.mutate(id);
  };

  return (
    <div>
      <div className="bg-white p-6 px-7 flex-col rounded-[30px] shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-4xl text-[#158B68]">
              <img
                className="w-14 rounded-full"
                src={pictureAddress ? pictureAddress : user}
              />
            </div>
            <h2 className="text-[15px] text-nowrap">
              {autor ? autor : "عنوان"} : {title}
            </h2>
          </div>
          <div className="flex flex-row gap-4">
            <div
              className="text-[#158B68] flex items-center flex-col cursor-pointer "
              onClick={postLikeUser}
            >
              {currentUserIsLike ? (
                <BiSolidLike className="text-2xl" />
              ) : (
                <BiLike className="text-2xl" />
              )}
              {likeCount}
            </div>
            <div
              className="text-[#158B68] flex items-center flex-col cursor-pointer "
              onClick={postDiseLikeUser}
            >
              {currentUserIsDissLike ? (
                <BiSolidDislike className="text-2xl" />
              ) : (
                <BiDislike className="text-2xl" />
              )}
              {dissLikeCount}
            </div>
            <div className="text-[#158B68] flex items-center flex-col cursor-pointer ">
              <LiaReplySolid className="text-2xl" />
              <p>{replyCount}</p>
            </div>
          </div>
        </div>
        <div className="text-gray-700 pt-5 min-h-[110px]">{describe}</div>
        <div className="flex flex-row-reverse justify-between items-center text-xs text-gray-500">
          <span>{dateModifier(inserDate)}</span>
        </div>
      </div>
      <div className="p-4 pt-1 flex flex-row-reverse gap-6">
        <p className="text-[14px] text-[#158B68]">پاسخ ها</p>
        <p className="text-[14px] text-[#158B68]">پاسخ دادن</p>
      </div>
      
    </div>
  );
};

export default NewsUserComment;
