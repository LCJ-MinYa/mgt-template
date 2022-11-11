import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';

import '@/icons'; // icon
import '@/permission'; // permission control

import AutoImportComponents from '@/components/AutoImport';
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
    const { mockXHR } = require('../mock');
    mockXHR();
}

/** 设置ElementUI全局默认属性 */
ElementUI.Button.props.round = {
    type: Boolean,
    default: true,
};
ElementUI.Card.props.shadow = {
    type: String,
    default: 'never',
};

Vue.use(ElementUI);
Vue.use(AutoImportComponents);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});
