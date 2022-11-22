<template>
    <base-container>
        <base-main>
            <base-form :model="form" :formConfig="formConfig" />
        </base-main>
        <base-footer showGoBack />
    </base-container>
</template>

<script>
export default {
    data() {
        return {
            form: {},
            formConfig: [
                [
                    {
                        label: '标题',
                        prop: 'title',
                        type: 'input',
                        componentConfig: {},
                    },
                ],
            ],
        };
    },
    methods: {},
};
</script>

<style scoped>
</style>

