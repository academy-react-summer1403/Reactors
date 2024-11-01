import React, { useEffect, useState } from "react";

import { getMyCourses } from "../../../core/services/api/dashboard";
import { ComplexTableHeader } from "../../../components/common/Dashboard/Dashboard Tables/ComplexTableHeader";

import { DashboardPartsBody } from "../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody";
import { TableBody } from "../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody";
import { TableRow } from "../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow";
import { TableCell } from "../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell";
import { TablePagination } from "../../../components/common/Dashboard/Dashboard Tables/TablePagination";

import CourseImg from "../../../assets/images/courseImg2.png";
import { NoneItems } from "../../../components/common/Dashboard/Dashboard Tables/NoneItems";
import dateModifier from "../../../core/utils/dateModifier";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

const MyCourses = () => {
  const { courseId } = useParams();

  // const [myCourses, setMyCourses] = useState([])

  // const getAllMyCourses = async () => {
  //     const result = await getMyCourses()
  //     setMyCourses(result.listOfMyCourses)
  //     console.log(result)
  // }

  const { data: myCourses } = useQuery({
    queryKey: ["myCourses"],
    queryFn: getMyCourses,
  });

  console.log(myCourses);

  // useEffect(() => {
  //     getAllMyCourses()
  // }, [])

  return (
    <DashboardPartsBody className="flex flex-col">
      <ComplexTableHeader
        tableHeaders={[
          "نام دوره",
          "نام استاد",
          "نام ترم",
          "نام گروه",
          "تاریخ شروع",
          "وضعیت پرداخت",
        ]}
      />
      <TableBody>
        {myCourses?.listOfMyCourses.length === 0 ? (
          <NoneItems title={"دوره ای وجود ندارد"} />
        ) : (
          myCourses?.listOfMyCourses.map((item, key) => (
            <TableRow key={key} className="cursor-pointer">
              {/* <Link to={"/course-details/" + courseId}>جزئیات دوره</Link> */}

              <TableCell className="flex gap-1 items-center">
                <img src={item.tumbImageAddress} alt="" className="w-12" />
                <Link to={"/course-details/" + item.courseId}>
                  <p className="hover:text-[#807A7A]">{item.courseTitle}</p>
                </Link>
              </TableCell>
              <TableCell> {item.fullName} </TableCell>
              <TableCell> {item.termName} </TableCell>
              <TableCell> {item.groupName} </TableCell>
              <TableCell> {dateModifier(item.lastUpdate)} </TableCell>
              <TableCell> {item.paymentStatus} </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
      {/* { <TablePagination />} */}
    </DashboardPartsBody>
  );
};

export { MyCourses };
