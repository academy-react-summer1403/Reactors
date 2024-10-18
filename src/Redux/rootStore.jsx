import { configureStore, createSlice } from "@reduxjs/toolkit";
import CourseSlice from "./CourseSlice";
import NewsSlice from "./NewsSlice";
import auth from "./auth";
const store = configureStore({
    reducer:{
        Courses:CourseSlice,
        news: NewsSlice,
        auth 
    },
})

export {store};
