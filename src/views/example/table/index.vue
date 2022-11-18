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
            <el-row slot="action" slot-scope="{ row }">
                <el-col>
                    <el-button type="text">编辑</el-button>
                </el-col>
                <el-col>
                    <el-button type="text" class="danger" @click="handleDelete(row)">删除</el-button>
                </el-col>
            </el-row>
        </base-table>
    </base-container>
</template>

<script>
import { getList, deleteTableItem } from '@/api/table';
import { getSelect1Enum } from '@/api/enum';

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
                        label: '静态select',
                        prop: 'localSelect',
                        selectLabel: 'cardTypeName',
                        selectValue: 'cardType',
                        selectEnum: [
                            {
                                cardType: -1,
                                cardTypeName: '全部',
                            },
                            {
                                cardType: 1,
                                cardTypeName: '静态select1',
                            },
                            {
                                cardType: 2,
                                cardTypeName: '静态select2',
                            },
                            {
                                cardType: 3,
                                cardTypeName: '静态select3',
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
                    searchType: 'select',
                    searchOrder: 2,
                    searchConfig: {
                        labelWidth: '100px',
                        label: '远程select',
                        prop: 'remoteSelect',
                        selectLabel: 'select1Lable',
                        selectValue: 'select1Value',
                        selectEnum: [],
                        /** 带参数与不带参数 */
                        // remoteMethod: this.getSelect1Enum,
                        remoteMethod: () => this.getSelect1Enum({ test: 1 }),
                    },
                },
                {
                    label: '发布时间',
                    prop: 'display_time',
                    slotName: 'display_time',
                    searchType: 'datePicker',
                    searchOrder: 3,
                    searchConfig: {
                        initialValue: ['2022-11-01', '2022-11-30'],
                        initialSelectValue: 'month',
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
                        dateConfig: ['auditDateStart', 'auditDateEnd'],
                    },
                },
                {
                    label: '操作',
                    fixed: 'right',
                    width: 160,
                    slotName: 'action',
                },
            ],
        };
    },
    methods: {
        getList,
        getSelect1Enum,
        handleDelete(row) {
            /** 删除成功示例 */
            this.$refs.table.showMsgbox({
                remoteMethod: () => deleteTableItem({ id: row.id }),
                label: '删除',
            });
            /** 删除失败示例 */
            // this.$refs.table.showMsgbox({
            //     remoteMethod: () => deleteTableItem(),
            //     label: '删除',
            // });
        },
    },
};
</script>
