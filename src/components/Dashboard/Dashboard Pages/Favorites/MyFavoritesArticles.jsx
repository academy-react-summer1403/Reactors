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
import { Link, useParams } from "react-router-dom";

import { useMutation, useQuery } from "react-query";
import { deletenewseFav } from "../../../../core/services/api/deleteNewsFav";
import toast from "react-hot-toast";

const MyFavoriteArticles = () => {
  const { favoriteId } = useParams();

  const { data: favoriteArticles } = useQuery({
    queryKey: ["favoriteArticles"],
    queryFn: getFavoriteArticles,
  });

  console.log(favoriteArticles , "favoriteArticles");

  const handleDeleteFav = async (favoriteId) => {
    const RemoveFavNews = {
      deleteEntityId: favoriteId, //favoriteId?
    };
    const result = await deletenewseFav(RemoveFavNews);
    if (result.success) {
      toast.success("این مقاله از موردعلاقه ها حذف شد");
    } else if (!result.success) {
      toast.error("عملیات حذف موردعلاقه مقاله با خطا مواجه شد");
    }
  };

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
      />
      <TableBody>
        {favoriteArticles?.myFavoriteNews.length === 0 ? (
          <NoneItems title="دوره ای وجود ندارد" />
        ) : (
          favoriteArticles?.myFavoriteNews.map((item, key) => (
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
                <HiOutlineTrash
                  className="size-8"
                  onClick={() => handleDeleteFav(item.favoriteId)}
                />{" "}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </DashboardPartsBody>
  );
};

export { MyFavoriteArticles };
