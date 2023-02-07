(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d216001"],{

/***/ "c130":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/index.vue?vue&type=template&id=5af2e705&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-container',[_c('base-main',[_c('el-container',{staticClass:"h-full"},[_c('el-aside',{staticClass:"mr-20 bg-white"},[_c('el-menu',{attrs:{"default-active":_vm.menuIndex},on:{"select":_vm.changeMenu}},[_vm._l((_vm.menuList),function(item){return [(!item.children)?_c('el-menu-item',{key:item.index,attrs:{"index":item.index}},[_vm._v(" "+_vm._s(item.title)+" ")]):_c('el-submenu',{key:item.index,attrs:{"index":item.index}},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(" "+_vm._s(item.title)+" ")]),_vm._l((item.children),function(childItem){return _c('el-menu-item',{key:childItem.index,attrs:{"index":childItem.index}},[_vm._v(" "+_vm._s(childItem.title)+" ")])})],2)]})],2)],1),_c('el-main',{staticClass:"bg-white"},[_c(_vm.menuIndex,{tag:"component"})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/code/index.vue?vue&type=template&id=5af2e705&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/components/frontend/objectOriented.vue?vue&type=template&id=74c71803&
var objectOrientedvue_type_template_id_74c71803_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('pre',{directives:[{name:"highlight",rawName:"v-highlight",value:(_vm.handleNewObjCode),expression:"handleNewObjCode"}]},[_vm._v("        "),_c('code',{staticClass:"javascript"}),_vm._v("\n    ")]),_c('pre',{directives:[{name:"highlight",rawName:"v-highlight",value:(_vm.handleNewObjWithFucCode),expression:"handleNewObjWithFucCode"}]},[_vm._v("        "),_c('code',{staticClass:"javascript"}),_vm._v("\n    ")])])}
var objectOrientedvue_type_template_id_74c71803_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/code/components/frontend/objectOriented.vue?vue&type=template&id=74c71803&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/components/frontend/objectOriented.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

