import http from '../interceptor'

export const loginAPI = async (user) => {
    try {
        const response = await http.post("/Sign/Login", user)
        return response
    } catch (error) {
        throw false
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

export const verifyMessage = async (verifyCode) => {
    try {
        const response = await http.post("/Sign/VerifyMessage", verifyCode)
        return response
    } catch (error) {
        return false
    }
}

export const finalRegisteration = async (userData) => {
    try {
        const response = await http.post("/Sign/Register", userData)
        return response
    } catch (error) {
        return false
    }
}

export const forgetPassword = async (email) => {
    try {
        const response = await http.post("/Sign/ForgetPassword", email)
        return response
    } catch (error) {
        return false
    }
}

export const getConfigValue = async (configValue) => {
    try {
        const response = http.get("/Sign/Reset/" + configValue)
        return response
    } catch (error) {
        return false
    }
}

export const changePassword = async (newPassword) => {
    try {
        const response = await http.post("/Sign/Reset", newPassword)
        return response
    } catch (error) {
        return false
    }
}