import { Table } from 'element-ui';
import dayjs from 'dayjs';

const DATE_ALIAS = '=>initDate';

const props = {
    ...Table.props,
    /** cardStyle是否显示 */
    showCardStyle: {
        type: Boolean,
        default: true,
    },
    /** table是否需要分页 */
    pagination: {
        type: Boolean,
        default: true,
    },
    /** table分页的配置项 */
    tablePageParams: {
        type: Object,
        default: () => {
            return {
                currentPage: 1,
                pageSize: 10,
                total: 0,
                pageSizes: [10, 20, 30, 50],
            };
        },
    },
    /** table列的配置项 slotName为自定义slot参数名称 */
    columns: {
        type: Array,
        default: () => {
            return [];
        },
    },
    /** table搜索是否显示 */
    search: {
        type: Boolean,
        default: false,
    },
    /** table搜索第一行显示几个，默认只显示一个 */
    searchFirstLine: {
        type: Number,
        default: 1,
    },
    /** table搜索的配置 */
    searchConfig: {
        type: Object,
        default: () => {
            return {};
        },
    },
    /** table请求的api地址 */
    requestApi: {
        type: Function,
    },
    /** 首次是否加载table */
    firstExecute: {
        type: Boolean,
        default: true,
    },
    /** table是否超出显示省略号 */
    showOverflowTooltip: {
        type: Boolean,
        default: true,
    },
    /** table是否显示序号 */
    showSerialNumber: {
        type: Boolean,
        default: false,
    },
    /** table序号是否固定在左侧 */
    serialNumberFixed: {
        type: Boolean,
        default: false,
    },
    /** table是否内容默认居中 */
    alignCenter: {
        type: Boolean,
        default: true,
    },
    /** table是否默认无内容显示- */
    formatterValue: {
        type: Boolean,
        default: true,
    },
    /** table扩展请求参数 */
    extraRequestParams: {
        type: Object,
        default: () => {
            return {};
        },
    },
    /** 通用跳转其他页面按钮 */
    goOtherPageConfig: {
        type: Object,
        default: () => {
            return {};
        },
    },
};

/** 补全searchConfig未传的其他初始参数 */
const computedSearchConfigParams = (searchConfig) => {
    return Object.assign(
        {
            /** 搜索表单默认label宽度 */
            labelWidth: '90px',
            /** 搜索按钮是否可见 */
            searchVisible: true,
            /** 搜索按钮的文本 */
            searchText: '搜索',
            /** 重置按钮是否可见 */
            resetVisible: true,
            /** 重置按钮的文本 */
            resetText: '重置',
        },
        searchConfig
    );
};

/** 补全goOtherPageConfig未传的其他初始参数 */
const computedGoOtherPageConfigParams = (goOtherPageConfig) => {
    return Object.assign(
        {
            /** 去其他页面按钮的文本 */
            text: '详情',
            /** 去其他页面参数id的属性名称 */
            keyName: 'id',
            /** 去其他页面参数其他的属性名称 */
            extraKeyName: [],
            /** 去其他页面路由地址 */
            routeAddress: '',
            /** 去其他页面额外的查询参数 */
            extraQueryParams: {},
        },
        goOtherPageConfig
    );
};

/** 获取搜索表单属性最终值 */
const getSearchFormItemProperty = (item, property = 'prop') => {
    return item.searchConfig && item.searchConfig[property] ? item.searchConfig[property] : item[property] ? item[property] : null;
};

/** 获取表单属性最终值 */
const getFormItemProperty = (item, property = 'prop') => {
    return item.searchConfig && item.searchConfig[property] ? item.searchConfig[property] : item[property] ? item[property] : null;
};

const switchDate = (value) => {
    let dateValue = [];

    let valueArr = value.split(',');

    /** 选择日期模式为数组时 */
    if (valueArr.length === 2) {
        dateValue = [dayjs().add(Number(valueArr[0]), 'day'), dayjs().add(Number(valueArr[1]), 'day')];
    }
    /** 选择日期模式为字符串时
     * 全部：'all'
     * 本月：'month'
     */
    switch (value) {
        case 'all':
            dateValue = [];
            break;
        case 'week':
            dateValue = [dayjs().startOf(value).add(1, 'day'), dayjs().endOf(value).add(1, 'day')];
            break;
        case 'day':
        case 'month':
        case 'year':
            dateValue = [dayjs().startOf(value), dayjs().endOf(value)];
            break;
    }
    if (dateValue.length) {
        dateValue = [dateValue[0].format('YYYY-MM-DD'), dateValue[1].format('YYYY-MM-DD')];
    }
    return dateValue;
};

const defaultDatePickerWithSelectEnum = [
    {
        label: '全部',
        value: 'all',
    },
    {
        label: '今天',
        value: 'day',
    },
    {
        label: '本周',
        value: 'week',
    },
    {
        label: '本月',
        value: 'month',
    },
];

export {
    DATE_ALIAS,
    props,
    computedSearchConfigParams,
    computedGoOtherPageConfigParams,
    getSearchFormItemProperty,
    getFormItemProperty,
    switchDate,
    defaultDatePickerWithSelectEnum,
};
