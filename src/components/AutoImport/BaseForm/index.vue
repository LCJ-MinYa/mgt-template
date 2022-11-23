<template>
    <el-row>
        <el-col :span="span">
            <el-form ref="form" label-width="90px" v-bind="$props" v-on="$listeners">
                <el-form-item
                    v-for="item in formConfig"
                    :key="item.prop"
                    :label="item.label"
                    :prop="item.prop"
                    v-bind="item.formItemConfig ? {...item.formItemConfig} : {}"
                >
                    <form-item-component type="form" :item="item" :form="model" />
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import FormItemComponent from '@/components/AutoImport/components/formItem.vue';
import { props, getValidateFormItemProperty as getFormItemProperty } from './index.js';

export default {
    name: 'BaseForm',
    components: {
        FormItemComponent,
    },
    props,
    data() {
        console.log(this);
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