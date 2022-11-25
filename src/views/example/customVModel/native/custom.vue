<template>
    <div>
        <el-form-item :prop="`${propName}.options`" style="margin-bottom: 20px;">
            <select :value="value.options" @input="update('options', $event.target.value)">
                <option value="options1">options1</option>
                <option value="options2">options2</option>
            </select>
        </el-form-item>
        <el-form-item :prop="`${propName}.range`">
            <input
                placeholder="请输入"
                type="text"
                :value="value.range"
                @input="update('range', $event.target.value)"
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
    methods: {
        update(key, value) {
            console.log(key, value);
            this.$emit('input', { ...this.value, [key]: value });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>