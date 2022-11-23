<style lang="scss" scoped>
</style>

<template>
    <!-- input 输入框 -->
    <el-input
        v-if="getComponentType === 'input'"
        v-model="form[getFormItemProperty(item)]"
        autocomplete="off"
        :placeholder="item.componentConfig && item.componentConfig.placeholder || '请输入'"
        v-bind="doBindComponentConfig(item)"
    />

    <!-- select 选择框 -->
    <el-select
        v-else-if="getComponentType === 'select'"
        v-model="form[getFormItemProperty(item)]"
        v-bind="doBindComponentConfig(item)"
        :placeholder="item.componentConfig && item.componentConfig.placeholder || '请选择'"
    >
        <el-option
            v-for="selectItem in item.searchConfig && item.searchConfig.selectEnum || []"
            :key="selectItem[getFormItemProperty(item, 'selectValue') || 'value']"
            :label="selectItem[getFormItemProperty(item, 'selectLabel') || 'label']"
            :value="selectItem[getFormItemProperty(item, 'selectValue') || 'value']"
        />
    </el-select>

    <!-- datePicker 时间选择框 -->
    <el-form-item v-else-if="getComponentType === 'datePicker'" :prop="getFormItemProperty(item)">
        <el-date-picker
            v-model="form[getFormItemProperty(item)]"
            type="daterange"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-bind="doBindComponentConfig(item)"
        />
    </el-form-item>

    <!-- datePickerWithSelect 时间选择框带下拉选择项, 目前BaseTable独享 -->
    <span v-else-if="getComponentType === 'datePickerWithSelect'">
        <el-form-item style="margin-right: 0;" :prop="`${getFormItemProperty(item)}${DATE_ALIAS}`">
            <el-select
                v-model="form[`${getFormItemProperty(item)}${DATE_ALIAS}`]"
                :ref="`${getFormItemProperty(item)}${DATE_ALIAS}`"
                class="date-picker-select"
                style="width: 100px;"
                @change="(value) => changeDatePickerValue(value, item)"
                @visible-change="(value) => datePickerSelectBlur(value, item)"
            >
                <el-option
                    v-for="(selectItem, index) in item.searchConfig && item.searchConfig.selectEnum || defaultDatePickerWithSelectEnum"
                    :key="index"
                    :label="selectItem[getFormItemProperty(item, 'selectLabel') || 'label']"
                    :value="selectItem[getFormItemProperty(item, 'selectValue') || 'value']"
                />
            </el-select>
        </el-form-item>
        <el-form-item :prop="getFormItemProperty(item)">
            <el-date-picker
                class="with-select"
                v-model="form[getFormItemProperty(item)]"
                type="daterange"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                v-bind="doBindComponentConfig(item)"
            />
        </el-form-item>
    </span>
</template>

<script>
import { DATE_ALIAS, getSearchFormItemProperty, switchDate, defaultDatePickerWithSelectEnum } from '@/components/AutoImport/BaseTable/index.js';

import { getValidateFormItemProperty } from '@/components/AutoImport/BaseForm/index.js';

export default {
    name: 'FormItem',
    props: {
        /**
         * table 表格搜索上的searchForm
         * form 单独表单上的form
         */
        type: {
            type: String,
            default: 'form',
        },
        isFirstItem: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            required: true,
        },
        form: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            DATE_ALIAS,
            defaultDatePickerWithSelectEnum,
        };
    },
    computed: {
        getFormItemProperty() {
            switch (this.type) {
                case 'table':
                    return getSearchFormItemProperty;
                case 'form':
                    return getValidateFormItemProperty;
                default:
                    return getValidateFormItemProperty;
            }
        },
        getComponentType() {
            switch (this.type) {
                case 'table':
                    return this.item.searchType;
                case 'form':
                    return this.item.type;
                default:
                    return this.item.type;
            }
        },
    },
    methods: {
        /** 设置组件属性 */
        doBindComponentConfig(item, defaultConfig = {}) {
            let config = item.componentConfig;
            /** 默认第一个组件宽度设置400px */
            if (this.isFirstItem) {
                defaultConfig.style = {
                    width: '400px',
                };
            }
            return config
                ? {
                      ...defaultConfig,
                      ...config,
                  }
                : defaultConfig;
        },
        changeDatePickerValue(value, item) {
            this.form[this.getFormItemProperty(item)] = switchDate(value);
        },
        datePickerSelectBlur(value, item) {
            !value && this.$refs[`${this.getFormItemProperty(item)}${DATE_ALIAS}`].blur();
        },
    },
};
</script>
