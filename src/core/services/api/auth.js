import http from '../interceptor'

export const loginAPI = async (user) => {
    try {
        const response = await http.post("/Sign/Login", user)
        return response
    } catch (error) {
        return false
    }
}

export const sendVerifyMessage = async (phoneNumber) => {
    try {
        const response = await http.post("/Sign/SendVerifyMessage", phoneNumber)
        return response
    } catch (error) {
        return false
    }
}
