<template>
    <pre v-highlight="code">
        <code class="sql"></code>
    </pre>
</template>

<script>
const code = `/*
SELECT errorMsg, requestUrl, httpCode, \`code\`, count(*) FROM \`ods_miniprogram_error\` GROUP BY requestUrl, httpCode, \`code\`;
根据requestUrl, httpCode, code这三个字段进行分组查询，然后再统计count总数
*/
ErrorLog.queryStatistics = async (params: paramsWithDateRange) => {
// const { channelCode, startDate, endDate } = params;
console.log(params);
const arr = app.dateToTimestamp(params.startDate, params.endDate);

const db = new Sequelize("miniprogram_error_data", "root", "123456", {
    host: "10.10.23.23",
    port: "10000",
    dialect: "mysql",
});

const result = await db.query(
    \`
        SELECT errorMsg, timeFormat, requestUrl, httpCode, count(*)
        FROM ods_miniprogram_error
        WHERE time >= \${arr[0]} AND time <= \${arr[1]}
        GROUP BY errorKey;
    \`
);
console.log(result);

return result;
};`;

export default {
    data() {
        return {
            code,
        };
    },

    mounted() {},

    methods: {},
};
</script>