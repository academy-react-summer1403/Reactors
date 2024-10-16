import React from "react";

const LeftDetails = () => {
  return (
    <div className="min-h-screen w-full bg-[#FBF6F6] rounded-[30px] flex justify-center p-6">
      <div className="flex flex-col w-full min-w-64 gap-6">
        {" "}
        {/* دایو 1: اطلاعات دوره */}
        <div className="flex flex-col bg-white p-6 gap-2 rounded-[26px] shadow-md text-[#12926C]">
          <h3>مدرس دوره : </h3>
          <p>هزینه تمام دوره : </p>
          <p>تکنولوژی دوره :</p>
          <p>سطح دوره :</p>
          <p>ظرفیت دوره :</p>
          <p>وضعیت دوره :</p>
        </div>
        {/* دایو 2: اطلاعات آماری دوره */}
        <div className="bg-white p-6 space-y-2 rounded-[26px] shadow-md text-[#12926C]">
          <h3>مدت زمان :</h3>
          <p>تعداد ویدیوها :</p>
          <p>تعداد نظرات :</p>
          <p>امتیاز دوره :</p>
        </div>
        {/* دایو 3: اطلاعات تاریخی */}
        <div className="bg-white p-6 space-y-2 rounded-[26px] shadow-md text-[#12926C]">
          <h3>تاریخ بروزرسانی :</h3>
          <p>شروع دوره :</p>
          <p>پایان دوره :</p>
        </div>
        {/* دکمه رزرو دوره */}
        <div className="md:col-span-2">
          <button className="w-full bg-[#5BE1B9] text-black py-3 rounded-lg shadow-lg text-center">
            رزرو دوره
          </button>
        </div>
        {/* دایو 4: درباره استاد */}
        <div className="bg-white p-6 rounded-[26px] shadow-md flex items-center gap-4">
          <div className="space-y-4">
            <h3 className="pr-16">درباره استاد</h3>
            <div className="flex flex-row gap-3 pr-6">
              <div className="pb-2">
                <img
                  src="https://via.placeholder.com/50"
                  className="w-9 h-9 rounded-full object-cover"
                />
              </div>

              <h3 className="text-[16px] text-[#8C9F9A] pt-1">جان اسمیت</h3>
            </div>
            <p className="text-[10px] text-[#6D6767]">
              لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط
              توسعه دهندگان وب، تایپوگراف ها و طراحان استفاده می شود .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDetails;
