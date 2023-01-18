<template>
    <base-container>
        <base-main>
            <el-container class="h-full">
                <el-aside class="mr-20 bg-white">
                    <el-menu :default-active="menuIndex" @select="changeMenu">
                        <template v-for="item in menuList">
                            <el-menu-item v-if="!item.children" :key="item.index" :index="item.index">
                                {{ item.title }}
                            </el-menu-item>
                            <el-submenu v-else :key="item.index" :index="item.index">
                                <span slot="title">
                                    {{ item.title }}
                                </span>
                                <el-menu-item v-for="childItem in item.children" :key="childItem.index" :index="childItem.index">
                                    {{ childItem.title }}
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </el-menu>
                </el-aside>
                <el-main class="bg-white">
                    <component :is="menuIndex"></component>
                </el-main>
            </el-container>
        </base-main>
    </base-container>
</template>

<script>
import objectOriented from './components/frontend/objectOriented.vue';
import eventBus from './components/frontend/eventBus.vue';

import sqlCommand from './components/sql/sqlCommand.vue';

export default {
    components: {
        objectOriented,
        eventBus,
        sqlCommand,
    },
    data() {
        return {
            menuIndex: 'objectOriented',
            menuList: [
                {
                    index: 'frontend',
                    title: '前端',
                    children: [
                        {
                            index: 'objectOriented',
                            title: '面向对象',
                        },
                        {
                            index: 'event-bus',
                            title: '实现event-bus',
                        },
                    ],
                },
                {
                    index: 'sql',
                    title: 'SQL',
                    children: [
                        {
                            index: 'sqlCommand',
                            title: 'sql命令',
                        },
                    ],
                },
            ],
        };
    },
    mounted() {},
    methods: {
        changeMenu(index) {
            console.log(index);
            if (index !== this.menuIndex) {
                this.menuIndex = index;
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
