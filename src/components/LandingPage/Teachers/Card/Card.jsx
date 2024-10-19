import React from "react";
import Twitter from "../../../../assets/Image/Twitter.png";
import insta from "../../../../assets/Image/insta.png";
import tel from "../../../../assets/Image/tel.png";

const Card = ({ data }) => {
  const { fullName, linkdinProfileLink, pictureAddress } = data;
  return (
    <div className="flex flex-col items-center rounded-lg p-6 w-72 text-center">
        <div className="pb-4">
        <img
          src={pictureAddress ? pictureAddress : "https://cdni.iconscout.com/illustration/premium/thumb/employee-is-unable-to-find-sensitive-data-illustration-download-in-svg-png-gif-file-formats--no-found-misplaced-files-business-pack-illustrations-8062128.png?f=webp"}
          className="w-42 h-52  rounded-xl "
        />
        </div>


      <h3 className="text-xl  pb-4">
        {fullName ? fullName : "نام استاد پیدا نشد"}
      </h3>
      <p className="text-[#086CB5] pb-4">
        {linkdinProfileLink ? linkdinProfileLink : "لینک موجود نمی باشد"}
      </p>
      <p className="text-gray-600 text-sm pb-4">
        لورم ایپسوم محبوب ترین و استانداردترین متن ساختگی است که توسط توسعه
        دهندگان وب، تایپوگراف ها و طراحان استفاده می شود
      </p>
      <div className="flex flex-row-reverse  justify-center gap-4">
        <img src={Twitter} />
        <img src={insta} />
        <img src={tel} />
      </div>
    </div>
  );
};

export default Card;
