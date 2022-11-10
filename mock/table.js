const Mock = require('mockjs');

const data = Mock.mock({
    'list|10': [
        {
            id: '@id',
            title: '@sentence(10, 20)',
            'status|1': ['published', 'draft', 'deleted'],
            author: 'name',
            display_time: '@datetime',
            pageviews: '@integer(300, 5000)',
            audit_time: '@datetime',
        },
    ],
});

module.exports = [
    {
        url: '/vue-admin-template/table/list',
        type: 'get',
        response: (config) => {
            const { list } = data;
            return {
                code: 20000,
                data: {
                    total: list.length,
                    list: data.list,
                },
            };
        },
    },
];
