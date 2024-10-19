import React from "react";
import setting from "../../../assets/Image/setting.png";
import triangle from "../../../assets/Image/triangle.png";
import UI from "../../../assets/Image/UI.png";
import js from "../../../assets/Image/triangle.png";
import UiUx from "../../../assets/Image/UiUx.png";

const SecondeSection = () => {
  const categories = [
    {
      title: "دوره های طراحی UX/UI",
      Image: setting,
      sessions: 25,
    },
    {
      title: "دوره های طراحی UX/UI",
      Image: triangle,
      sessions: 25,
    },
    {
      title: "دوره های طراحی UX/UI",
      Image: UI,
      sessions: 25,
    },
    {
      title: "دوره های طراحی UX/UI",
      Image: js,
      sessions: 25,
    },
    {
      title: "دوره های طراحی UX/UI",
      Image:UiUx,
      sessions: 25,
    },
  ];

  
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold text-gray-700 pb-4">دسته بندی</h2>
      <p className="text-gray-500 pb-6">
        ما فرصت آماده شدن برای زندگی را فراهم می‌کنیم
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#FBF6F6] p-4 rounded-lg shadow-md w-[220px] h-72"
          >
            <img
              src={category.Image}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-lg  text-gray-600 pt-4">
              {category.title}
            </h3>
            <p className="text-gray-400 pt-2">{category.sessions} جلسه</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondeSection;
