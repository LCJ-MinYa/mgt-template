import { METHOD, request } from '@/utils/request';

export function getList(params) {
    return new Promise((resolve, reject) => {
        request('/table/list', METHOD.GET, params)
            .then((result) => {
                resolve(result);
            })
            .catch((err) => reject(err));
    });
}

export function deleteTableItem(params) {
    return request('/table/deleteItem', METHOD.POST, params, { showOriginData: true });
}
