import React, { useEffect, useState } from "react";
import { Card } from "./Card";
// import { Footer } from "../Footer/Footer";
// import { Header } from "../../components/Header/header";
import axios from "axios";
// import { useLocation } from "react-router-dom";

const CoursLists = () => {
  const [Course, setCourseList] = useState([]);
  // const location = useLocation()

  // console.log('location',location)

  const getCours = async () => {
    console.log("Fetching started...");
    const res = await axios.get('https://66e2c174494df9a478e2f521.mockapi.io/cards/list')
    setCourseList(res.data)
  }

  useEffect(() => {
    getCours();
  }, []);
  

  
  return (
    <div className="flex flex-row justify-start items-center gap-5">
      {Course.map((item) => (
        <Card
        key={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        id={item.id}
        desription={item.description}
        readMore={item.readMore}

        />
      ))}

    </div>
  );
};

export { CoursLists };


