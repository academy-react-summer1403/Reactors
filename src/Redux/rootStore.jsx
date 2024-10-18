import { configureStore, createSlice } from "@reduxjs/toolkit";
import CourseSlice from "./CourseSlice";
import NewsSlice from "./NewsSlice";
import { auth } from "../configs/router/auth.router";

const store = configureStore({
    reducer:{
        Courses:CourseSlice,
        news: NewsSlice,
        auth : auth,
    },
})

export {store};
