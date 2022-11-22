<template>
    <el-footer class="bg-white flex flex-center-y">
        <el-button @click="goBack" v-if="showGoBack">返回</el-button>
        <slot />
        <div class="right-box" v-if="$slots.extraRightComponent">
            <slot name="extraRightComponent" />
        </div>
    </el-footer>
</template>

<script>
export default {
    name: 'BaseFooter',
    props: {
        showGoBack: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {};
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="scss" scoped>
.right-box {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>