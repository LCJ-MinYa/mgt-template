<script>
import ParentClass from './parentClass.vue';

export default {
    extends: {
        ParentClass,
    },
    data() {
        return {};
    },
    render(h) {
        this.$slots.default = <elCard>子类自定义slot</elCard>;
        return ParentClass.render.call(this, h);
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
</style>