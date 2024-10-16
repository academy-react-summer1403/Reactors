import { createSlice } from "@reduxjs/toolkit";

const NewsSlice = createSlice({
    name: "news",
    initialState: {
        SearchInput: "",
        PageNumber: "1",
        SortingCol: "",
        SortingType: "DESC",
        newsCatregoryName : "",
    },
    reducers: {
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
        handlenewsCatregoryName: (state, action) => {
            state.newsCatregoryName = action.payload
        },

    }
})

export const { handlenewsCatregoryName,handleSortingCol, handleSortingType, handleSearchInput, handlePageNumber } = NewsSlice.actions
export default NewsSlice.reducer