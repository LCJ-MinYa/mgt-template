<template>
    <base-main class="base-table">
        <!-- search 搜索组件 -->
        <el-card shadow="never" v-if="search" class="mb-20">
            <el-form
                inline
                :label-width="searchConfigParams.labelWidth"
                ref="searchForm"
                :model="searchForm"
            >
                <el-row type="flex" justify="space-between">
                    <el-col :span="16">
                        <el-form-item
                            v-for="item in searchColumns.filter((columnItem, index) => index === 0)"
                            :key="item.prop"
                            :label="getFormItemProperty(item, 'label')"
                            :prop="getFormItemProperty(item)"
                            :label-width="getFormItemProperty(item, 'labelWidth') || searchConfigParams.labelWidth"
                        >
                            <search-form-item :item="item" :searchForm="searchForm" isFirstItem />
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" class="search-btn-box">
                        <el-button
                            type="primary"
                            round
                            @click="onSearch"
                            v-if="searchConfigParams.searchVisible"
                        >{{ searchConfigParams.searchText }}</el-button>
                        <el-button
                            round
                            v-if="searchConfigParams.resetVisible"
                            @click="onReset"
                        >{{ searchConfigParams.resetText }}</el-button>
                    </el-col>
                </el-row>
                <el-form-item
                    v-for="item in searchColumns.filter((columnItem, index) => index > 0)"
                    :key="item.prop"
                    :label="getFormItemProperty(item, 'label')"
                    :prop="getFormItemProperty(item)"
                    :label-width="getFormItemProperty(item, 'labelWidth') || searchConfigParams.labelWidth"
                >
                    <search-form-item :item="item" :searchForm="searchForm" />
                </el-form-item>
            </el-form>
        </el-card>

        <!-- extraComponent 自定义slot扩展组件 -->
        <el-card shadow="never" v-if="$slots.extraComponent" class="mb-20">
            <slot
                name="extraComponent"
                v-bind="{
                    generateParams: generateParams(),
                    onRefresh: onRefresh
                }"
            />
        </el-card>

        <!-- table 表格组件 -->
        <el-card
            shadow="never"
            :body-style="!showCardStyle && { padding: 0 }"
            :style="!showCardStyle && { border: 0 }"
        >
            <el-table
                ref="table"
                v-loading="tableLoading"
                border
                v-bind="$props"
                v-on="$listeners"
                :data="tableData"
                header-cell-class-name="table-header-cell"
                class="mb-20"
            >
                <template v-for="(item, index) in tableColumns">
                    <el-table-column v-if="item.slotName" :key="index" v-bind="{...item}">
                        <template slot-scope="scope">
                            <span
                                v-if="item.slotName === 'price'"
                            >{{ scope.row[item.prop] | formatPrice(scope.row[item.prop]) }}</span>
                            <a
                                v-else-if="item.slotName === 'goOtherPage'"
                                @click="toRouter(scope.row)"
                            >{{ goOtherPageConfigParams.text }}</a>
                            <slot
                                v-else
                                :name="item.slotName"
                                v-bind="{...scope, text: scope.row[item.prop], ...item.slotProps}"
                            />
                        </template>
                    </el-table-column>
                    <el-table-column v-else :key="index" v-bind="{...item}" />
                </template>
                <template v-if="!$props.emptyText" slot="empty">
                    <div class="table-empty-box">
                        <i class="el-icon-files" />
                        <span>暂无数据</span>
                    </div>
                </template>
            </el-table>

            <el-row type="flex" justify="end">
                <el-pagination
                    v-if="pagination && (tablePageParams.total || tableDataSource.length)"
                    background
                    layout="total, prev, pager, next, sizes"
                    @size-change="tablePageSizeChange"
                    @current-change="tablePageCurrentChange"
                    v-bind="{...tablePageParams}"
                />
            </el-row>
        </el-card>
    </base-main>
</template>

