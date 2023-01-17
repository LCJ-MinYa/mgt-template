import highlight from './highlight';

export default {
    install(Vue) {
        Vue.directive('highlight', highlight);
    },
};
