import React, { useEffect, useState } from "react";
import NewsContainer from "../../components/News Details/NewsContainer/NewsContainer";
import Slider from "../../components/News Details/Slider/Slider";
import { Header } from "../../components/common/Header/Header";
import { Footer } from "../../components/common/Footer/Footer";
import { useParams } from "react-router-dom";
import { getNewsId } from "../../core/services/api/getNewsID";

const NewsDetails = () => {
  const [newsDetail, setNewsDetail] = useState([]);
  const [commentDetail, setCommentDetail] = useState([]);

  const { id } = useParams();
  const getNewsDetails = async () => {
    const newsDetail = await getNewsId(id);
    setNewsDetail(newsDetail.detailsNewsDto);
    setCommentDetail(newsDetail.commentDtos);
  };

  console.log(newsDetail, "newsDetail : ");

  useEffect(() => {
    getNewsDetails();
  }, []);
  return (
    <>
      <div className="flex flex-col px-16 py-[70px] ">
        <NewsContainer newsDetail={newsDetail} commentDetail={commentDetail}  />
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
