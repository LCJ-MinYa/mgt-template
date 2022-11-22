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
const getFormItemProperty = (item, property = 'prop') => {
    return item.componentConfig && item.componentConfig[property] ? item.componentConfig[property] : item[property] ? item[property] : null;
};

export { props, getFormItemProperty };
