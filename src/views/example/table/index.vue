<template>
    <base-container>
        <base-table
            ref="table"
            search
            :searchFirstLine="3"
            showSerialNumber
            :request-api="getList"
            :columns="columns"
            :data="dataSource"
        >
            <el-tag
                slot="status"
                slot-scope="{ row }"
                :type="row.status | statusFilter"
            >{{ row.status }}</el-tag>
            <template slot="display_time" slot-scope="{ text }">
                <i class="el-icon-time pr-5" />
                <span>{{ text }}</span>
            </template>
        </base-table>
    </base-container>
</template>

<script>
import { getList } from '@/api/table';

export default {
    filters: {
        statusFilter(status) {
            const statusMap = {
                published: 'success',
                draft: 'gray',
                deleted: 'danger',
            };
            return statusMap[status];
        },
    },
    data() {
        return {
            dataSource: [],
            columns: [
                {
                    label: '标题',
                    prop: 'title',
                    width: 500,
                    searchType: 'input',
                    searchOrder: 1,
                    searchConfig: {
                        labelWidth: '80px',
                    },
                },
                {
                    label: '作者',
                    prop: 'author',
                    searchType: 'select',
                    searchOrder: 2,
                    searchConfig: {
                        labelWidth: '100px',
                        initialValue: -1,
                        label: '测试下拉选择',
                        prop: 'testSelect',
                        selectLabel: 'cardTypeName',
                        selectValue: 'cardType',
                        selectEnum: [
                            {
                                cardType: -1,
                                cardTypeName: '全部',
                            },
                            {
                                cardType: 1,
                                cardTypeName: '下拉选择1',
                            },
                            {
                                cardType: 2,
                                cardTypeName: '下拉选择2',
                            },
                            {
                                cardType: 3,
                                cardTypeName: '下拉选择3',
                            },
                        ],
                    },
                },
                {
                    label: '查看数量',
                    prop: 'pageviews',
                },
                {
                    label: '状态',
                    prop: 'status',
                    slotName: 'status',
                },
                {
                    label: '发布时间',
                    prop: 'display_time',
                    slotName: 'display_time',
                    searchType: 'datePicker',
                    searchOrder: 3,
                    searchConfig: {
                        initialSelectValue: 'all',
                        selectEnum: [
                            {
                                label: '全部',
                                value: 'all',
                            },
                            {
                                label: '今天',
                                value: '0,0',
                            },
                            {
                                label: '昨天',
                                value: '-1,-1',
                            },
                            {
                                label: '过去7天内',
                                value: '-7,-1',
                            },
                            {
                                label: '过去30天内',
                                value: '-30,-1',
                            },
                            {
                                label: '本月',
                                value: 'month',
                            },
                        ],
                        dateConfig: ['customDateStart', 'customDateEnd'],
                    },
                },
                {
                    label: '审核时间',
                    prop: 'audit_time',
                    slotName: 'display_time',
                    searchType: 'datePicker',
                    searchOrder: 4,
                    searchConfig: {
                        initialSelectValue: 'all',
                        selectEnum: [
                            {
                                label: '全部',
                                value: 'all',
                            },
                            {
                                label: '今天',
                                value: '0,0',
                            },
                            {
                                label: '昨天',
                                value: '-1,-1',
                            },
                        ],
                        dateConfig: ['auditDateStart', 'auditDateEnd'],
                    },
                },
            ],
        };
    },
    methods: {
        getList,
    },
};
</script>
