const Mock = require('mockjs');

const List = [];
const count = 96;

for (let i = 0; i < count; i++) {
    List.push(
        Mock.mock({
            id: '@id',
            title: '@sentence(10, 20)',
            'status|1': ['published', 'draft', 'deleted'],
            author: '@cname()',
            display_time: '@datetime',
            pageviews: '@integer(300, 5000)',
            audit_time: '@datetime',
        })
    );
}

module.exports = [
    {
        url: '/vue-admin-template/table/list',
        type: 'get',
        response: (config) => {
            const { currentPage = 1, pageSize = 10 } = config.query;

            const pageList = List.filter((item, index) => index < pageSize * currentPage && index >= pageSize * (currentPage - 1));

            return {
                code: 20000,
                data: {
                    total: List.length,
                    list: pageList,
                },
            };
        },
    },
];
