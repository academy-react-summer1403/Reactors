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
import {
  postCourseDisLikeComments,
  postCourseLikeComments,
} from "../../../../core/services/api/getCourseID";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { postSendReplyComment } from "../../../../core/services/api/CourseReply";
import { getNewsReply } from "../../../../core/services/api/getCourseReply";

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
    id,
    currentUserEmotion,
  } = courseComment;

  console.log(courseId , "Course")

  const [showReplyForm, setShowReplyForm] = useState(false);

  const client = useQueryClient();

  const initialValues = {
    Title: "",
    Describe: "",
  };

  // const { data: showUserReply } = useQuery({
  //   queryKey: ["showUserReply"],
  //   queryFn: getNewsReply(),
  // });

  const mutation = useMutation({
    mutationFn: postSendReplyComment,
    onSuccess: () => {
      toast.success("ریپلای شما ثبت شد");
      client.invalidateQueries({ queryKey: ["courseDetails"] });
    },
    onError: () => {
      toast.error("ثبت ریپلای شما با خطا مواجه شد");
    },
  });

  const handleSubmit = async (values) => {
    const CommentData = new FormData();
    CommentData.append("CourseId", courseId);
    

    CommentData.append("Title", values.Title);
    CommentData.append("Describe", values.Describe);

    mutation.mutate(CommentData);
  };

  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: postCourseLikeComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseComments"] });
      toast("این نظر رو پسندیدی!", {
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
    mutationFn: postCourseDisLikeComments,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseComments"] });
      toast("این نظر رو نپسندیدی!", {
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
      queryClient.invalidateQueries({ queryKey: ["courseComments"] });
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
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="text-4xl text-[#158B68]">
              <img
                className="min-w-14 md:w-10 rounded-full "
                src={pictureAddress ? pictureAddress : <BiUserCircle />}
              />
            </div>
            <h2 className="text-[15px] text-nowrap">
              {author ? author : "عنوان"} : {title}
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:flex-row ">
            <div
              className="text-[#158B68] flex items-center flex-col cursor-pointer "
              onClick={postLikeUser}
            >
              {currentUserEmotion == "LIKED" ? (
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
              {currentUserEmotion == "DISSLIKED" ? (
                <BiSolidDislike className="text-2xl" />
              ) : (
                <BiDislike className="text-2xl" />
              )}
              {disslikeCount}
            </div>
            <div
              className="text-[#158B68] flex items-center flex-col cursor-pointer "
              onClick={() => setShowReplyForm(!showReplyForm)}
            >
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
        <button className="text-[14px] text-[#158B68] cursor-pointer">
        {/* {showUserReply?.length === 0 ? (
          <p>دوره ای وجود ندارد</p>
        ) : (
          showUserReply?.map(() => (
            <UserComment/>
          ))

        )} */}

          پاسخ ها
        </button>
        <button
          className="text-[14px] text-[#158B68] cursor-pointer"
          onClick={() => setShowReplyForm(!showReplyForm)}
        >
          پاسخ دادن
        </button>
        {showReplyForm && (
          <div className="reply-form flex items-center justify-start w-full  ">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className="flex flex-col gap-4">
                <div className="">
                  <Field
                    name="Title"
                    placeholder="عنوان"
                    className="p-2 border-2 w-full border-[#158B68] rounded-md"
                  />
                  <Field
                    name="Describe"
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
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserComment;
