import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "./CourseSlice";

const store = configureStore({
    reducer:{
        Courses:CourseSlice,
    },
})

export {store};
