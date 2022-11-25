<!-- element ui中使用 -->
<template>
    <el-card header="使用element组件自定义vmodel对象，并集成element-ui-form校验">
        <el-form ref="form" :model="form" :rules="rules" label-width="90px">
            <el-form-item label="活动名称" prop="name">
                <el-input placeholder="请输入活动名称" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="form.region" placeholder="请选择活动区域" clearable>
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <!--此处的el-form-item只是为了显示label才添加的-->
            <el-form-item label="活动时间">
                <!-- 需要传递prop对象名称，以便子组件内绑定校验规则时使用 -->
                <custom v-model="form.date" propName="date"></custom>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="submit">提交</el-button>
    </el-card>
</template>

<script>
import Custom from './custom.vue';

export default {
    components: {
        Custom,
    },
    data() {
        return {
            form: {
                name: '',
                region: '',
                date: {
                    options: 'options2',
                    range: [],
                },
            },
            /** 自定义组件vmodel是对象时，rules应采用下面写法 */
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                'date.options': [{ required: true, message: '请选择日期1' }],
                'date.range': [{ required: true, message: '请选择日期2' }],
            },
        };
    },

    mounted() {},

    methods: {
        submit() {
            console.log(this.form);
            this.$refs.form.validate((valid) => {
                console.log(valid);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>