<script>
/* eslint-disable */
import SearchFormItem from './components/searchFormItem.vue';
import { sortBy, cloneDeep, isEmpty, pickBy } from 'lodash';
import { props, computedSearchConfigParams, computedGoOtherPageConfigParams, getFormItemProperty } from './index.js';
export default {
    name: 'BaseTable',
    components: {
        SearchFormItem,
    },
    props,
    data() {
        return {
            /** 搜索form表单 */
            searchForm: {},
            /** table加载状态 */
            tableLoading: false,
            /** table列表数据源 */
            tableDataSource: this.data,
            /** table列的配置项 */
            tableColumns: this.columns,
            /** 获取表单属性最终值 */
            getFormItemProperty,
        };
    },
    computed: {
        /** 补全searchConfig未传的其他初始参数 */
        searchConfigParams() {
            return computedSearchConfigParams(this.searchConfig);
        },
        /** 补全goOtherPageConfig未传的其他初始参数 */
        goOtherPageConfigParams() {
            return computedGoOtherPageConfigParams(this.goOtherPageConfig);
        },
        /** 获取查询表单显示字段 */
        searchColumns() {
            return sortBy(
                this.tableColumns.filter((item) => {
                    return item.searchType;
                }),
                (item) => {
                    return item.searchOrder;
                }
            );
        },
        /** table当前需要显示的data */
        tableData() {
            const {
                tableDataSource,
                tablePageParams: { currentPage, pageSize },
            } = this;
            /**
             * 1. 如果不分页返回全部数据
             * 2. 如果分页，并且需要请求数据，返回全部数据
             */
            if (!this.pagination || (this.pagination && this.requestApi)) {
                return tableDataSource;
            }
            return tableDataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        },
    },
    watch: {
        tableDataSource: {
            immediate: true,
            handler() {
                /** 如果requestApi不存在，默认父组件传递dataSource计算total */
                if (!this.requestApi) {
                    this.tablePageParams.total = this.tableDataSource.length;
                }
            },
        },
        columns: {
            immediate: true,
            handler(val) {
                this.tableColumns = this.addSerialNumberToColumns(val);
                this.tableColumns = this.addConfigToColumns(this.tableColumns);
                this.initialFormValue();
            },
        },
        data: {
            immediate: true,
            handler(val) {
                this.tableDataSource = this.addSerialNumberToDataSource(val);
            },
        },
    },
    created() {
        if (this.firstExecute) {
            this.requestData();
        }
    },
    methods: {
        defaultFormatterValue(_row, _column, cellValue) {
            return cellValue || cellValue === 0 ? cellValue : '-';
        },
        addConfigToColumns(dataArr) {
            if (this.showOverflowTooltip || this.alignCenter || this.formatterValue) {
                dataArr.forEach((item) => {
                    if (this.showOverflowTooltip) {
                        item.showOverflowTooltip = typeof item.showOverflowTooltip === 'boolean' ? item.showOverflowTooltip : true;
                    }
                    if (this.alignCenter) {
                        item.align = item.align || 'center';
                    }
                    if (this.formatterValue) {
                        item.formatter = item.formatter || this.defaultFormatterValue;
                    }
                });
            }
            return dataArr;
        },
        addSerialNumberToColumns(dataArr) {
            if (this.showSerialNumber) {
                const newDataArr = [
                    {
                        label: '序号',
                        prop: 'serialNumber',
                        align: 'center',
                        width: 80,
                        fixed: this.serialNumberFixed,
                    },
                    ...dataArr,
                ];
                return newDataArr;
            }
            return dataArr;
        },
        addSerialNumberToDataSource(dataArr) {
            if (this.showSerialNumber) {
                const newDataArr =
                    dataArr && dataArr.length
                        ? dataArr.map((item, index) => ({
                              ...item,
                              serialNumber: (this.tablePageParams.currentPage - 1) * this.tablePageParams.pageSize + index + 1,
                          }))
                        : [];
                return newDataArr;
            }
            return dataArr;
        },
        /** 初始化表单默认值 */
        initialFormValue() {
            const initialValueArr = this.tableColumns.filter((item) => {
                return (
                    item.searchType &&
                    item.searchConfig &&
                    (item.searchConfig.initialValue || item.searchConfig.initialValue == 0 || item.searchConfig.initialSelectValue)
                );
            });

            if (initialValueArr.length) {
                initialValueArr.forEach((item) => {
                    if (item.searchConfig.initialValue || item.searchConfig.initialValue == 0) {
                        this.searchForm[this.getFormItemProperty(item)] = item.searchConfig.initialValue;
                    }
                    if (item.searchConfig.initialSelectValue) {
                        this.searchForm[`${getFormItemProperty(item)}Date`] = item.searchConfig.initialSelectValue;
                    }
                });
                this.searchForm = cloneDeep(this.searchForm);
            }
        },
        initPageParams(initCurrentPage = false) {
            if (initCurrentPage) {
                this.tablePageParams.currentPage = 1;
            }
            this.tablePageParams.total = 0;
        },
        /** 表格每页条数改变 */
        tablePageSizeChange(size) {
            this.tablePageParams.pageSize = size;
            this.requestData();
        },
        /** 表格当前页改变 */
        tablePageCurrentChange(currentPage) {
            this.tablePageParams.currentPage = currentPage;
            this.requestData();
        },
        onReset() {
            this.$refs.searchForm.resetFields();
            this.initPageParams(true);
            this.requestData();

            if (this.$listeners.parentEvent) {
                this.$emit('parentEvent', 'reset');
            }
        },
        onRefresh(params = {}) {
            params = Object.assign(
                {
                    /** 是否重新布局table */
                    doLayout: false,
                    /** 是否初始化请求页码 */
                    initCurrentPage: false,
                },
                params
            );

            this.initPageParams(params.initCurrentPage);
            this.requestData(params.initCurrentPage);

            if (params.doLayout) {
                this.$nextTick(() => this.$refs.table.doLayout());
            }
        },
        onSearch() {
            console.log(this.searchForm);
            console.log(this.generateParams());
            this.initPageParams(true);
            this.requestData();

            if (this.$listeners.parentEvent) {
                this.$emit('parentEvent', 'search');
            }
        },
        generatePickerArr(searchData, searchType, customStartName, customEndName) {
            const datePickerArr = this.searchColumns.filter((item) => item.searchType === searchType);
            if (!isEmpty(searchData) && datePickerArr.length) {
                datePickerArr.map((item) => {
                    const itemKey = this.getFormItemProperty(item);
                    for (const key in searchData) {
                        if (!searchData[key]) {
                            continue;
                        }
                        if (key === itemKey) {
                            if (item.searchConfig && item.searchConfig.dateConfig) {
                                searchData[item.searchConfig.dateConfig[0]] = searchData[key][0];
                                searchData[item.searchConfig.dateConfig[1]] = searchData[key][1];
                            } else {
                                searchData[customStartName] = searchData[key][0];
                                searchData[customEndName] = searchData[key][1];
                            }
                        }
                    }
                });
            }
        },
        generateSearchData() {
            this.generatePickerArr(this.searchForm, 'datePicker', 'startDate', 'endDate');
            this.generatePickerArr(this.searchForm, 'monthPicker', 'startMonth', 'endMonth');
            return this.searchForm;
        },
        generateParams() {
            const { currentPage, pageSize } = this.tablePageParams;
            const params = {
                pageSize,
                currentPage,
                ...this.generateSearchData(),
                ...this.extraRequestParams,
            };
            return pickBy(params);
        },
        requestData() {
            /** 如果requestApi不存在，默认父组件传递dataSource本地数据翻页 */
            if (!this.requestApi) {
                return;
            }
            this.tableLoading = true;
            this.requestApi(this.generateParams())
                .then((result) => {
                    this.tableLoading = false;

                    const { list = [], total = 0 } = result.data || {};
                    const dealList = this.addSerialNumberToDataSource(list);
                    this.tableDataSource = dealList;
                    this.tablePageParams.total = total;
                    if (this.$listeners.parentEvent) {
                        this.$emit('parentEvent', 'requestData', result.data);
                    }
                })
                .catch(() => (this.tableLoading = false));
        },
        toRouter(record) {
            const { keyName, extraKeyName, routeAddress, extraQueryParams } = this.goOtherPageConfigParams;
            const query = {
                [keyName]: record[keyName],
                ...extraQueryParams,
            };
            if (extraKeyName.length) {
                extraKeyName.forEach((item) => {
                    query[item] = record[item];
                });
            }
            this.$router.push({
                path: routeAddress,
                query,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/components/AutoImport/BaseTable/index.scss';
</style>