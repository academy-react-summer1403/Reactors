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
