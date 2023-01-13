<script>
import BaseClassDemo from './baseClass.vue';
import RenderMixin from './renderMixin';

export default {
    extends: BaseClassDemo,
    mixins: [RenderMixin],
    data() {
        return {};
    },
    mounted() {},
    methods: {
        renderDefault() {
            return <elCard class="mb-20">子类自定义slot</elCard>;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>