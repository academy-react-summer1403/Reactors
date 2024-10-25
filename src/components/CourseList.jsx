import { getCoursList } from "../core/services/api/course";
import { CardWrapper } from "./CardWarpper/CardWarpper";
import "swiper/css";
import "swiper/css/navigation";
import "../app/App.css";
import { useDispatch, useSelector } from "react-redux";
import PaginationWrapper from "./Pagination/Pagination";
import { handlePageNumber } from "../Redux/CourseSlice";
import { useQuery } from "react-query";

const CoursLists = () => {
  const dispatch = useDispatch();

  const {
    typeName,
    techName,
    levelName,
    PageNumber,
    SearchInput,
    SortingCol,
    SortingType,
    CostUp,
    CostDown,
    CardView,
  } = useSelector((state) => {
    return state.Courses;
  });

  const { data: courseslist } = useQuery({
    queryKey: [
      "courseList",
      levelName,
      techName,
      PageNumber,
      SearchInput,
      SortingCol,
      SortingType,
      CostUp,
      CostDown,
    ],
    queryFn: () => {
      const result = getCoursList(
        typeName,
        levelName,
        techName,
        PageNumber,
        SearchInput,
        SortingCol,
        SortingType,
        CostUp,
        CostDown
      );
      return result;
    },
  });

  const handleChangePage = (event, newPage) => {
    console.log("page :", newPage);
    dispatch(handlePageNumber(newPage));
  };

  return (
    <>
      <div className="flex flex-col min-h-[400px] w-full  border border-[#EFEFEF] bg-white gap-3 p-4 rounded-[30px] shadow-2xl">
        <CardWrapper course={courseslist?.courseFilterDtos} />
        <PaginationWrapper count={10} handleChangePage={handleChangePage} />
      </div>
    </>
  );
};

export { CoursLists };
