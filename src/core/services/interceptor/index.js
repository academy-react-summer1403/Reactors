import axios from "axios";
import { clearStorage, getItem, removeItem } from "../../utils/storage.services";
import toast from "react-hot-toast";

const baseURL = "https://classapi.sepehracademy.ir/api"

const instance = axios.create({
    baseURL: baseURL,
});


const onSuccess = (response) => {
    toast.success("عملیات با موفقیت انجام شد")
    return response.data;
};


const onError = (err) => {
    console.log(err);

    if (err.message === "Network Error") toast.error("اتصال اینترنت خود را چک کنید")

    if (err.response.status === 401){
        clearStorage()
        removeItem('token'); 
        window.location.pathname = '/'; // or login
    }

        if (err.response.status >= 400 && err.response.status < 500) {
            toast.error("درخواست نامعتبر است")
        }

    return Promise.reject(err);
};


instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((option) => {
    const token = getItem("token");
    
    if(token) option.headers.Authorization = "Bearer " + token;
    return option;
});

export default instance;