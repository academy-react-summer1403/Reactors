import React, { useEffect, useState } from "react";
import NewsContainer from "../../components/News Details/NewsContainer/NewsContainer";
import Slider from "../../components/News Details/Slider/Slider";
import { Header } from "../../components/common/Header/Header";
import { Footer } from "../../components/common/Footer/Footer";
import { useParams } from "react-router-dom";
import { getNewsId } from "../../core/services/api/getNewsID";
import { useQuery } from "react-query";
import { getNewsComment } from "../../core/services/api/getNewsComment";
import SyncLoader from "react-spinners/SyncLoader";
import { formDataModifier } from "../../core/utils/formdataConverter";

const NewsDetails = () => {
  const { id } = useParams();

  const { data: newsesDetails, isLoading } = useQuery({
    queryKey: ["newsDetails"],
    queryFn: () => {
      const result = getNewsId(id);
      return result;
    },
  })
  ;
  return (
    <>
      <div className="flex flex-col px-16 py-[70px] ">
        {isLoading ? (
          <div className="flex items-center justify-center w-full">
            <SyncLoader size={24} color="#a4f6de" />{" "}
          </div>
        ) : (
          <>
            <NewsContainer

            newsesDetails={newsesDetails?.detailsNewsDto}
              commentDetail={newsesDetails?.detailsNewsDto}
            />
          </>
        )}
      </div>
      <div className="flex flex-col py-[37px]">
        <div className="pb-[80px]">
          <div className="text-[30px] w-full flex flex-col items-center">
            اخبار مقالات مشابه
          </div>
          <div className="text-[15px] w-full flex flex-col items-center">
            ساختن دنیایی بهتر، یک دوره در یک زمان
          </div>
        </div>
        <Slider></Slider>
      </div>
    </>
  );
};

export default NewsDetails;
