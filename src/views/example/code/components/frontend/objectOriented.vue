<template>
    <div>
        <pre v-highlight="handleNewObjCode">
            <code class="javascript"></code>
        </pre>
        <pre v-highlight="handleNewObjWithFucCode">
            <code class="javascript"></code>
        </pre>
    </div>
</template>

<script>
const handleNewObjCode = `/* 构造函数内logName非同一个方法 */
function person(name) {
    this.name = name;
    this.logName = function () {
        console.log(this.name);
    };
}

const xiaoming = new person('小明');
const xiaohong = new person('小红');
console.log(xiaoming.logName === xiaohong.logName);`;

const handleNewObjWithFucCode = `/* 构造函数内logName同一个方法 */
function person(name) {
    this.name = name;
}

person.prototype.logName = function () {
    console.log(this.name);
};

const xiaoming = new person('小明');
const xiaohong = new person('小红');
console.log(xiaoming.logName === xiaohong.logName);`;

export default {
    data() {
        return {
            handleNewObjCode,
            handleNewObjWithFucCode,
        };
    },
    mounted() {},
    methods: {},
};
</script>