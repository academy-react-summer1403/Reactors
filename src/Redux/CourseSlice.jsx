import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
    name: "Courses",
    initialState: {
        levelName: "",
        techName: "",
        typeName:"",
        title: "",
        describe:"",
    },
    reducers: {
        handlelevelName: (state, action) => {
            state.levelName = action.payload
        },
        handletechName: (state, action) => {
            state.techName = action.payload
        },
        handletypeName: (state, action) => {
            state.typeName = action.payload
        },
        handletitle: (state, action) => {
            state.title = action.payload
        },
        handledescribe: (state, action) => {
            state.describe = action.payload
        },
        handleSortType: (state, action) => {
            state.SortType = action.payload
        },
        handlePageNumber: (state, action) => {
            state.PageNumber = action.payload
        },
        
    }
})

export const { handlelevelName,handletechName,handletypeName,handletitle,handledescribe,handleSortType,handlePageNumber } = CourseSlice.actions
export default CourseSlice.reducer