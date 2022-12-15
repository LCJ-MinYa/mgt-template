<template>
    <base-container>
        <base-main>
            <base-form :model="form" :rules="rules" :formConfig="formConfig" :span="24" />
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
                {
                    span: 12,
                    groupConfig: [
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
                            span: 16,
                            formItemConfig: {},
                            componentConfig: {},
                        },
                    ],
                },
                {
                    span: 12,
                    groupConfig: [
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
                            span: 16,
                            formItemConfig: {},
                            componentConfig: {},
                        },
                    ],
                },
            ],
            rules: {
                title: [{ required: true, message: '请输入title' }],
            },
        };
    },
    methods: {},
};
</script>

<style scoped>
</style>

