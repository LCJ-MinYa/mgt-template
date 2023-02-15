import { handleAngleBracket } from '../../utils/index';

const elDrawerDemo1 = handleAngleBracket(`/* 直接通过网页script引入 */
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            http-equiv="X-UA-Compatible"
            content="IE=edge"
        />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <title>Document</title>
        <script src="https://unpkg.com/vue@2/dist/vue.js"></script>
        <!-- 引入样式 -->
        <link
            rel="stylesheet"
            href="https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css"
        />
        <!-- 引入组件库 -->
        <script src="https://unpkg.com/element-ui@2.13.2/lib/index.js"></script>
    </head>
    <body>
        <div id="app">
            <el-button @click="visible = !visible">打开抽屉</el-button>
            <el-drawer
                title="抽屉标题"
                :visible.sync="visible"
                :with-header="false"
            >
                <span>我是抽屉内容!</span>
            </el-drawer>
        </div>
    </body>
    <script>
        new Vue({
            el: '#app',
            data: function () {
                return { visible: true };
            },
        });
    </script>
</html>`);

export { elDrawerDemo1 };
