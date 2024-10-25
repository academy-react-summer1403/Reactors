import React from "react";
import like from "../../assets/Image/like.png";
import disLike from "../../assets/Image/dislike.png";
import Star from "../../assets/Image/star.png";
import rate from "../../assets/Image/rate.png";
import { Link } from "react-router-dom";
// import dateModifire from "../core/utils/dateModifier";
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
import { postNewsLike } from "../../core/services/api/postNewsLike";
import toast from "react-hot-toast";
import { postNewsDisLike } from "../../core/services/api/postNewsDislike";
import { postNewsFav } from "../../core/services/api/postNewsFav";

const Card = ({ data }) => {
  const {
    title,
    miniDescribe,
    currentRate,
    currentImageAddressTumb,
    addUserProfileImage,
    addUserFullName,
    newsCatregoryName,
    currentLikeCount,
    isCurrentUserFavorite,
    currentDissLikeCount,
    id,
    currentUserIsLike,
    currentUserIsDissLike,
  } = data;
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

  return (
    <div className="flex flex-col items-center bg-[#FBF6F6]  shadow md:shadow-lg  shadow-slate-600/80 rounded-[30px]  min-h-[392px] w-full">
      <img
        className="flex justify-center pb-4 rounded-tl-[1rem] rounded-tr-[1rem] object-cover object-center h-[250px] min-w-full min-h-[200px] "
        src={currentImageAddressTumb}
      />

      <div className="flex justify-between flex-row-reverse items-center px-4 py-[1px] text-sm min-w-full gap-2">
        <div className="flex justify-between flex-row-reverse gap-2">
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

        <div className="flex justify-between items-center px-4 pb-2 text-[12px] text-[#158B68] rounded-[12px] bg-[#BFF4E4] ">
          <p className=" pt-[2px]">{newsCatregoryName}</p>
        </div>
      </div>

      <h2 className="flex justify-between items-center text-[20px] w-full px-4 pb-4">
        {title}
      </h2>

      <div className="flex justify-between flex-row-reverse items-center text-sm w-full px-4">
        <div className="">
          <div className="flex flex-row">
            <span>{currentRate}</span>
            <BiSolidStar className="text-xl text-[#bff4e4]" />
          </div>
        </div>
        <div className="flex flex-row">
          <img
            className="rounded-full w-[33px] h-[34px] "
            src={addUserProfileImage}
          />
          <div className="pt-[5px] pr-[10px]">{addUserFullName}</div>
        </div>
      </div>

      <p className="flex justify-between items-center text-[12px] text-[#6D6767] w-full min-h-[80px] px-4 pb-4">
        {miniDescribe}
      </p>

      <div className=" text-[#807A7A] flex pr-[119px] border-t border-[#158B68] py-2 w-[90%]">
        <Link to={"/news-details/" + id}>جزئیات دوره</Link>
      </div>
    </div>
  );
};

export { Card };
