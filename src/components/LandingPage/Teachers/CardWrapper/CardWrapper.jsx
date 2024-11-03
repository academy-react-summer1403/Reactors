import React from "react";
import Card from "../Card/Card";
import { NoneItems } from "../../../common/Dashboard/Dashboard Tables/NoneItems";

const CardWrapper = ({ teacherlist }) => {
  // console.log(teacherlist, "teacherlist");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {teacherlist && teacherlist.length > 0 ? (
        teacherlist?.map((item) => {
          return <Card data={item} />;
        })
      ) : (
        <p>در حال بارگذاری...</p>
      )}
    </div>
  );
};

export default CardWrapper;
