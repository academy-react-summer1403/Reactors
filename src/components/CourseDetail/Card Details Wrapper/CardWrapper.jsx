import React from "react";
import UserComment from "../Middle-Side-details/User Comment/UserComment";

const CardWrapperComment = ({ courseComment }) => {
  return (
    <>
      <div>
        {courseComment?.map((item) => {
          return <UserComment key={item.id} courseComment={item} />;
        })}
      </div>
    </>
  );
};

export { CardWrapperComment };
