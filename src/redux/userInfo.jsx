import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "dashboard",
    initialState: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        nationalCode: "",
        birthday: "",
        homeAddress: "",
        email: "",
        gender: "",
        userAbout: "",
        telegramLink: "",
        linkdinProfile: "",
        profileCompletionPercentage: ""
    },
    reducers: {
        handleFirstName: (state, action) => {
            state.firstName = action.payload
        },
        handleLastName: (state, action) => {
            state.lastName = action.payload
        },
        handlePhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        handleNationalCode: (state, action) => {
            state.nationalCode = action.payload
        },
        handleBirthday: (state, action) => {
            state.birthday = action.payload
        },
        handleHomeAddress: (state, action) => {
            state.homeAddress = action.payload
        },
        handleEmail: (state, action) => {
            state.email = action.payload
        },
        handleGender: (state, action) => {
            state.gender = action.payload
        },
        handleUserAbout: (state, action) => {
            state.userAbout = action.payload
        },
        handleTelegramLink: (state, action) => {
            state.telegramLink = action.payload
        },
        handleLinkdinProfile: (state, action) => {
            state.linkdinProfile = action.payload
        },
        handleProfileCompletionPercentage: (state, action) => {
            state.profileCompletionPercentage = action.payload
        }
    }
})

export const { handleFirstName, handleLastName, handlePhoneNumber, handleNationalCode, handleBirthday, handleHomeAddress, handleEmail, handleGender, handleUserAbout, handleTelegramLink, handleLinkdinProfile, handleProfileCompletionPercentage } = userInfo.actions
export default userInfo.reducer
