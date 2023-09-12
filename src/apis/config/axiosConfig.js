import axios from "axios";

import { BASE_URL } from "../../constants/apiConstant";
import { AUTH_URL } from "../../constants/apiConstant";

export const api = axios.create({
    withCredentials:false,
    baseURL: BASE_URL,
})

export const authapi = axios.create({
    withCredentials:false,
    baseURL: AUTH_URL,
})

const errorHandler = (error) => {
    const statusCode = error.response?.status;

    if (statusCode && statusCode!== 401){
        console.error(error);
    }

    return Promise.reject(error);
}

api.interceptors.response.use(undefined,(error)=>{
    return errorHandler(error);
});