import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { postSendComment } from "../../../../core/services/api/sendComment";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

const Comment = () => {

  const { courseId } = useParams();
  const client = useQueryClient()


  const initialValues = {
    Title: "",
    Describe: "",
  };

  const mutation = useMutation({
    mutationFn: postSendComment,
    onSuccess: () => {
        toast.success("نظر شما ثبت شد")
        client.invalidateQueries({queryKey: ["courseDetails"]})
    },
    onError: () => {
      toast.error("ثبت نظرت با خطا مواجه شد");
    },
})

  const handleSubmit = async (values) => {
    const CommentData = new FormData();
    CommentData.append("CourseId", courseId);

    CommentData.append("Title", values.Title);
    CommentData.append("Describe", values.Describe);

    mutation.mutate(CommentData)
  };
  



  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Field
                name="Title"
                placeholder="عنوان"
                className="p-2 border-2 border-[#158B68] rounded-md "
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
              ثبت نظر
            </button>
          </Form>
      </Formik>
    </div>
  );
};

export default Comment;
