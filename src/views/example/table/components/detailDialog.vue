<template>
    <el-descriptions>
        <el-descriptions-item label="标题" :span="3">{{row.title}}</el-descriptions-item>
        <el-descriptions-item label="作者" :span="3">{{row.author}}</el-descriptions-item>
        <el-descriptions-item label="发布时间" :span="3">{{row.display_time}}</el-descriptions-item>
    </el-descriptions>
</template>

<script>
export default {
    props: {
        row: Object,
        success: {
            type: Function,
            default: () => {},
        },
    },
    data() {
        return {};
    },
    methods: {
        /** submitForm方法名不允许自定义 */
        submitForm(next, loading) {
            console.log('做点击确认按钮相关操作');
            loading.start();
            setTimeout(() => {
                loading.finish();
                this.success && this.success();
                next && next();
            }, 1500);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>