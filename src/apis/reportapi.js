import {api} from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

export const ReportAPI={

    getReport: async (id, cancel = false) => {
        const response = await api.request({
            url: `health/api/patient/${id}/reports/`,
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getReportDoc: async (id, cancel = false) => {
        const response = await api.request({
            url: `health/api/patient/${id}/`,
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    

}

const cancelApiObject = defineCancelApiObject(ReportAPI);