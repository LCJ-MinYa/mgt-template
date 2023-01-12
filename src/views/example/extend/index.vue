<script>
import ParentClass from './parentClass.vue';

export default {
    extends: ParentClass,
    data() {
        return {};
    },
    render(h) {
        this.$slots.default = <elCard class="mb-20">子类自定义slot</elCard>;
        this.$slots.otherSlotA = <elCard class="mb-20">子类自定义otherSlotA</elCard>;
        this.$slots.otherSlotB = <elCard>子类自定义otherSlotB</elCard>;
        const baseClass = this.$options.extends;
        /**
         * 写法一 不推荐
         * return baseClass.render.apply(this, [this.$slots.default, this.$slots.otherSlotA, this.$slots.otherSlotB]);
         */

        /**
         * 写法二 如果引入的基类名称改变了，这里也需要跟着改变，不推荐
         * return ParentClass.render.call(this, h);
         */

        /** 写法三 推荐 */
        return baseClass.render.call(this, h);
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
</style>