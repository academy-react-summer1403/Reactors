import React, { useEffect, useState } from "react";
import { Card } from "./Card";
// import { Footer } from "../Footer/Footer";
import { Header } from "../../Header/header";
import axios from "axios";
import { useLocation } from "react-router-dom";

const CoursLists = () => {
  const [CourseList, setCourseList] = useState([]);
//   const location = useLocation()

//   console.log('location',location)

  const fetchData = async () => {
    const res = await axios.get('https://66e2c174494df9a478e2f521.mockapi.io/cards/list')
    setCourseList(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  
  return (
    <div className="flex flex-row justify-start items-center gap-5">
      {CourseList.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          companyName={item.companyName}
          des={item.carDescription}
          id={item.id}
        />
      ))}

    </div>
  );
};

export { CoursLists };


