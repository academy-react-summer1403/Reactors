import React, { useState } from "react";
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
import {
  postNewsDisLikeComments,
  postNewsLikeComments,
} from "../../../../core/services/api/getNewsID";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import {
  getNewsReplyComments,
  postAddReplyNewsComment,
} from "../../../../core/services/api/getNewsComment";
import ReaplyCommentWrapper from "../../News Details Wrapper/ShowReplys";
import NewsContainer from "../NewsContainer";

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
    parentId,
  } = newsComment;

  // console.log(parentId)

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);


  const { data: newsesReplyComments, isLoading } = useQuery({
    queryKey: ["newsReplyComments"],
    queryFn: () => {
      const result = getNewsReplyComments(parentId);
      return result;
    },
  });

  const initialValues = {
    title: "",
    describe: "",
  };

  const handleSubmit = async (values) => {
    const CommentReplyNews = {
      newsId: newsId,
      title: values.title,
      describe: values.describe,
      parentId: id,
    };
    const result = await postAddReplyNewsComment(CommentReplyNews);
    if (result.success) {
      toast.success("ریپلای شما موفقیت ثبت شد");
    } else if (!result.success) {
      toast.error("ثبت ریپلای شما با خطا مواجه شد");
    }
    console.log(result);
  };


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
    likeMutation.mutate(id, true);
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
        <button
          className="text-[14px] text-[#158B68] cursor-pointer"
          onClick={() => setShowReplies(!showReplies)}
        >
          پاسخ ها
        </button>
        {showReplies && (
          <div className="replies-list">
            {newsesReplyComments?.map((item) => {
              return (
                  <NewsContainer />
              );
            })}
          </div>
        )}

        <button
          className="text-[14px] text-[#158B68] cursor-pointer"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          پاسخ دادن
        </button>
        {showReplyForm && (
          <div className="reply-form flex items-center justify-start w-full  ">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {() => (
                <Form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Field
                      name="title"
                      placeholder="عنوان"
                      className="p-2 border-2 border-[#158B68] rounded-md "
                    />
                    <Field
                      name="describe"
                      as="textarea"
                      placeholder="متن"
                      rows="4"
                      className="p-2 border-2 border-[#158B68] w-full resize-none h-[160px] rounded-md text-[#807A7A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-5 bg-[#5BE1B9] text-black rounded-[15px]"
                  >
                    ثبت کردن
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsUserComment;
