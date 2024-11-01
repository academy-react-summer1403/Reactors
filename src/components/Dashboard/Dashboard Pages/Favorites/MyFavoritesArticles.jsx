import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

import { DashboardPartsBody } from "../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody";
import { ComplexTableHeader } from "../../../common/Dashboard/Dashboard Tables/ComplexTableHeader";
import { TableBody } from "../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody";
import { TableRow } from "../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow";
import { TablePagination } from "../../../common/Dashboard/Dashboard Tables/TablePagination";
import { TableCell } from "../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell";

import CourseImg from "../../../../assets/images/courseImg2.png";
import { getFavoriteArticles } from "../../../../core/services/api/dashboard";
import { NoneItems } from "../../../common/Dashboard/Dashboard Tables/NoneItems";
import dateModifier from "../../../../core/utils/dateModifier";
import { Link } from "react-router-dom";

const MyFavoriteArticles = () => {
  const [favoriteArticles, setFavoriteArticles] = useState([]);

  const getMyFavoriteArticles = async () => {
    const result = await getFavoriteArticles();
    console.log(result);
    setFavoriteArticles(result.myFavoriteNews);
  };

  useEffect(() => {
    getMyFavoriteArticles();
  }, []);

  console.log(favoriteArticles, "favorite articles");

  return (
    <DashboardPartsBody className="flex flex-col">
      <ComplexTableHeader
        tableHeaders={[
          "عنوان مقاله",
          "تعداد لایک",
          "تعداد بازدید",
          "امتیاز",
          "آخرین بروزرسانی",
          "حذف",
        ]}
        // first="عنوان مقاله"
        // second="تعداد لایک"
        // third="تعداد بازدید"
        // forth="امتیاز"
        // fifth="آخرین بروزرسانی"
        // sixth="حذف"
      />
      <TableBody>
        {favoriteArticles?.length === 0 ? (
          <NoneItems title="دوره ای وجود ندارد" />
        ) : (
          favoriteArticles?.map((item, key) => (
            <TableRow key={key}>
              <TableCell
                className="flex gap-5 items-center"
                style={{ minWidth: "200px" }}
              >
                {" "}
                <img
                  src={item.currentImageAddressTumb}
                  alt=""
                  className="w-16"
                />
                <Link to={"/news-details/" + item.newsId}>
                  <p className="hover:text-[#807A7A]">{item.title}</p>
                </Link>
              </TableCell>
              <TableCell> {item.currentLikeCount} </TableCell>
              <TableCell> {item.currentView} </TableCell>
              <TableCell> {item.currentRate} </TableCell>
              <TableCell> {dateModifier(item.updateDate)} </TableCell>
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

export { MyFavoriteArticles };
