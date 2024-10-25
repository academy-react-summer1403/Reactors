import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import home from "../../assets/Image/home.png";
import phone from "../../assets/Image/phone.png";
import Email from "../../assets/Image/Email.png";
const AboutUs = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
    email: Yup.string()
      .email("ایمیل معتبر وارد کنید")
      .required("ایمیل الزامی است"),
    phone: Yup.string().required("شماره تماس الزامی است"),
    message: Yup.string().required("لطفا پیام خود را وارد کنید"),
  });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <div className="container mx-auto p-6 flex flex-col md:flex-row-reverse bg-white">
        {/* Form Section */}
        <div className="md:w-1/2 bg-[#FBF6F6] p-6  rounded-md shadow-md">
          <Formik
            initialValues={{ name: "", email: "", phone: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <div className="pb-4">
                  <Field
                    name="name"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="w-full p-3 border border-[#158B68] rounded"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="pb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="ایمیل"
                    className="w-full p-3 border border-[#158B68] rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="pb-4">
                  <Field
                    name="phone"
                    type="text"
                    placeholder="شماره تماس"
                    className="w-full p-3 border border-[#158B68] rounded"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="pb-4">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="متن پیام"
                    className="w-full p-3 border border-[#158B68] rounded"
                    rows="4"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5BE1B9] text-white py-3 rounded-md shadow"
                >
                  ارسال
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl  pb-4">با ما در ارتباط باشید</h2>
          <p className="pb-6 text-gray-600">
            لورم ایپسوم بسیار زیبا است زیرا همه کاره است. تعداد پاراگراف‌هایی را
            که می‌خواهید انتخاب کنید.
          </p>

          {/* Address */}
          <div className="flex items-start pb-6">
            <div className="bg-[#FBF6F6] p-3 rounded-[15px]">
              <img src={home} />
            </div>
            <div className="pr-4">
              <p className=" text-lg">آدرس و ساعت کاری</p>
              <p className="text-sm text-gray-500">
                ساری ، بلوارخزر، ششصد دستگاه، آموزشگاه بحر ، دوشنبه - جمعه 8:00
                - 18:00
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start pb-6">

            <div className="bg-[#FBF6F6] p-3 rounded-[15px]">
              <img src={phone} />
            </div>

            <div className="pr-4">
              <p className=" text-lg">شماره تماس</p>
              <p className="text-sm text-gray-500">011-33883358</p>
            </div>

          </div>

          {/* Email */}
          <div className="flex items-start pb-6">
            <div className="bg-[#FBF6F6] p-3 rounded-[15px]">
              <img src={Email} />
            </div>
            <div className="pr-4">
              <p className=" text-lg">آدرس ایمیل</p>
              <p className="text-sm text-gray-500">bahr_academy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
