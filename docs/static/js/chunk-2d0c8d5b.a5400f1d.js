(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0c8d5b"],{

/***/ "5725":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/reg/index.vue?vue&type=template&id=ba3c7c74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-container',[_c('base-main',[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"300px"}},_vm._l((_vm.content),function(item,index){return _c('el-card',{key:index,staticClass:"mb-20"},[_c('el-form-item',{attrs:{"slot":"header","label":item.label,"prop":item.prop},slot:"header"},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.form[item.prop]),callback:function ($$v) {_vm.$set(_vm.form, item.prop, $$v)},expression:"form[item.prop]"}})],1),(item.regDemoList.length)?_c('el-descriptions',{staticClass:"mb-20",attrs:{"title":"参考校验值","direction":"vertical","column":4,"border":""}},_vm._l((item.regDemoList),function(demoItem,demoIndex){return _c('el-descriptions-item',{key:demoIndex,attrs:{"label":("校验值：" + demoItem)}},[_vm._v("校验结果："+_vm._s(_vm._f("filterReg")(demoItem,item.prop)))])}),1):_vm._e(),(item.expandList.length)?_c('el-descriptions',{attrs:{"title":"正则表达式拓展","direction":"vertical","column":3,"border":""}},_vm._l((item.expandList),function(expandItem,expandIndex){return _c('el-descriptions-item',{key:expandIndex,attrs:{"label":expandItem.label}},[_vm._v(_vm._s(expandItem.value))])}),1):_vm._e()],1)}),1)],1),_c('base-footer',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/reg/index.vue?vue&type=template&id=ba3c7c74&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("00b4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/reg/index.vue?vue&type=script&lang=js&


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

var testReg = /^(100(\.0{1,2})?|[1-9]\d(\.\d{1,2})?|\d(\.\d{1,2})?)$/;
var percentReg = /^(([1-9]?[0-9](\.[0-9]{1,2})?)|100)$/;
/* harmony default export */ var regvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      form: {
        test: '',
        percent: ''
      },
      rules: {
        test: [{
          required: true,
          message: '请输入'
        }, {
          pattern: testReg,
          message: '请输入0-100'
        }],
        percent: [{
          required: true,
          message: '请输入'
        }, {
          pattern: percentReg,
          message: '请输入0-100的周转率辅助线'
        }]
      },
      content: [{
        prop: 'test',
        label: '百分比(包含0-100所有数，最多两位小数)',
        regDemoList: ['0', '测试', '0.', '01', '11.123', '100', '50.00', '100.00'],
        expandList: []
      }, {
        prop: 'percent',
        label: '百分比(包含0-100所有数，最多两位小数)',
        regDemoList: ['0', '测试', '0.', '01', '11.123', '100', '50.00', '100.00'],
        expandList: [{
          label: '包含0-30所有数，最多两位小数',
          value: '/^(([1-2]?[0-9](.[0-9]{1,2})?)|30)$/'
        }, {
          label: '包含0-50所有数，最多两位小数',
          value: '/^(([1-4]?[0-9](.[0-9]{1,2})?)|50)$/'
        }, {
          label: '包含0-1000所有数，最多两位小数',
          value: '/^(([1-2]?[0-9](.[0-9]{1,2})?)|30)$/'
        }]
      }]
    };
  },
  filters: {
    filterReg: function filterReg(value, prop) {
      switch (prop) {
        case 'test':
          return testReg.test(value);
        case 'percent':
          return percentReg.test(value);
        default:
          break;
      }
    }
  },
  methods: {
    submit: function submit() {
      console.log(this.form);
      this.$refs.form.validate(function (valid) {
        console.log(valid);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/reg/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var example_regvue_type_script_lang_js_ = (regvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/example/reg/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  example_regvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ba3c7c74",
  null
  
)

/* harmony default export */ var reg = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);