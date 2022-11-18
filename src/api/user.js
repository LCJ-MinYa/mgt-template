import { METHOD, request } from '@/utils/request';

export function login(data) {
    return request('/user/login', METHOD.POST, data);
}

export function getInfo(token) {
    return request('/user/info', METHOD.GET, { token });
}

export function logout() {
    return request('/user/logout', METHOD.POST);
}
