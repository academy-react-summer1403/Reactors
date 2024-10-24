import http from '../interceptor'

export const getUserInfo = async () => {
    try {
        const response = await http.get("/SharePanel/GetProfileInfo")
        return response
    } catch (error) {
        return false
    }
}

export const getMyCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=")
        return response
    } catch (error) {
        return false
    }
}

export const getReservedCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesReserve")
        return response
    } catch (error) {
        return false
    }
}

export const getFavoriteCourses = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteCourses")
        return response
    } catch (error) {
        return false
    }
}

export const getFavoriteArticles = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyFavoriteNews")
        return response
    } catch (error) {
        return false
    }
}

export const getCourseComments = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyCoursesComments")
        return response
    } catch (error) {
        return false
    }
}

export const getArticlesComments = async () => {
    try {
        const response = await http.get("/SharePanel/GetMyNewsComments")
        return response
    } catch (error) {
        return false
    }
}

export const changePassword = async (newPassword) => {
    try {
        const response = await http.post("/SharePanel/ChangePassword", newPassword)
        return response
    } catch (error) {
        return false
    }
}

export const editProfile = async (userInfo) => {
    try {
        const response = await http.put("/SharePanel/UpdateProfileInfo", userInfo)
        return response
    } catch (error) {
        return false
    }
}
