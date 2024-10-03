import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "auth",
    initialState: {
        image: "",
        phoneNumber: ""
    },
    reducers: {
        handleImage: (state, action) => {
            state.image = action.payload
        },
        handlePhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        }
    }
})

export const { handleImage, handlePhoneNumber } = auth.actions
export default auth.reducer