import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
    name: "Courses",
    initialState: {
        levelName: "",
        techName: "",
        typeName: "",
        SearchInput: "",
        PageNumber: "",
        SortingCol: "",
        SortingType: "DESC",
        CostUp:"",
        CostDown:"",


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
        handleSearchInput: (state, action) => {
            state.SearchInput = action.payload
        },
        handlePageNumber: (state, action) => {
            state.PageNumber = action.payload
        },
        handleSortingCol: (state, action) => {
            state.SortingCol = action.payload
        },
        handleSortingType: (state, action) => {
            state.SortingType = action.payload
        },
        handleCostUp: (state, action) => {
            state.CostUp = action.payload
        },
        handleCostDown: (state, action) => {
            state.CostDown = action.payload
        },

    }
})

export const { handleCostDown,handleCostUp, handleSortingCol, handleSortingType, handlelevelName, handletechName, handletypeName, handleSearchInput, handlePageNumber } = CourseSlice.actions
export default CourseSlice.reducer