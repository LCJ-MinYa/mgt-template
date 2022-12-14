import BaseTable from '@/components/AutoImport/BaseTable/index.vue';
import BaseForm from '@/components/AutoImport/BaseForm/index.vue';
import BaseContainer from '@/components/AutoImport/BaseContainer/index.vue';
import BaseMain from '@/components/AutoImport/BaseMain/index.vue';
import BaseFooter from '@/components/AutoImport/BaseFooter/index.vue';
import BaseDialog from '@/components/AutoImport/BaseDialog/index.js';
import BaseDrawer from '@/components/AutoImport/BaseDrawer/index.js';

export default {
    install(Vue) {
        Vue.component('BaseTable', BaseTable);
        Vue.component('BaseForm', BaseForm);
        Vue.component('BaseContainer', BaseContainer);
        Vue.component('BaseMain', BaseMain);
        Vue.component('BaseFooter', BaseFooter);
        Vue.prototype.$dialog = BaseDialog;
        Vue.prototype.$drawer = BaseDrawer;
    },
};
