<template>
    <base-container>
        <base-main>
            <base-form :model="form" :formConfig="formConfig" :span="24" />
        </base-main>
        <base-footer showGoBack />
    </base-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: '',
            },
            formConfig: [
                [
                    {
                        label: '标题',
                        prop: 'title',
                        type: 'input',
                        span: 7,
                        formItemConfig: {},
                        componentConfig: {},
                    },
                    {
                        label: '标题1',
                        prop: 'title1',
                        type: 'input',
                        span: 4,
                        formItemConfig: {},
                        componentConfig: {},
                    },
                ],
                [
                    {
                        label: '标题2',
                        prop: 'title2',
                        type: 'input',
                        span: 7,
                        formItemConfig: {},
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

