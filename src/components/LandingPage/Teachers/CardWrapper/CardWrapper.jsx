import React from "react";
import Card from "../Card/Card";

const CardWrapper = ({ teacherlist }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {teacherlist.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
};

export default CardWrapper;
