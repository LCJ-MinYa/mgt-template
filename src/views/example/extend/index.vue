<script>
import RenderMixin from './mixin/renderMixin';
import OthenSlotB from './components/othenSlotB.vue';

export default {
    mixins: [RenderMixin],
    data() {
        return {
            a: 1234569898,
        };
    },
    mounted() {},
    methods: {
        renderDefault() {
            return <elCard class="mb-20">子类自定义slot</elCard>;
        },
        renderOtherSlotB() {
            return <OthenSlotB a={this.a} />;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>