<style lang="scss" scoped>
</style>

<template>
    <!-- input 输入框 -->
    <el-input
        v-if="item.searchType === 'input'"
        v-model="searchForm[getFormItemProperty(item)]"
        autocomplete="off"
        style="width: 200px;"
        placeholder="请输入"
        v-bind="doBindComponentConfig(item.searchConfig.componentConfig)"
    />

    <!-- select 选择框 -->
    <el-select
        v-else-if="item.searchType === 'select'"
        v-model="searchForm[getFormItemProperty(item)]"
        clearable
        placeholder="请选择"
        v-bind="doBindComponentConfig(item.searchConfig.componentConfig)"
    >
        <el-option
            v-for="selectItem in item.searchConfig.selectEnum || []"
            :key="selectItem[getFormItemProperty(item, 'selectValue') || 'value']"
            :label="selectItem[getFormItemProperty(item, 'selectLabel') || 'label']"
            :value="selectItem[getFormItemProperty(item, 'selectValue') || 'value']"
        />
    </el-select>

    <!-- datePicker 时间选择框 -->
    <span v-else-if="item.searchType === 'datePicker'">
        <el-form-item style="margin-right: 0;" :prop="`${getFormItemProperty(item)}${DATE_ALIAS}`">
            <el-select
                v-model="searchForm[`${getFormItemProperty(item)}${DATE_ALIAS}`]"
                :ref="`${getFormItemProperty(item)}${DATE_ALIAS}`"
                class="date-picker-select"
                style="width: 100px;"
                @change="(value) => changeDatePickerValue(value, item)"
                @visible-change="(value) => datePickerSelectBlur(value, item)"
            >
                <el-option
                    v-for="(selectItem, index) in item.searchConfig.selectEnum || []"
                    :key="index"
                    :label="selectItem[getFormItemProperty(item, 'selectLabel') || 'label']"
                    :value="selectItem[getFormItemProperty(item, 'selectValue') || 'value']"
                />
            </el-select>
        </el-form-item>
        <el-form-item :prop="getFormItemProperty(item)">
            <el-date-picker
                v-model="searchForm[getFormItemProperty(item)]"
                type="daterange"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                v-bind="doBindComponentConfig(item.searchConfig.componentConfig)"
            />
        </el-form-item>
    </span>
</template>

<script>
import { DATE_ALIAS, getFormItemProperty, switchDate } from '../index.js';

export default {
    name: 'SearchFormItem',
    props: {
        isFirstItem: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            required: true,
        },
        searchForm: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            getFormItemProperty,
            DATE_ALIAS,
        };
    },
    methods: {
        /** 设置组件属性 */
        doBindComponentConfig(config, defaultConfig = {}) {
            /** 默认第一个组件宽度设置400px,其他200px */
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
            this.searchForm[getFormItemProperty(item)] = switchDate(value);
        },
        datePickerSelectBlur(value, item) {
            !value && this.$refs[`${getFormItemProperty(item)}${DATE_ALIAS}`].blur();
        },
    },
};
</script>
