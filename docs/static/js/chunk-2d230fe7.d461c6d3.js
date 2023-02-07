(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d230fe7"],{

/***/ "ef3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/redirect/index.vue?vue&type=script&lang=js&


/* harmony default export */ var redirectvue_type_script_lang_js_ = ({
  created: function created() {
    var _this$$route = this.$route,
      params = _this$$route.params,
      query = _this$$route.query;
    var path = params.path;
    this.$router.replace({
      path: '/' + path,
      query: query
    });
  },
  render: function render(h) {
    return h(); // avoid warning message
  }
});
// CONCATENATED MODULE: ./src/views/redirect/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_redirectvue_type_script_lang_js_ = (redirectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/redirect/index.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_redirectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var redirect = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);