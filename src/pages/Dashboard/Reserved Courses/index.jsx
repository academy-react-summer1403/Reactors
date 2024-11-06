import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

import { DashboardPartsBody } from "../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody";
import { ComplexTableHeader } from "../../../components/common/Dashboard/Dashboard Tables/ComplexTableHeader";
import { TableBody } from "../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody";
import { TableRow } from "../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow";
import { TableCell } from "../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell";

import CourseImg from "../../../assets/images/courseImg2.png";
import { getReservedCourses } from "../../../core/services/api/dashboard";
import { NoneItems } from "../../../components/common/Dashboard/Dashboard Tables/NoneItems";
import { getCoursId } from "../../../core/services/api/getCourseID";
import dateModifier from "../../../core/utils/dateModifier";
import { useMutation, useQuery } from "react-query";
import { deleteCourseReserve } from "../../../core/services/api/dashboard";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const ReservedCourses = () => {
  const { data: courseReserved } = useQuery({
    queryKey: ["courseReserved"],
    queryFn: getReservedCourses,
  });
  console.log(courseReserved, "courseReserved : ");

  const deleteReservedCourse = (courseId) => {
    const deletedCourse = { id: courseId }; //courseId?
    mutation.mutate(deletedCourse);
  };

  const mutation = useMutation({
    mutationFn: deleteCourseReserve,
    onSuccess: () => {
      toast.success("دوره حذف شد");
    },
    onError: () => {
      toast.error("خطا");
    },
  });

  return (
    <DashboardPartsBody className="flex flex-col ">
      <ComplexTableHeader
        tableHeaders={["نام دوره", "تاریخ رزرو", "وضعیت تایید", "حذف"]}
        gridTemp="1fr 1fr 1fr 1fr"
      />
      <TableBody>
        {courseReserved?.length === 0 ? (
          <NoneItems title="دوره ای وجود ندارد" />
        ) : (
          courseReserved?.map((item, key) => (
            <TableRow
              key={key}
              style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
            >
              <TableCell
                className="flex gap-5 items-center "
                style={{ minWidth: "200px" }}
              >
                <img src="" alt="" className="w-16" />
                <Link to={"/course-details/" + item.courseId}>
                  <p className="hover:text-[#807A7A]">{item.courseName}</p>
                </Link>
              </TableCell>
              <TableCell> {dateModifier(item.reserverDate)} </TableCell>
              <TableCell>
                {" "}
                {item.accept ? "تایید شده" : "تایید نشده"}{" "}
              </TableCell>
              <TableCell>
                {" "}
                <HiOutlineTrash
                  className="size-8"
                  onClick={() => deleteReservedCourse(item.courseId)}
                />{" "}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </DashboardPartsBody>
  );
};

export { ReservedCourses };
