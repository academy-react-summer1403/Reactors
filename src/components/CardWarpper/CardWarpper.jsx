import React from "react";
import { Card } from "../Card";
import HorizontalCard from "../horizontalCard";
import { useSelector } from "react-redux";

const CardWrapper = ({ course }) => {
  const { CardView } = useSelector((state) => state.Courses);

  return (
    <>
      <div
        className={`${
          CardView ? "grid lg:grid-cols-3 gap-7 px-2 py-5" : "sm:grid-cols-2"
        } grid items-center gap-5 `}
      >
        {course?.map((item) => {
          if (CardView) {
            return <Card key={item.courseId} data={item} />;
          } else {
            return <HorizontalCard data={item} />;
          }
        })}
      </div>
    </>
  );
};

export { CardWrapper };
