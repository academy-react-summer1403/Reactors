import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./CourseSlice";
import NewsSlice from "./NewsSlice";

const store = configureStore({
    reducer:{
        Courses:CourseSlice,
        news: NewsSlice
    },
})

export {store};
