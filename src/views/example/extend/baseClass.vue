<template>
    <base-container>
        <base-main>
            <slot></slot>
            <slot name="otherSlotA"></slot>
            <slot name="otherSlotB"></slot>
        </base-main>
        <base-footer showGoBack />
    </base-container>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>