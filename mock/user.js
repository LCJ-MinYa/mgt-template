const tokens = {
    admin: {
        token: 'admin-token',
    },
    editor: {
        token: 'editor-token',
    },
};

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: '超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '工作台 - 角色 => 超级管理员',
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor',
    },
};

module.exports = [
    // user login
    {
        url: '/mgt-template/user/login',
        type: 'post',
        response: (config) => {
            const { username } = config.body;
            const token = tokens[username];

            // mock error
            if (!token) {
                return {
                    code: 401,
                    message: 'Account and password are incorrect.',
                };
            }

            return {
                code: 200,
                data: token,
            };
        },
    },

    // get user info
    {
        url: '/mgt-template/user/info.*',
        type: 'get',
        response: (config) => {
            const { token } = config.query;
            const info = users[token];

            // mock error
            if (!info) {
                return {
                    code: 401,
                    message: 'Login failed, unable to get user details.',
                };
            }

            return {
                code: 200,
                data: info,
            };
        },
    },

    // user logout
    {
        url: '/mgt-template/user/logout',
        type: 'post',
        response: (_) => {
            return {
                code: 200,
                data: 'success',
            };
        },
    },
];
