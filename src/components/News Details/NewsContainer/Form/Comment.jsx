import React from "react";
import { Formik, Form, Field } from "formik";
import {
  getNewsComment,
  postAddNewsComment,
} from "../../../../core/services/api/getNewsComment";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

const Comment = () => {
  const { id } = useParams();
  const { userId } = useParams();


  const initialValues = {
    title: "",
    describe: "",
  };

  console.log(id,"newsy")

  const handleSubmit = async (values) => {
    const CommentNews = {
      newsId: id,
      title: values.title,
      describe: values.describe,
      userId: userId,
    };
    const result = await postAddNewsComment(CommentNews);
    if (result.success) {
      toast.success("نظر شما موفقیت ثبت شد");
    } else if (!result.success) {
      toast.error("ثبت نظر شما با خطا مواجه شد");
    }
    console.log(result);
  };

  return (
    <div>
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
  );
};

export default Comment;
