import http from '../interceptor'

export const getUserInfo = async () => {
    try {
        const response = await http.get("/SharePanel/GetProfileInfo")
        return response
    } catch (error) {
        throw error
    }
}

export const getMyCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=")
        console.log(response)
        return response
    } catch (error) {
        throw error
    }
}

export const getReservedCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesReserve")
        return response
    } catch (error) {
        throw error
    }
}

export const getFavoriteCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteCourses")
        return response
    } catch (error) {
        throw error
    }
}

export const getFavoriteArticles = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteNews")
        return response
    } catch (error) {
        throw error
    }
}

export const getCourseComments = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesComments")
        return response
    } catch (error) {
        throw error
    }
}

export const getArticlesComments = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyNewsComments")
        return response
    } catch (error) {
        throw error
    }
}

export const changePassword = async (newPassword) => {
    try {
        const response = await http.post("/SharePanel/ChangePassword", newPassword)
        return response
    } catch (error) {
        throw error
    }
}

export const addProfileImage = async (profile) => {
    try {
        const response = await http.post("/SharePanel/AddProfileImage", profile)
        return response
    } catch (error) {
        throw error
    }
}

export const selectProfileImage = async (profile) => {
    try {
        const response = await http.post("/SharePanel/SelectProfileImage", profile)
        return response
    } catch (error) {
        throw error
    }
}

export const editProfile = async (userInfo) => {
    try {
        const response = await http.put("/SharePanel/UpdateProfileInfo", userInfo)
        return response
    } catch (error) {
        throw error
    }
}

export const deleteProfileImage = async (profile) => {
    try {
        const response = await http.delete("/SharePanel/DeleteProfileImage",profile)
        return response
    } catch (error) {
        throw error
    }
}

export const deleteCourseReserve = async (reservedCourse) => {
    try {
        const response = await http.delete("/CourseReserve", {data : reservedCourse})
        return response
    } catch (error) {
        throw false
    }
} 
