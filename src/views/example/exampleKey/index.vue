<template>
    <base-container>
        <base-main>
            <el-card header="key关键字（失败的demo）">
                <el-form ref="form" :model="form" label-width="90px">
                    <el-form-item label="字段一" prop="field1">
                        <el-input placeholder="请输入" v-model="form.field1"></el-input>
                    </el-form-item>
                    <el-form-item label="字段二" prop="field2">
                        <el-select v-model="form.field2" placeholder="请选择" @change="changeField2">
                            <el-option label="显示字段三A" value="A"></el-option>
                            <el-option label="显示字段三B" value="B"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        v-if="form.field2 === 'A'"
                        label="字段三A"
                        prop="field3"
                        :rules="[{ required: true, message: '请输入字段三A', trigger: 'blur' }]"
                    >
                        <el-input placeholder="请输入" v-model="form.field3"></el-input>
                    </el-form-item>
                    <el-form-item
                        v-else
                        label="字段三B"
                        prop="field3"
                        :rules="[{ required: true, message: '请选择字段三B日期', trigger: 'blur' }]"
                    >
                        <el-date-picker
                            v-model="form.field3"
                            type="daterange"
                            value-format="yyyy-MM-dd"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        />
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-card>
        </base-main>
    </base-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                field1: '',
                field2: 'A',
                field3: '',
            },
        };
    },
    methods: {
        changeField2() {
            console.log('需要清除field3防止报错');
            this.form.field3 = '';
        },
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