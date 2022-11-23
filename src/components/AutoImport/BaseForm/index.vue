<template>
    <el-row>
        <el-col :span="span">
            <el-form ref="form" label-width="90px" v-bind="$props" v-on="$listeners">
                <form-group
                    v-if="!isGroup"
                    :formGroupConfig="formConfig"
                    :form="model"
                    :span="span"
                />
                <template v-else>
                    <form-group
                        v-for="(item, index) in formConfig"
                        :key="index"
                        :formGroupConfig="item"
                        :form="model"
                        :span="span"
                    />
                </template>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import FormGroup from './formGroup.vue';
import { props, getValidateFormItemProperty as getFormItemProperty } from './index.js';

export default {
    name: 'BaseForm',
    components: {
        FormGroup,
    },
    props,
    data() {
        return {};
    },
    computed: {
        /** 如果表单配置项子项为数组，则为分组类型，其他则都为不分组类型 */
        isGroup() {
            return this.formConfig.every((item) => Array.isArray(item));
        },
    },
    methods: {
        getFormItemProperty,
    },
};
</script>

<style lang="scss" scoped>
</style>