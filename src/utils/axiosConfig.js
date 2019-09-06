import axios from 'axios';
import {envVariables} from "../../public/static/index";

let http = {
    get: (url, data) => {
        return new Promise((resolve, reject) => {
            if (typeof data === "object") {
                /*it goes in here when the user has added a data param when calling the get method*/
                axios({
                    method: "GET",
                    baseURL: envVariables.BASE_URL,
                    url,
                    params: {
                        ...data
                    },
                    headers:{
                        'token':sessionStorage.getItem('token')
                    }
                }).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                });
            } else {
                axios({
                    method: "GET",
                    baseURL: envVariables.BASE_URL,
                    url
                }).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                });
            }

        })
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            if (typeof data === "object") {
                /*it goes in here when the user has added a data param when calling the get method*/
                axios({
                    method: "POST",
                    baseURL: envVariables.BASE_URL,
                    url,
                    data,
                    headers:{
                        'token':sessionStorage.getItem('token')
                    }
                }).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                });
            } else {
                axios({
                    method: "POST",
                    baseURL: envVariables.BASE_URL,
                    url
                }).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                });
            }

        })
    },
    singleFileUpload(url,file,progressCallback){
        let form = new FormData();
        form.append("file",file);
        return axios({
            baseURL: envVariables.BASE_URL,
            url:url,
            method:"POST",
            data:form,
            onUploadProgress:progressCallback
        })
    }

};

export default http;

