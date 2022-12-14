<template>
    <el-card>
        <el-descriptions>
            <el-descriptions-item label="标题" :span="3">{{row.title}}</el-descriptions-item>
            <el-descriptions-item label="作者" :span="3">{{row.author}}</el-descriptions-item>
            <el-descriptions-item label="发布时间" :span="3">{{row.display_time}}</el-descriptions-item>
        </el-descriptions>
        <el-button type="primary" @click="closeDrawer">关闭</el-button>
    </el-card>
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
        closeDrawer() {
            this.$drawer.close();
        },
    },
};
</script>

<style lang="scss" scoped>
</style>