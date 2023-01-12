<template>
    <el-drawer
        class="elpro-drawer"
        v-clickoutside="handleClose"
        :append-to-body="appendToBody"
        :before-close="beforeClose"
        :close-on-press-escape="closeOnPressEscape"
        :custom-class="customClass"
        :destroy-on-close="destroyOnClose"
        :modal="modal"
        :modal-append-to-body="modalAppendToBody"
        :direction="direction"
        :show-close="showClose"
        :size="size"
        :title="title"
        :visible.sync="visible"
        :wrapperClosable="wrapperClosable"
        :withHeader="withHeader"
        :style="positionStyle"
        @closed="handleClosed"
    >
        <component ref="main" :is="mainComponent" v-bind="mainProps"></component>
    </el-drawer>
</template>

<script>
import clickoutside from './clickoutside';

const DRAWER_DEFAULT_OPTIONS = {
    // ElDrawer options
    appendToBody: false,
    beforeClose: null,
    closeOnPressEscape: true,
    customClass: '',
    destroyOnClose: false,
    modal: false,
    modalAppendToBody: true,
    direction: 'rtl',
    showClose: true,
    size: '100%',
    title: '',
    visible: false,
    wrapperClosable: true,
    withHeader: true,
    // custom params
    mainComponent: null,
    mainProps: {},
    position: {},
    onClosed: () => {},
};

export default {
    name: 'ElproDrawer',

    data() {
        return { ...DRAWER_DEFAULT_OPTIONS };
    },

    computed: {
        positionStyle() {
            const position = this.position;
            return Object.keys(position).reduce((style, prop) => {
                const value = position[prop];
                style[prop] = typeof value === 'string' ? value : value + 'px';
                return style;
            }, {});
        },
    },

    methods: {
        handleClose() {
            this.visible = false;
        },
        handleClosed() {
            this.onClosed && this.onClosed();
            Object.assign(this.$data, DRAWER_DEFAULT_OPTIONS);
        },
    },

    directives: { clickoutside },
};
</script>