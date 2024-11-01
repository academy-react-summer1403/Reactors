import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

import { getFavoriteCourses } from "../../../../core/services/api/dashboard";
import { DashboardPartsBody } from "../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody";
import { ComplexTableHeader } from "../../../common/Dashboard/Dashboard Tables/ComplexTableHeader";
import { TableBody } from "../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody";
import { TableRow } from "../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow";
import { TablePagination } from "../../../common/Dashboard/Dashboard Tables/TablePagination";
import { TableCell } from "../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell";

import CourseImg from "../../../../assets/images/courseImg2.png";
import { NoneItems } from "../../../common/Dashboard/Dashboard Tables/NoneItems";
import dateModifier from "../../../../core/utils/dateModifier";
import { Link } from "react-router-dom";

const MyFavoriteCourses = () => {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const getMyFavoriteCourses = async () => {
    const result = await getFavoriteCourses();
    console.log(result);
    setFavoriteCourses(result.favoriteCourseDto);
  };

  useEffect(() => {
    getMyFavoriteCourses();
  }, []);

  return (
    <DashboardPartsBody className="flex flex-col">
      <ComplexTableHeader
        tableHeaders={[
          "نام دوره",
          "نام استاد",
          "نوع دوره",
          "سطح دوره",
          "تاریخ شروع",
          "حذف",
        ]}
      />
      {/* <div className='grid grid-cols-6 '>
                <p className='truncate '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos iusto quo laborum, laboriosam enim cum placeat reprehenderit ut, nulla dignissimos beatae assumenda veniam ipsa. Voluptate minima cupiditate non inventore error.</p>
                <p>asdad</p>
                <p>asdad</p>
                <p>asdad</p>
                <p>asdad</p>
                <p>asdad</p>

            </div> */}
      <TableBody>
        {favoriteCourses?.length === 0 ? (
          <NoneItems title="دوره ای وجود ندارد" />
        ) : (
          favoriteCourses?.map((item, key) => (
            <TableRow key={key}>
              <TableCell className="flex gap-6 pl-7 items-center">
                <img src={item.tumbImageAddress} alt="" className="w-12" />
                <Link to={"/course-details/" + item.courseId}>
                  <p className="hover:text-[#807A7A]">{item.courseTitle}</p>
                </Link>
              </TableCell>
              <TableCell> {item.teacheName} </TableCell>
              <TableCell> {item.typeName} </TableCell>
              <TableCell> {item.levelName} </TableCell>
              <TableCell> {dateModifier(item.lastUpdate)} </TableCell>
              <TableCell>
                {" "}
                <HiOutlineTrash className="size-8" />{" "}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </DashboardPartsBody>
  );
};

export { MyFavoriteCourses };
