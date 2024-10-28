import React from "react";
import {Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import sug from "../../../assets/Image/sug.png";

const Suggestion = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("نام و نام خانوادگی الزامی است"),
      email: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
      message: Yup.string().required("متن الزامی است"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex flex-row-reverse items-center justify-center min-h-screen bg-white">
      <div className="w-full md:w-1/2 px-11">
        <img src={sug} className="w-full py-7" />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col p-6 rounded-lg w-full max-w-md"
      >
        <div className="mb-4 ">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="نام و نام خانوادگی"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="border-2 border-[#158B68] p-2  rounded w-full focus:outline-none focus:border-blue-500"
          />
          {formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border-2 border-[#158B68] p-2 rounded w-full focus:outline-none focus:border-blue-500"
          />
          {formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="متن ..."
            onChange={formik.handleChange}
            value={formik.values.message}
            className="border-2 border-[#158B68] resize-none h-[160px] p-2 rounded w-full focus:outline-none focus:border-blue-500"
          ></textarea>
          {formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-[#5BE1B9] text-[#21394B] py-2 rounded focus:outline-none"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default Suggestion;
