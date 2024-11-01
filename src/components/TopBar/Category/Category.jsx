import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handlecategoryName } from "../../../Redux/NewsSlice";
import { useDispatch } from "react-redux";
import { getNewsCategory } from "../../../core/services/api/getNewsCategory";
const Category = () => {
  const [NewsCategory, setNewsCategory] = useState([]);

  const { categoryName } = useSelector((state) => {
    return state.news;
  });

  const { sort } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  const getCategory = async () => {
    const NewsCategory = await getNewsCategory();
    setNewsCategory(NewsCategory);

    // console.log(NewsCategory , "NewsCategory");
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleCategory = (e) => {
    const { value } = e.target;
    dispatch(handlecategoryName(value));
  };

  return (
    <form>
      <div>
        <select
          className=" gap-9 rounded-full border border-[#158B68] w-[208px] text-[16px] bg-[#FFFFFF] px-14 py-4"
          value={categoryName}
          onChange={handleCategory}
        >
          <option className="border-[#158B68]" value={sort}>
            دسته بندی
          </option>
          {NewsCategory?.map((item) => {
            return <option value={item.id}>{item.categoryName}</option>;
          })}
        </select>
      </div>
    </form>
  );
};

export default Category;
