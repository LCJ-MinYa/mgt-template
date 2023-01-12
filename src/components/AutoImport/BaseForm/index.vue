<script>
import FormGroup from './formGroup.vue';
import { props, getValidateFormItemProperty as getFormItemProperty } from './index.js';

export default {
    name: 'BaseForm',
    components: {
        FormGroup,
    },
    provide() {
        return {
            span: this.span,
            model: this.model,
        };
    },
    props,
    data() {
        return {};
    },
    render() {
        return (
            <elRow type="flex" justify="start" gutter={10}>
                <elCol span={this.span}>
                    <elForm ref="form" props={{ ...this.$props }} on={{ ...this.$listeners }}>
                        {this.renderFormGroup()}
                    </elForm>
                </elCol>
            </elRow>
        );
    },
    methods: {
        getFormItemProperty,
        renderFormGroup() {
            return this.formConfig.map((config) => <formGroup formGroupConfig={config} />);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>