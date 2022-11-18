import BaseTable from '@/components/AutoImport/BaseTable/index.vue';
import BaseForm from '@/components/AutoImport/BaseForm/index.vue';
import BaseContainer from '@/components/AutoImport/BaseContainer/index.vue';
import BaseMain from '@/components/AutoImport/BaseMain/index.vue';

export default {
    install(Vue) {
        Vue.component('BaseTable', BaseTable);
        Vue.component('BaseForm', BaseForm);
        Vue.component('BaseContainer', BaseContainer);
        Vue.component('BaseMain', BaseMain);
    },
};
