import request from '@/utils/request';

export function getSelect1Enum(params) {
    return request({
        url: '/vue-admin-template/enum/select1',
        method: 'post',
        params,
    });
}
