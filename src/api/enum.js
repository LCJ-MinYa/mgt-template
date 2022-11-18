import { METHOD, request } from '@/utils/request';

export function getSelect1Enum(params) {
    return request('/enum/select1', METHOD.POST, params);
}
