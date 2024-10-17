import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "auth",
    initialState: {
        image: "",
        phoneNumber: "",
        userId: ""
    },
    reducers: {
        handleImage: (state, action) => {
            state.image = action.payload
        },
        handlePhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        handleUserId: (state, action) => {
            state.userId = action.payload
        }
    }
})

export const { handleImage, handlePhoneNumber, handleUserId } = auth.actions
export default auth.reducer