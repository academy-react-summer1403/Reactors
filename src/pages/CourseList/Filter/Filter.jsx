import React, { useEffect, useState } from 'react';
import { getCoursLevel } from '../../../core/services/api/getCourseLevel';
import { getCourseTypes } from '../../../core/services/api/getCourseType';
import { getCourseTech } from '../../../core/services/api/getCourseTech';
import { handletypeName, handletechName, handlelevelName } from '../../../Redux/CourseSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  // حالت های انتخابی برای فیلترها
  const [technology, setTechnology] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const [CourseType, setCourseType] = useState([]);

  const [CourseLevel, setCoursLevel] = useState([]);

  const [CourseTech, setCourseTech] = useState([]);

  const [CostDown, setCostDown] = useState([]);

  const [CostUp, setCostUp] = useState([]);

  // const [priceRange, handleCost] = useState([]);

  const dispatch = useDispatch();

  const clearFilters = () => {
    setTechnology('');
    setDeliveryType('');
    setCourseLevel('');
    setPriceRange('');
  };

  const getFilter = async () => {
    const CoursLevel = await getCoursLevel();
    setCoursLevel(CoursLevel);
    console.log(CoursLevel, "CourseLevel");


    const CourseType = await getCourseTypes();
    setCourseType(CourseType);
    console.log(CourseType, "CourseType");


    const CourseTech = await getCourseTech();
    setCourseTech(CourseTech);
    console.log(CourseTech, "CourseTech");

    // const CostDown = await getCostDown();
    // setCostDown(CostDown);
    // console.log(CostDown, "CostDown");


    // const CostUp = await getCostUp();
    // setCostUp(CostUp);
    // console.log(CostUp, "CostUp");

    // const Cost = await getCost();
    // setCost(Cost);
    // console.log(Cost, "Cost");


  }

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'levelName') dispatch(handlelevelName(value));
  //   else if (name === 'techName') dispatch(handletechName(value));
  //   else if (name === 'typeName') dispatch(handletypeName(value));
  //   console.log(name, value);
  // };

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

  // const handleCostDown= (e) =>{
  //   const { value } = e.target;
  //   dispatch(handleCostDown(value));
  // }

  // const handleCostUp= (e) =>{
  //   const { value } = e.target;
  //   dispatch(handleCostUp(value));
  // }

  const handleCost = (e) => {
    const { value } = e.target;
    dispatch(handleCost(value));
  }


  useEffect(() => {
    getFilter();
  }, []);






  return (
    <div className="p-6 bg-[#FBF6F6] shadow-md rounded-lg text-right w-[210px] ml-[1063px] mb-[1909px] mt-[-2302px]">
      {/* بخش تکنولوژی */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 ">تکنولوژی</label>
        <select
          value={null}
          onChange={handleCourstechName}
          className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2  text-gray-700 focus:outline-none focus:border-indigo-500">
          {CourseTech?.map((item) => {
            return <option value={item.id}>
              {item.techName}</option>})}
          <option value="">انتخاب تکنولوژی</option>
        </select>
      </div>

      {/* بخش نوع برگزاری */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">نوع برگزاری</label>
        <select
          value={null}
          onChange={handleCourseType}
          className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-right text-gray-700 focus:outline-none focus:border-indigo-500">
          {CourseType?.map((item) => {return<option value={item.id}> {item.typeName} </option>})}
          <option value="">انتخاب نوع برگزاری</option>
        </select>
      </div>

      {/* بخش سطح دوره */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">سطح دور</label>
        <select
          value={null}
          onChange={handleCoursLevel}
          className="block w-full bg-[#FBF6F6] border border-[#5BE1B9] rounded-md shadow-sm px-4 py-2 text-right text-gray-700 focus:outline-none focus:border-indigo-500">
          {CourseLevel?.map((item) => {
            return <option value={item.id}

            >{item.levelName}</option>
          })}
          <option value="">انتخاب سطح دوره</option>

        </select>
      </div>

      {/* بخش قیمت */}
      <div className="mb-6"> <label className="block text-gray-700 text-sm font-bold mb-2">رنج قیمت: ريال{priceRange}</label>
        <input
          type="range"
          min="0"
          max="100000"
          value={null}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full "
        />
      </div>

      {/* دکمه پاک کردن فیلترها */}
      <button
        onClick={clearFilters}
        className="bg-[#5BE1B9] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        پاک کردن فیلتر ها
      </button>

      {/* {course.map((item) => {
        return <Card
          // key={item.id}
          data={item}>
        </Card>
      })} */}


    </div>
  );
};

export default Filter;