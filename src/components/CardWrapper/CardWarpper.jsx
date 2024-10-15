import React from "react";
import { Card } from "../Card/Card";

const CardWrapper = ({ blogList }) => {
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogList.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </>
  );
};

export { CardWrapper };
