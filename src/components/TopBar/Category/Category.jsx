import React from "react";
// import { useDispatch } from "react-redux";
// import { handlenewsCatregoryName } from "../../../Redox/NewsSlice";

// const SortDictionary = {
//   newest: { SortingCol: "insertDate", SortingType: "DESC" },
//   oldest: { SortingCol: "insertDate", SortingType: "ASC" },
//   cheap: { SortingCol: "Cost", SortingType: "ASC" },
//   expensive: { SortingCol: "Cost", SortingType: "DESC" },
//   hardest: { SortingCol: "LevelName", SortingType: "DESC" },
//   easiest: { SortingCol: "LevelName", SortingType: "ASC" },
// };
const Category = () => {
  // const dispatch = useDispatch();

  // const handleSortChange = (e) => {
  //   const { value } = e.target;
  //   dispatch(handleSortingCol(SortDictionary[value].SortingCol));
  //   dispatch(handleSortingType(SortDictionary[value].SortingType));
  // };

  return (
    <div>
      <form>
        <select
          className=" gap-9 rounded-full border border-[#158B68] text-[16px] bg-[#FFFFFF] px-14 py-4"
          value={null}
          // onChange={handleSortChange}
        >
          <option className="border-[#158B68]" value={null}>
            دسته بندی
          </option>
          <option value="test"> تستی</option>
          <option value="genius"> نابغه</option>
          <option value="researchNews">اخبار پژوهشگاه</option>
          <option value="scientific">علمی</option>
        </select>
      </form>
    </div>
  );
};

export default Category;
