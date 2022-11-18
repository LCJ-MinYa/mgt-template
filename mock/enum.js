const Mock = require('mockjs');

module.exports = [
    {
        url: '/mgt-template/enum/select1',
        type: 'post',
        response: (config) => {
            const select1 = [
                {
                    select1Lable: '远程测试1',
                    select1Value: 1,
                },
                {
                    select1Lable: '远程测试2',
                    select1Value: 2,
                },
                {
                    select1Lable: '远程测试3',
                    select1Value: 3,
                },
                {
                    select1Lable: '远程测试4',
                    select1Value: 4,
                },
            ];

            return {
                code: 200,
                data: select1,
            };
        },
    },
];
