import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./CourseSlice";
import NewsSlice from "./NewsSlice";
import auth from "./auth"
import CourseDetailSlice from "./CdetailSlice";
import userInfo from './userInfo'

const store = configureStore({
    reducer:{
        Courses:CourseSlice,
        news: NewsSlice, 
        auth,
        detailCourse :CourseDetailSlice,
        userInfo,
    },
})

export {store};
