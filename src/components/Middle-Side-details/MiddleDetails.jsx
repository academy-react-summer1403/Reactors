import React from "react";
import like from "../../assets/Image/like.png";
import disLike from "../../assets/Image/dislike.png";
import Star from "../../assets/Image/star.png";
import bg from "../../assets/Image/Cd-bg.png";
import download from "../../assets/Image/download.png";
import { Formik, Form, Field } from 'formik';

const MiddleDetails = () => {
  return (
    
    <div className="min-h-screen bg-[#FBF6F6] rounded-[40px] flex justify-center p-6">
      {/* گرید اصلی */}
      <div className="flex flex-col w-full min-w-[300px]  gap-6">
        {/* دایو عکس در بالای همه */}
        <div className=" flex-col rounded-[30px] flex items-center justify-center p-6 ">
          <img
            src={bg}
            alt="image"
            className="w-full h-[340px] object-cover rounded-[30px]"
          />
        </div>

        {/* دایو سفید با اطلاعات */}
        <div className="flex flex-col rounded-[30px] gap-6">
          {/* دایو تاپ: عنوان دوره و لایک/دیس‌لایک/فیوریت */}
          <div>
            <div className="bg-white p-6 rounded-[30px] gap-5 shadow-md flex flex-col justify-between">
              <div className="flex flex-row">
                <h1 className="font-bold text-lg w-full">عنوان دوره</h1>

                <div className="flex flex-row-reverse gap-4 w-full">
                  <button className="text-gray-500 hover:text-green-500">
                    <img src={like} />
                  </button>
                  <button className="text-gray-500 hover:text-red-500">
                    <img src={disLike} />
                  </button>
                  <button className="text-gray-500 hover:text-yellow-500">
                    <img src={Star} />
                  </button>
                </div>
              </div>
              <div className="text-gray-700 ">
                لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
                توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود. تکه های
                لاتین متن نشان می دهد که یک پروژه در حال توسعه است. لورم ایپسوم
                فقط برای توسعه دهندگان وب نیست. طراحان گرافیک نیز از آن با نرم
                افزارهای مختلفی مانند فوتوشاپ استفاده می کنند. لورم ایپسوم محبوب
                ترین و استانداردترین متن ساختگی است که توسط توسعه دهندگان وب،
              </div>
            </div>
          </div>

          {/* دایو ویدیوهای دوره */}
          <div className="bg-white p-6 flex-col rounded-[30px] shadow-md">
            <h2 className="font-bold text-lg mb-4">ویدیوهای دوره</h2>
            <div className=" flex-col rounded-[30px] flex items-center justify-center p-6 ">
              <img
                src="https://ad-exchange.fr/wp-content/uploads/2019/04/Video_mobile_800x533.jpg"
                alt="image"
                className="w-full h-[340px] object-cover rounded-[30px]"
              />
            </div>
            <ul className="flex flex-col gap-4">
              <div className="flex flex-row border-b pb-3 gap-20">
                <li>ویدیو 1: معرفی دوره</li>
                <img className="pl-6" src={download} />
              </div>
              <li className="border-b pb-3">ویدیو 2: نصب و پیکربندی ابزارها</li>
              <li className="border-b pb-3">ویدیو 3: شروع برنامه‌نویسی</li>
              <li className="border-b pb-3">ویدیو 4: نکات پیشرفته</li>
            </ul>
          </div>

          {/* دایو اضافی */}
          <div className="bg-white p-6 flex-col rounded-[30px] shadow-md">
          <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            <div className="flex border-2 border-[#A4F6DE] rounded-[15px] ">
              <button
                type="button"
                className="w-1/2 py-2 text-center rounded-[15px] bg-[#A4F6DE]"
              >
                ثبت نظر
              </button>
              <button
                type="button"
                className="w-1/2 py-2 text-center "
              >
                نظرات کاربران
              </button>
            </div>

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
        </div>
      </div>
    </div>
  );
};

export default MiddleDetails;
