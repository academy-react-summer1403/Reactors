import React, { useEffect, useState } from 'react';
import { getCoursLevel } from '../../../core/services/api/getCourseLevel';
import { getCourseTypes } from '../../../core/services/api/getCourseType';
import { getCourseTech } from '../../../core/services/api/getCourseTech';
import { handletypeName, handletechName, handlelevelName, handleCostUp, handleCostDown } from '../../../Redux/CourseSlice';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}
const Filter = () => {
  // حالت های انتخابی برای فیلترها
  const [technology, setTechnology] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const [CourseType, setCourseType] = useState([]);

  const [CourseLevel, setCoursLevel] = useState([]);

  const [CourseTech, setCourseTech] = useState([]);

  const [value, setValue] = React.useState([0,10000000]);

  // const [costUp ,setCostUp] = useState([0]);
  // const [costDown ,setCostDown] = useState([10000]);



  const dispatch = useDispatch();

  const clearFilters = () => {
    // CourseType([]);
    // CourseLevel([]);
    // setCourseTech([]);
    // setPriceRange('');
  };

  const getFilter = async () => {
    const CoursLevel = await getCoursLevel();
    setCoursLevel(CoursLevel);


    const CourseType = await getCourseTypes();
    setCourseType(CourseType);


    const CourseTech = await getCourseTech();
    setCourseTech(CourseTech);
  }

  useEffect(() => {
    getFilter();
  }, []);


  const handleCourseType = (e) => {
    const { value } = e.target;
    dispatch(handletypeName(value));
  }

  const handleCoursLevel = (e) => {
    const { value } = e.target;
    dispatch(handlelevelName(value));
  }

  const handleCourstechName = (e) => {
    const { value } = e.target;
    dispatch(handletechName(value));
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
    const { value } = event.target;
    dispatch(handleCostUp(value));
    dispatch(handleCostDown(value));
  };


  return (
    <div className=" w-[200px] bg-[#FBF6F6] shadow-md rounded-lg text-center  ml-[1063px] mb-[1848px] mt-[-2192px]">
      {/* بخش تکنولوژی */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold text-right  mb-2 ">تکنولوژی</label>
        <select
          value={null}
          onChange={handleCourstechName}
          className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-center  text-gray-700 focus:outline-none focus:border-indigo-500">
          <option value={null}>انتخاب تکنولوژی</option>

          {CourseTech?.map((item) => { return <option value={item.id}>{item.techName}</option> })}
        </select>
      </div>

      {/* بخش نوع برگزاری */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold text-right mb-2">نوع برگزاری</label>
        <select
          value={null}
          onChange={handleCourseType}
          className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-center text-gray-700 focus:outline-none focus:border-indigo-500">
          {CourseType?.map((item) => { return <option value={item.id}> {item.typeName} </option> })}
          <option value="">انتخاب نوع برگزاری</option>
        </select>
      </div>

      {/* بخش سطح دوره */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold text-right mb-2">سطح دور</label>
        <select
          value={null}
          onChange={handleCoursLevel}
          className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-center text-gray-700 focus:outline-none focus:border-indigo-500">
          {CourseLevel?.map((item) => {
            return <option value={item.id}

            >{item.levelName}</option>
          })}
          <option value="">انتخاب سطح دوره</option>

        </select>
      </div>

      {/* بخش قیمت */}
      <div className="mb-6" >
        <label className="block text-gray-700 text-sm text-right font-bold mb-2">رنج قیمت: ريال</label>
        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => 'price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={10000000}
            getAriaValueText={valuetext}
            initialValues={{ cost: "" }}
            step={1000000}
          />
        </Box>
      </div>

      {/* دکمه پاک کردن فیلترها */}
      <button
        onClick={clearFilters}
        className="bg-[#5BE1B9] py-2 px-4 rounded "
      >
        پاک کردن فیلتر ها
      </button>
    </div>
  );
};

export default Filter;