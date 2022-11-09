<template>
    <section class="base-container">
        <slot></slot>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.base-container {
    overflow: auto;
    height: calc(100vh - 50px);
    display: flex;
    flex: 1;
    flex-direction: column;
}

.hasTagsView {
    .base-container {
        height: calc(100vh - 84px);
    }
}
</style>