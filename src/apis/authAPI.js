import {authapi} from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";


export const AuthAPI = {

    postLogin: async (login, cancel = false) => {
        const response = await authapi.request({
            url: "patient/login",
            method: "POST",
            data: login,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postUID: async (uid, cancel = false) => {
        const response = await authapi.request({
            url: "patient/generateotp_uid",
            method: "POST",
            data: uid,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postVerifyOtp: async (otp, cancel = false) => {
        const response = await authapi.request({
            url: "patient/authotp_uid",
            method: "POST",
            data: otp,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postPhone: async (uid, cancel = false) => {
        const response = await authapi.request({
            url: "patient/generateotp_phno",
            method: "POST",
            data: uid,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postPhoneVerifyOtp: async (otp, cancel = false) => {
        const response = await authapi.request({
            url: "patient/authotp_phno",
            method: "POST",
            data: otp,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


}

const cancelApiObject = defineCancelApiObject(AuthAPI);