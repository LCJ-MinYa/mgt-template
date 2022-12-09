<template>
    <base-container>
        <base-main>
            <el-form ref="form" :model="form" :rules="rules" label-width="300px">
                <el-card v-for="(item, index) in content" :key="index" class="mb-20">
                    <el-form-item slot="header" :label="item.label" :prop="item.prop">
                        <el-input placeholder="请输入" v-model="form[item.prop]"></el-input>
                    </el-form-item>
                    <el-descriptions
                        title="参考校验值"
                        direction="vertical"
                        :column="4"
                        border
                        class="mb-20"
                        v-if="item.regDemoList.length"
                    >
                        <el-descriptions-item
                            v-for="(demoItem, demoIndex) in item.regDemoList"
                            :key="demoIndex"
                            :label="`校验值：${demoItem}`"
                        >校验结果：{{ demoItem | filterReg(item.prop) }}</el-descriptions-item>
                    </el-descriptions>
                    <el-descriptions
                        v-if="item.expandList.length"
                        title="正则表达式拓展"
                        direction="vertical"
                        :column="3"
                        border
                    >
                        <el-descriptions-item
                            v-for="(expandItem, expandIndex) in item.expandList"
                            :key="expandIndex"
                            :label="expandItem.label"
                        >{{ expandItem.value }}</el-descriptions-item>
                    </el-descriptions>
                </el-card>
            </el-form>
        </base-main>
        <base-footer>
            <el-button type="primary" @click="submit">提交</el-button>
        </base-footer>
    </base-container>
</template>

<script>
const testReg = /^(100(\.0{1,2})?|[1-9]\d(\.\d{1,2})?|\d(\.\d{1,2})?)$/;
const percentReg = /^(([1-9]?[0-9](\.[0-9]{1,2})?)|100)$/;

export default {
    data() {
        return {
            form: {
                test: '',
                percent: '',
            },
            rules: {
                test: [
                    { required: true, message: '请输入' },
                    { pattern: testReg, message: '请输入0-100' },
                ],
                percent: [
                    { required: true, message: '请输入' },
                    { pattern: percentReg, message: '请输入0-100的周转率辅助线' },
                ],
            },
            content: [
                {
                    prop: 'test',
                    label: '百分比(包含0-100所有数，最多两位小数)',
                    regDemoList: ['0', '测试', '0.', '01', '11.123', '100', '50.00', '100.00'],
                    expandList: [],
                },
                {
                    prop: 'percent',
                    label: '百分比(包含0-100所有数，最多两位小数)',
                    regDemoList: ['0', '测试', '0.', '01', '11.123', '100', '50.00', '100.00'],
                    expandList: [
                        {
                            label: '包含0-30所有数，最多两位小数',
                            value: '/^(([1-2]?[0-9](.[0-9]{1,2})?)|30)$/',
                        },
                        {
                            label: '包含0-50所有数，最多两位小数',
                            value: '/^(([1-4]?[0-9](.[0-9]{1,2})?)|50)$/',
                        },
                        {
                            label: '包含0-1000所有数，最多两位小数',
                            value: '/^(([1-2]?[0-9](.[0-9]{1,2})?)|30)$/',
                        },
                    ],
                },
            ],
        };
    },
    filters: {
        filterReg: (value, prop) => {
            switch (prop) {
                case 'test':
                    return testReg.test(value);
                case 'percent':
                    return percentReg.test(value);
                default:
                    break;
            }
        },
    },
    methods: {
        submit() {
            console.log(this.form);
            this.$refs.form.validate((valid) => {
                console.log(valid);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>