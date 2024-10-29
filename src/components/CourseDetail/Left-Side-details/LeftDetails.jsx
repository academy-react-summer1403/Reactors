import React from "react";
import dateModifier from "../../../core/utils/dateModifier";
import { postCourseReserve } from "../../../core/services/api/postCourseReserve";
import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";


const LeftDetails = ({ courseDetail }) => {
  const {
    teacherName,
    courseStatusName,
    cost,
    startTime,
    endTime,
    capacity,
    techs,
    courseLevelName,
    commentCount,
    currentRate,
    insertDate,
    courseId,
  } = courseDetail;

  const queryClient = useQueryClient();

  const reserveMutation = useMutation({
    mutationFn: postCourseReserve,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseDetails"] });
      toast.success(" دوره رزرو شد!", {
      });
    },
    onError: () => {
      toast.error("خطا");
    },
  });
  const postReserve = () => {
    const userReserve = reserveMutation.mutate(courseId);
  };



  const date1 = new Date(startTime);
  const date2 = new Date(endTime);

  const difference = Math.abs(date2 - date1);
  const dateDifference = Math.floor(difference / (1000 * 60 * 60));

  return (
    <div className="w-full md:w-[300px] bg-[#fbf6f6] rounded-[30px] shadow-lg p-4 flex flex-col order-1 md:order-none">
      <div className="flex flex-col w-full min-w-64 gap-6">
        {/* دایو 1: اطلاعات دوره */}
        <div className="flex flex-col bg-white p-4 gap-2 rounded-[26px]  text-[#12926C]">
          <h3 className="flex flex-row">
            مدرس دوره : <p className="text-black px-1">{teacherName}</p>
          </h3>
          <p className="flex flex-row">
            هزینه تمام دوره: <p className="text-red-500  px-1">{cost}تومان</p>
          </p>
          <p className="flex flex-row">
            تکنولوژی دوره :<p className="text-black px-1">{techs}</p>
          </p>
          <p className="flex flex-row">
            سطح دوره :<p className="text-black px-1">{courseLevelName}</p>
          </p>
          <p className="flex flex-row">
            ظرفیت دوره :<p className="text-black px-1">{capacity} نفر</p>
          </p>
          <p className="flex flex-row">
            وضعیت دوره :<p className="text-black px-1">{courseStatusName}</p>
          </p>
        </div>

        {/* دایو 2: اطلاعات آماری دوره */}
        <div className="bg-white p-4 space-y-2 rounded-[26px]  text-[#12926C]">
          <h3 className="flex flex-row">
            مدت زمان :<p className="text-black px-1">{dateDifference} ساعت</p>
          </h3>

          <p className="flex flex-row">
            تعداد ویدیوها :<p className="text-black px-1">27 ویدیو</p>
          </p>

          <p className="flex flex-row">
            تعداد نظرات :<p className="text-black px-1">{commentCount} نظر </p>
          </p>

          <p className="flex flex-row">
            امتیاز دوره :<p className="text-black px-1">{currentRate}</p>
          </p>
        </div>
        {/* دایو 3: اطلاعات تاریخی */}
        <div className="bg-white p-4 space-y-2 rounded-[26px] text-[#12926C]">
          <h3 className="flex flex-row">
            تاریخ بروزرسانی :
            <p className="text-black px-1"> {dateModifier(insertDate)}</p>
          </h3>
          <p className="flex flex-row">
            شروع دوره :
            <p className="text-black px-1"> {dateModifier(startTime)}</p>
          </p>
          <p className="flex flex-row">
            پایان دوره :
            <p className="text-black px-1"> {dateModifier(endTime)}</p>
          </p>
        </div>
        {/* دکمه رزرو دوره */}
        <div className="md:col-span-2">
          <button
            onClick={postReserve}
            className="w-full bg-[#5BE1B9] text-black py-3 rounded-lg shadow-lg text-center"
          >
            رزرو دوره
          </button>
        </div>
        {/* دایو 4: درباره استاد */}
        <div className="bg-white p-4 rounded-[26px]  flex items-center gap-4">
          <div className="space-y-4">
            <h3 className="pr-24">درباره استاد</h3>
            <div className="flex flex-row gap-3 pr-6">
              <div className="pb-2">
                <img
                  src="https://via.placeholder.com/50"
                  className="w-9 h-9 rounded-full object-cover"
                />
              </div>

              <h3 className="text-[16px] text-[#8C9F9A] pt-1">{teacherName}</h3>
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
