import BaseClassDemo from '../class/baseClass.vue';

export default {
    extends: BaseClassDemo,
    render(h) {
        this.$slots.default = this.renderDefault();
        this.$slots.otherSlotA = this.renderOtherSlotA();
        this.$slots.otherSlotB = this.renderOtherSlotB();
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
    methods: {
        renderDefault() {
            /**
             * 默认应该 return null;
             * 此处为了演示，返回一个mixin自定义的slot
             */
            return <elCard class="mb-20">子类Mixin自定义slot</elCard>;
        },
        renderOtherSlotA() {
            /**
             * 默认应该 return null;
             * 此处为了演示，返回一个mixin自定义的slot
             */
            return <elCard class="mb-20">子类Mixin自定义otherSlotA</elCard>;
        },
        renderOtherSlotB() {
            /**
             * 默认应该 return null;
             * 此处为了演示，返回一个mixin自定义的slot
             */
            return <elCard class="mb-20">子类Mixin自定义otherSlotB</elCard>;
        },
    },
};
