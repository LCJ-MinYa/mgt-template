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
                    <div v-if="menuIndex === 'object'">查看控制台输出{{ handleNewObj() }}{{ handleNewObjWithFuc() }}</div>
                    <div v-if="menuIndex === 'event-bus'">2</div>
                </el-main>
            </el-container>
        </base-main>
    </base-container>
</template>

<script>
export default {
    data() {
        return {
            menuIndex: 'object',
            menuList: [
                {
                    index: 'object',
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
        /** object */
        handleNewObj() {
            function person(name) {
                this.name = name;
                this.logName = function () {
                    console.log(this.name);
                };
            }

            const xiaoming = new person('小明');
            const xiaohong = new person('小红');
            console.log(xiaoming.logName === xiaohong.logName);
        },
        handleNewObjWithFuc() {
            function person(name) {
                this.name = name;
            }

            person.prototype.logName = function () {
                console.log(this.name);
            };

            const xiaoming = new person('小明');
            const xiaohong = new person('小红');
            console.log(xiaoming.logName === xiaohong.logName);
        },
    },
};
</script>

<style lang="scss" scoped></style>
