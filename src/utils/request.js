import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';

const successHttpCode = [200];
const loginFailHttpCode = [401, 4000, 4001, 4002, 4003];

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API + process.env.VUE_APP_API_PREFIX, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
    (config) => {
        // do something before request is sent

        if (store.getters.token) {
            // let each request carry token
            // ['X-Token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers['X-Token'] = getToken();
        }
        return config;
    },
    (error) => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    (response) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        const {
            // 是否返回原始响应数据 showOriginData
            // 是否不显示任何错误信息 skipError
            config: { skipError = false, showOriginData = false },
            data: responseData,
        } = response;
        const { code, message, data = {} } = responseData;

        // 报错信息显示
        if (!skipError) {
            if (!successHttpCode.includes(code)) {
                loginFailHttpCode.includes(code) ? Message.error('登录已过期，请重新登录') : Message.error(message);
                return Promise.reject(message || 'Error');
            }
        }

        // 登录信息验证不通过处理
        if (loginFailHttpCode.includes(code)) {
            store.dispatch('user/resetToken').then(() => {
                location.reload();
            });
        }

        // 返回原始响应数据
        if (showOriginData) {
            return responseData;
        }

        // 如果服务器返回的data字段为null，则返回空字符串，避免解构赋值默认值无法生效
        if (data === null) {
            return '';
        }

        // 仅返回处理后的data数据（无code，message，status, success字段）
        return data;
    },
    (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        let {
            // 是否返回原始响应数据 showOriginData
            // 是否不显示任何错误信息 skipError
            config: { skipError = false, showOriginData = false },
            status,
            message = '',
        } = error.response || { config: {} };
        if (error && error.response) {
            switch (status) {
                case 400:
                    message = '请求出错';
                    break;
                case 401:
                    Message.error('授权失败，请重新登录');
                    store.dispatch('user/resetToken').then(() => {
                        location.reload();
                    });
                    return;
                case 403:
                    message = '拒绝访问';
                    break;
                case 404:
                    message = '请求错误,未找到该资源';
                    break;
                case 500:
                    message = '服务器端出错';
                    break;
            }
        } else {
            message = '连接服务器失败';
        }

        // 报错信息显示
        if (!skipError) {
            Message.error(message);
        }

        return Promise.reject(error);
    }
);

// http method
const METHOD = {
    GET: 'get',
    POST: 'post',
};

/**
 * axios请求
 * @param url 请求地址
 * @param method {METHOD} http method
 * @param params 请求参数
 * @returns {Promise<AxiosResponse<T>>}
 */
async function request(url, method, params, config) {
    switch (method) {
        case METHOD.GET:
            return service({ url, method, params: { ...params, ...config } });
        case METHOD.POST:
            return service({ url, method, params, ...config });
        default:
            return service({ url, method, params, ...config });
    }
}

export { METHOD, request };
