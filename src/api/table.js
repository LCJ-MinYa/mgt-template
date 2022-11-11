import request from '@/utils/request';

export function getList(params) {
    return new Promise((resolve, reject) => {
        request({
            url: '/vue-admin-template/table/list',
            method: 'get',
            params,
        })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => reject(err));
    });
}
