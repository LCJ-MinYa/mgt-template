<template>
    <el-col :span="formGroupConfig.span || span">
        <el-card class="mb-20">
            <el-form-item
                v-for="item in formGroupConfig.groupConfig"
                :key="item.prop"
                :label="item.label"
                :prop="item.prop"
                v-bind="item.formItemConfig ? {...item.formItemConfig} : {}"
            >
                <el-row type="flex" justify="start">
                    <el-col :span="item.span || span">
                        <form-item-component type="form" :item="item" :form="model" />
                    </el-col>
                </el-row>
            </el-form-item>
        </el-card>
    </el-col>
</template>

<script>
import FormItemComponent from '@/components/AutoImport/components/formItem.vue';

export default {
    name: 'BaseFormGroup',
    components: {
        FormItemComponent,
    },
    inject: ['span', 'model'],
    props: {
        formGroupConfig: {
            type: Object,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>