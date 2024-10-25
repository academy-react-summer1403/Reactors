import { createSlice } from "@reduxjs/toolkit";

const CourseDetailSlice = createSlice({
  name: "detailCourse",
  initialState: {
    CardView: true,
  },
  reducers: {
    handleCardView: (state, action) => {
      state.CardView = action.payload;
    },
  },
})

export const{handleCardView}=CourseDetailSlice.actions
export default CourseDetailSlice.reducer
