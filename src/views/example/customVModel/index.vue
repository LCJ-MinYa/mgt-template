<template>
    <base-container>
        <base-main>
            <element-custom class="mb-20" />
            <native-custom />
        </base-main>
    </base-container>
</template>

<script>
import ElementCustom from './element/index.vue';
import NativeCustom from './native/index.vue';

export default {
    components: {
        ElementCustom,
        NativeCustom,
    },
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
</style>