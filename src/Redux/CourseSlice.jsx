import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
    name: "Courses",
    initialState: {
        levelName: "",
        techName: "",
        typeName:"",
        CostDown: "",
        CostUp:"",
        title: "",
        describe:"",
        PageNumber:"",
        Sort:"",
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
        handleCostDown: (state, action) => {
            state.CostDown = action.payload
        },
        handleCostUp: (state, action) => {
            state.CostUp = action.payload
        },
        handleSort: (state, action) => {
            state.Sort = action.payload
        },
        
        
    }
})

export const { handleSort,handlelevelName,handletechName,handletypeName,handletitle,handledescribe,handleSortType,handlePageNumber,handleCostDown,handleCostUp } = CourseSlice.actions
export default CourseSlice.reducer