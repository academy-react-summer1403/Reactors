import React, { useEffect, useState } from "react";
import LeftDetails from "./Left-Side-details/LeftDetails";
import MiddleDetails from "./Middle-Side-details/MiddleDetails";
import { getCoursId } from "../../core/services/api/getCourseID";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const CourseDetail = () => {
  const [courseDetail, setCourseDetails] = useState([]);
  const { courseId } = useParams();

  const getcourseDetails = async () => {
    const courseDetail = await getCoursId(courseId);
    setCourseDetails(courseDetail);
  };
  useEffect(() => {
    getcourseDetails();
  }, []);

  const { data: coursesDetails } = useQuery({
    queryKey: ["courseDetails"],
    queryFn: () => {
      const result = getCoursId(courseId);
      return result;
    },
  });

  return (
    <div>
      <div className="flex flex-row-reverse px-16 py-[70px] gap-5">
        <div>
          <LeftDetails courseDetail={courseDetail} />
        </div>
        <div>
          <MiddleDetails courseDetail={courseDetail} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
