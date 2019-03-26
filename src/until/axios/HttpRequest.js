import axios from 'axios';
import config from '../../config'
export class HttpRequest {
    constructor(baseUrl = config.BASE_URL) {
        this.baseUrl = baseUrl;
    }

    // setting default request option
    getDefaultOptions() {
        const options = {
            baseUrl: this.baseUrl,
            headers: {
                //
            }
        };
        return options;
    }

    // setting interceptors
    interceptors(instance) {
        // request interceptors
        instance.interceptors.request.use(config => {
            return config;
        }, error => {
            return Promise.reject(error);
        });
        // response interceptors
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            return Promise.reject(error);
        })
    }

    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getDefaultOptions(), options);
        this.interceptors(instance);
        return instance(options);
    }
}