const handleNewObjCode = () => {
  /* 构造函数内logName非同一个方法 */
  function person(name) {
    this.name = name;
    this.logName = function () {
      console.log(this.name);
    };
  }
  const xiaoming = new person('小明');
  const xiaohong = new person('小红');
  console.log(xiaoming.logName === xiaohong.logName);
};
const handleNewObjWithFucCode = () => {
  /* 构造函数内logName同一个方法 */
  function person(name) {
    this.name = name;
  }
  person.prototype.logName = function () {
    console.log(this.name);
  };
  const xiaoming = new person('小明');
  const xiaohong = new person('小红');
  console.log(xiaoming.logName === xiaohong.logName);
};
/* harmony default export */ var objectOrientedvue_type_script_lang_js_ = ({
  data() {
    return {
      handleNewObjCode,
      handleNewObjWithFucCode
    };
  },
  mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/views/example/code/components/frontend/objectOriented.vue?vue&type=script&lang=js&
 /* harmony default export */ var frontend_objectOrientedvue_type_script_lang_js_ = (objectOrientedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/example/code/components/frontend/objectOriented.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  frontend_objectOrientedvue_type_script_lang_js_,
  objectOrientedvue_type_template_id_74c71803_render,
  objectOrientedvue_type_template_id_74c71803_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var objectOriented = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/components/frontend/eventBus.vue?vue&type=template&id=131931c1&
var eventBusvue_type_template_id_131931c1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{directives:[{name:"highlight",rawName:"v-highlight",value:(_vm.code),expression:"code"}]},[_vm._v("    "),_c('code',{staticClass:"javascript"}),_vm._v("\n")])}
var eventBusvue_type_template_id_131931c1_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/code/components/frontend/eventBus.vue?vue&type=template&id=131931c1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/components/frontend/eventBus.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const code = () => {
  /* 自定义实现event-bus */
  class EventBus {
    // 定义所有事件列表,格式如下：
    // {
    //   key: Array,
    //   key: Array,
    // }
    // Array存储的是注册的回调函数
    constructor() {
      this.eventObj = {}; // 用于存储所有订阅事件
    }
    // 订阅事件,类似监听事件$on('key',()=>{})
    $on(name, callbcak) {
      // 判断是否存储过
      if (!this.eventObj[name]) {
        this.eventObj[name] = [];
      }
      this.eventObj[name].push(callbcak); // 往事件数组里面push
    }
    // 发布事件,类似于触发事件$emit('key')
    $emit(name) {
      // 获取存储的事件回调函数数组
      const eventList = this.eventObj[name];
      // 执行所有回调函数
      for (const callbcak of eventList) {
        callbcak();
      }
    }
  }
  // 初始化EventBus
  let EB = new EventBus();
  // 订阅事件
  EB.$on('key1', () => {
    console.info('我是订阅事件A');
  });
  EB.$on('key1', () => {
    console.info('我是订阅事件B');
  });
  EB.$on('key2', () => {
    console.info('我是订阅事件C');
  });

  // 发布事件
  EB.$emit('key1');
  EB.$emit('key2');
};
/* harmony default export */ var eventBusvue_type_script_lang_js_ = ({
  data() {
    return {
      code
    };
  },
  mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/views/example/code/components/frontend/eventBus.vue?vue&type=script&lang=js&
 /* harmony default export */ var frontend_eventBusvue_type_script_lang_js_ = (eventBusvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/code/components/frontend/eventBus.vue





/* normalize component */

var eventBus_component = Object(componentNormalizer["a" /* default */])(
  frontend_eventBusvue_type_script_lang_js_,
  eventBusvue_type_template_id_131931c1_render,
  eventBusvue_type_template_id_131931c1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var eventBus = (eventBus_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/components/sql/sqlCommand.vue?vue&type=template&id=b59a1138&
var sqlCommandvue_type_template_id_b59a1138_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{directives:[{name:"highlight",rawName:"v-highlight",value:(_vm.code),expression:"code"}]},[_vm._v("    "),_c('code',{staticClass:"sql"}),_vm._v("\n")])}
var sqlCommandvue_type_template_id_b59a1138_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/code/components/sql/sqlCommand.vue?vue&type=template&id=b59a1138&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/components/sql/sqlCommand.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const sqlCommandvue_type_script_lang_js_code = `/*
SELECT errorMsg, requestUrl, httpCode, \`code\`, count(*) FROM \`ods_miniprogram_error\` GROUP BY requestUrl, httpCode, \`code\`;
根据requestUrl, httpCode, code这三个字段进行分组查询，然后再统计count总数
*/
ErrorLog.queryStatistics = async (params: paramsWithDateRange) => {
// const { channelCode, startDate, endDate } = params;
console.log(params);
const arr = app.dateToTimestamp(params.startDate, params.endDate);

const db = new Sequelize("miniprogram_error_data", "root", "123456", {
    host: "10.10.23.23",
    port: "10000",
    dialect: "mysql",
});

const result = await db.query(
    \`
        SELECT errorMsg, timeFormat, requestUrl, httpCode, count(*)
        FROM ods_miniprogram_error
        WHERE time >= \${arr[0]} AND time <= \${arr[1]}
        GROUP BY errorKey;
    \`
);
console.log(result);

return result;
};`;
/* harmony default export */ var sqlCommandvue_type_script_lang_js_ = ({
  data() {
    return {
      code: sqlCommandvue_type_script_lang_js_code
    };
  },
  mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/views/example/code/components/sql/sqlCommand.vue?vue&type=script&lang=js&
 /* harmony default export */ var sql_sqlCommandvue_type_script_lang_js_ = (sqlCommandvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/code/components/sql/sqlCommand.vue





/* normalize component */

var sqlCommand_component = Object(componentNormalizer["a" /* default */])(
  sql_sqlCommandvue_type_script_lang_js_,
  sqlCommandvue_type_template_id_b59a1138_render,
  sqlCommandvue_type_template_id_b59a1138_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sqlCommand = (sqlCommand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/code/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var codevue_type_script_lang_js_ = ({
  components: {
    objectOriented: objectOriented,
    eventBus: eventBus,
    sqlCommand: sqlCommand
  },
  data: function data() {
    return {
      menuIndex: 'objectOriented',
      menuList: [{
        index: 'frontend',
        title: '前端',
        children: [{
          index: 'objectOriented',
          title: '面向对象'
        }, {
          index: 'event-bus',
          title: '实现event-bus'
        }]
      }, {
        index: 'sql',
        title: 'SQL',
        children: [{
          index: 'sqlCommand',
          title: 'sql命令'
        }]
      }]
    };
  },
  mounted: function mounted() {},
  methods: {
    changeMenu: function changeMenu(index) {
      console.log(index);
      if (index !== this.menuIndex) {
        this.menuIndex = index;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/code/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var example_codevue_type_script_lang_js_ = (codevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/code/index.vue





/* normalize component */

var code_component = Object(componentNormalizer["a" /* default */])(
  example_codevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5af2e705",
  null
  
)

/* harmony default export */ var example_code = __webpack_exports__["default"] = (code_component.exports);

/***/ })

}]);