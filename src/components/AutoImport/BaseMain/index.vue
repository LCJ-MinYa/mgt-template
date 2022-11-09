<template>
    <main class="base-main">
        <slot></slot>
    </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.base-main {
    display: block;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    overflow: auto;
}
</style>
