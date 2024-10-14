import React, { useEffect, useState } from "react";
import { getCoursLevel } from "../../core/services/api/getCourseLevel";
import { getCourseTypes } from "../../core/services/api/getCourseType";
import { getCourseTech } from "../../core/services/api/getCourseTech";
import filter from "../../assets/Image/filter.png";
import {
  handletypeName,
  handletechName,
  handlelevelName,
  handleCostUp,
  handleCostDown,
  handleClearAllFilters,
} from "../../Redux/CourseSlice";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";

function valuetext(value) {
  return `${value}`;
}
const Filter = () => {
  const [CourseType, setCourseType] = useState([]);

  const [CourseLevel, setCoursLevel] = useState([]);

  const [CourseTech, setCourseTech] = useState([]);

  const { CostUp, CostDown, typeName, levelName, techName } = useSelector(
    (state) => {
      return state.Courses;
    }
  );

  const dispatch = useDispatch();

  const getFilter = async () => {
    const CoursLevel = await getCoursLevel();
    setCoursLevel(CoursLevel);

    const CourseType = await getCourseTypes();
    setCourseType(CourseType);

    const CourseTech = await getCourseTech();
    setCourseTech(CourseTech);
  };

  useEffect(() => {
    getFilter();
  }, []);

  const handleCourseType = (e) => {
    const { value } = e.target;
    dispatch(handletypeName(value));
  };

  const handleCoursLevel = (e) => {
    const { value } = e.target;
    dispatch(handlelevelName(value));
  };

  const handleCourstechName = (e) => {
    const { value } = e.target;
    dispatch(handletechName(value));
  };

  const handleChange = (event, newValue) => {
    dispatch(handleCostUp(newValue[1]));
    dispatch(handleCostDown(newValue[0]));

    console.log(newValue, "new");
  };

  return (
    <div className="flex items-start pr-[36px] ">
      <div className="flex flex-col  h-[469px] w-[230px] bg-[#FBF6F6] shadow-md rounded-[30px] text-center py-8 px-[10px]">
        <div className="flex items-center justify-center pb-5 pl-3">
        
        <div className="pl-2">
        <img src={filter} />
        </div>

          فیلتر ها
        </div>

        <div className="pb-4">
          <label className="block text-gray-700 text-sm text-right  pb-2 ">
            تکنولوژی :
          </label>
          <select
          
            value={techName}
            onChange={handleCourstechName}
            className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-center  text-gray-700 focus:outline-none focus:border-indigo-500"
          >
            <option value={null}>انتخاب تکنولوژی</option>

            {CourseTech?.map((item) => {
              return <option value={item.id}>{item.techName}</option>;
            })}
          </select>
        </div>

        <div className="pb-4">
          <label className="block text-gray-700 text-sm text-right pb-2">
            نوع برگزاری :
          </label>
          <select
            value={typeName}
            onChange={handleCourseType}
            className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-center text-gray-700 focus:outline-none focus:border-indigo-500"
          >
            {CourseType?.map((item) => {
              return <option value={item.id}> {item.typeName} </option>;
            })}
            
            <option value="">انتخاب نوع برگزاری</option>
          </select>
        </div>

        <div className="pb-4">
          <label className="block text-gray-700 text-sm text-right pb-2">
            سطح دوره :
          </label>
          <select
            value={levelName}
            onChange={handleCoursLevel}
            className=" w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-center text-gray-700 focus:outline-none focus:border-indigo-500"
          >
            {CourseLevel?.map((item) => {
              return <option value={item.id}>{item.levelName}</option>;
            })}
            <option value="">انتخاب سطح دوره</option>
          </select>
        </div>

        <div className="pb-4">
          <label className=" text-gray-700 text-sm text-right font-bold pb-2">
            رنج قیمت: ريال {CostDown} تا {CostUp}
          </label>
          <Box sx={{ width: 208 }}>
            <Slider
              getAriaLabel={() => "price range"}
              value={[CostDown, CostUp]}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000000000}
              getAriaValueText={valuetext}
              step={50000}
            />
          </Box>
        </div>

        {/* دکمه پاک کردن فیلترها */}
        <button
          onClick={() => {
            dispatch(handleClearAllFilters());
          }}
          className="bg-[#5BE1B9] py-2 px-4 rounded "
        >
          پاک کردن فیلتر ها
        </button>
      </div>
    </div>
  );
};

export default Filter;
