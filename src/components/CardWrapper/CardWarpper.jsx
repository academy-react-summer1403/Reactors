import React from "react";
import { Card } from "../Card/Card";

const CardWrapper = ({ blogList }) => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-7 px-2 py-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogList?.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </>
  );
};

export { CardWrapper };
