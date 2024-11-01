import React from "react";
import { Formik, Form, Field } from "formik";
import { postSendComment } from "../../../../core/services/api/sendComment";
import { useParams } from "react-router-dom";

const Comment = () => {
  const { courseId } = useParams();


  const handleSubmit = async (value) => {
    await postSendComment(courseId)
  }

  return (
    <div>
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={handleSubmit} >
      
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Field
                name="title"
                placeholder="عنوان"
                className="p-2 border-2 border-[#158B68] rounded-md "
              />
              <Field
                name="text"
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
  );
};

export default Comment;
