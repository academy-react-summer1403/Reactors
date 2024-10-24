import React from "react";
import { Formik, Form, Field } from "formik";
import { getNewsComment } from "../../../../core/services/api/getNewsComment";

const Comment = () => {

  return (
    <div>
      <Formik
        initialValues={{ title: "", text: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
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
                className="p-2 border-2 border-[#158B68] rounded-md text-[#807A7A]"
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