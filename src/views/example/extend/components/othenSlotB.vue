<template>
    <el-card class="mb-20" @click="acc">子类中以组件形式引入的自定义otherSlotB</el-card>
</template>

<script>
export default {
    inject: ['baseClass'],
    props: ['a'],
    data() {
        return {};
    },
    mounted() {
        console.log(this);
        this.$nextTick(() => {
            console.log(this.$parent);
            console.log(this.baseClass);
        });
    },
    methods: {
        acc() {},
    },
};
</script>

<style lang="scss" scoped>
</style>