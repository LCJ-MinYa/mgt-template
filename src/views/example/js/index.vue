<template>
    <base-container>
        <base-main>
            <el-container class="h-full">
                <el-aside class="mr-20 bg-white">
                    <el-menu unique-opened :default-active="menuIndex" @select="changeMenu">
                        <el-menu-item v-for="item in menuList" :key="item.index" :index="item.index">
                            <span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main class="bg-white">
                    <template v-for="item in menuList">
                        <component :key="item.index" v-if="menuIndex === item.index" :is="item.index"></component>
                    </template>
                </el-main>
            </el-container>
        </base-main>
    </base-container>
</template>

<script>
import objectOriented from './components/objectOriented.vue';
import eventBus from './components/eventBus.vue';

export default {
    components: {
        objectOriented,
        eventBus,
    },
    data() {
        return {
            menuIndex: 'objectOriented',
            menuList: [
                {
                    index: 'objectOriented',
                    title: '面向对象',
                },
                {
                    index: 'event-bus',
                    title: '实现event-bus',
                },
            ],
        };
    },
    mounted() {},
    methods: {
        changeMenu(index) {
            if (index !== this.menuIndex) {
                this.menuIndex = index;
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
