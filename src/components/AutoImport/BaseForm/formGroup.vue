<template>
    <el-card class="mb-20">
        <el-row type="flex" justify="start" v-for="item in formGroupConfig" :key="item.prop">
            <el-col :span="item.span || span">
                <el-form-item
                    :label="item.label"
                    :prop="item.prop"
                    v-bind="item.formItemConfig ? {...item.formItemConfig} : {}"
                >
                    <form-item-component type="form" :item="item" :form="form" />
                </el-form-item>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
import FormItemComponent from '@/components/AutoImport/components/formItem.vue';

export default {
    name: 'BaseFormGroup',
    components: {
        FormItemComponent,
    },
    props: {
        formGroupConfig: {
            type: Array,
            default: () => {
                return [];
            },
        },
        form: {
            type: Object,
            default: () => {
                return {};
            },
        },
        span: {
            type: Number,
            default: 8,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>