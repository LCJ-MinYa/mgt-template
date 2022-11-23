import { Form } from 'element-ui';

const props = {
    ...Form.props,
    /** form表单配置项 */
    formConfig: {
        type: Array,
        default: () => {
            return [];
        },
    },
    /** form表单占据宽度 */
    span: {
        type: Number,
        default: 8,
    },
};

/** 获取表单属性最终值 */
const getValidateFormItemProperty = (item) => {
    return item.prop;
};

export { props, getValidateFormItemProperty };
