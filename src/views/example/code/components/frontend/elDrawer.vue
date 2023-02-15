<template>
    <div>
        <el-card header="问题描述" class="mb-20">
            在给element-ui的drawer组件添加通过esc按键关闭时遇到一些问题，发现在某些特定情况下esc按键不生效。
            <ul class="view-ul">
                <li>
                    <p>
                        仿照官方示例，最开始发现无法通过esc关闭drawer组件，最后发现必须添加sync才能生效（同时注意，vue.js的引入必须在element-ui之前才能生效）
                    </p>
                    <pre v-highlight="demo1">
                        <code class="html"></code>
                    </pre>
                </li>
                <li></li>
            </ul>
        </el-card>
        <el-button>方式一</el-button>
    </div>
</template>

<script>
import { elDrawerDemo1 } from './code';

export default {
    data() {
        return {
            demo1: elDrawerDemo1,
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped></style>
