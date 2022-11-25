<template>
    <div>
        <el-form-item :prop="`${propName}.options`" style="margin-bottom: 20px;">
            <el-select v-model="value.options" placeholder="请选择" clearable>
                <el-option label="options1" value="options1"></el-option>
                <el-option label="options2" value="options2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item :prop="`${propName}.range`">
            <el-date-picker
                v-model="value.range"
                type="daterange"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            />
        </el-form-item>
    </div>
</template>

<script>
export default {
    props: {
        value: Object,
        propName: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>