import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./CourseSlice";
import NewsSlice from "./NewsSlice";
import auth from "./auth";
import CourseDetailSlice from "./CdetailSlice";
const store = configureStore({
    reducer:{
        Courses:CourseSlice,
        news: NewsSlice, 
        auth ,
        detailCourse :CourseDetailSlice,
        
    },
})

export {store};
