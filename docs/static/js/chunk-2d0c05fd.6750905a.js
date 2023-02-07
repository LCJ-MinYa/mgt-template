(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0c05fd"],{

/***/ "4209":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/exampleKey/index.vue?vue&type=template&id=7f0e097d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-container',[_c('base-main',[_c('el-card',{attrs:{"header":"key关键字（失败的demo）"}},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"字段一","prop":"field1"}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.form.field1),callback:function ($$v) {_vm.$set(_vm.form, "field1", $$v)},expression:"form.field1"}})],1),_c('el-form-item',{attrs:{"label":"字段二","prop":"field2"}},[_c('el-select',{attrs:{"placeholder":"请选择"},on:{"change":_vm.changeField2},model:{value:(_vm.form.field2),callback:function ($$v) {_vm.$set(_vm.form, "field2", $$v)},expression:"form.field2"}},[_c('el-option',{attrs:{"label":"显示字段三A","value":"A"}}),_c('el-option',{attrs:{"label":"显示字段三B","value":"B"}})],1)],1),(_vm.form.field2 === 'A')?_c('el-form-item',{attrs:{"label":"字段三A","prop":"field3","rules":[{ required: true, message: '请输入字段三A', trigger: 'blur' }]}},[_c('el-input',{attrs:{"placeholder":"请输入"},model:{value:(_vm.form.field3),callback:function ($$v) {_vm.$set(_vm.form, "field3", $$v)},expression:"form.field3"}})],1):_c('el-form-item',{attrs:{"label":"字段三B","prop":"field3","rules":[{ required: true, message: '请选择字段三B日期', trigger: 'blur' }]}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.form.field3),callback:function ($$v) {_vm.$set(_vm.form, "field3", $$v)},expression:"form.field3"}})],1)],1),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/exampleKey/index.vue?vue&type=template&id=7f0e097d&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/exampleKey/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var exampleKeyvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      form: {
        field1: '',
        field2: 'A',
        field3: ''
      }
    };
  },
  methods: {
    changeField2: function changeField2() {
      console.log('需要清除field3防止报错');
      this.form.field3 = '';
    },
    submit: function submit() {
      console.log(this.form);
      this.$refs.form.validate(function (valid) {
        console.log(valid);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/exampleKey/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var example_exampleKeyvue_type_script_lang_js_ = (exampleKeyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/example/exampleKey/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  example_exampleKeyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7f0e097d",
  null
  
)

/* harmony default export */ var exampleKey = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);