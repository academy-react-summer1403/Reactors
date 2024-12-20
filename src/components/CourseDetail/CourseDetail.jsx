import React, { useEffect, useState } from "react";
import LeftDetails from "./Left-Side-details/LeftDetails";
import MiddleDetails from "./Middle-Side-details/MiddleDetails";
import { getCoursId } from "../../core/services/api/getCourseID";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import SyncLoader from "react-spinners/SyncLoader";
import { formDataModifier } from "../../core/utils/formdataConverter";

const CourseDetail = () => {
  const { courseId } = useParams();

  const { data: coursesDetails, isLoading } = useQuery({
    queryKey: ["courseDetails"],
    queryFn: () => {
      const result = getCoursId(courseId);
      return result;
    },
  });

  if (coursesDetails){
    const formData = formDataModifier(coursesDetails)
  }
  
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row-reverse py-10 px-14">
        {isLoading ? (
          <div className="flex items-center justify-center w-full">
            <SyncLoader size={24} color="#a4f6de" />{" "}
          </div>
        ) : (
          <>
            <div className="py-5">
              <LeftDetails courseDetail={coursesDetails} />
            </div>
            <div className="py-5 md:w-[900px]">
              <MiddleDetails courseDetail={coursesDetails} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
