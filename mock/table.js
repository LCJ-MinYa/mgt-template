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
        url: '/mgt-template/table/list',
        type: 'get',
        response: (config) => {
            const { currentPage = 1, pageSize = 10 } = config.query;

            const pageList = List.filter((item, index) => index < pageSize * currentPage && index >= pageSize * (currentPage - 1));

            return {
                code: 200,
                data: {
                    total: List.length,
                    list: pageList,
                },
            };
        },
    },
    {
        url: '/mgt-template/table/deleteItem',
        type: 'post',
        response: (config) => {
            return config.query.id
                ? {
                      code: 200,
                      data: true,
                      message: '删除成功',
                  }
                : {
                      code: 500,
                      data: false,
                      message: '删除失败',
                  };
        },
    },
];
