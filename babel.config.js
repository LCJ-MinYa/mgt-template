const path = require('path');

module.exports = {
    presets: [
        // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
        '@vue/cli-plugin-babel/preset',
    ],
    env: {
        development: {
            // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
            // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
            // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
            plugins: ['dynamic-import-node'],
        },
    },
    /** 排除src/views/example/code/components/文件夹，以便代码演示模块内的代码直接展示，而不是通过ES6转ES5一次 */
    exclude: [path.resolve(__dirname, 'src/views/example/code/components/')],
};
