(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e1ba1"],{

/***/ "7c54":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/extend/class/baseClass.vue?vue&type=template&id=77b38ecb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-container',[_c('base-main',[_vm._t("default"),_vm._t("otherSlotA"),_vm._t("otherSlotB")],2),_c('base-footer',{attrs:{"showGoBack":""}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/extend/class/baseClass.vue?vue&type=template&id=77b38ecb&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/extend/class/baseClass.vue?vue&type=script&lang=js&
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

/* harmony default export */ var baseClassvue_type_script_lang_js_ = ({
  provide: function provide() {
    return {
      baseClass: this
    };
  },
  data: function data() {
    return {
      b: 2
    };
  },
  mounted: function mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/views/example/extend/class/baseClass.vue?vue&type=script&lang=js&
 /* harmony default export */ var class_baseClassvue_type_script_lang_js_ = (baseClassvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/example/extend/class/baseClass.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  class_baseClassvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "77b38ecb",
  null
  
)

/* harmony default export */ var baseClass = (component.exports);
// CONCATENATED MODULE: ./src/views/example/extend/mixin/renderMixin.js

/* harmony default export */ var renderMixin = ({
  extends: baseClass,
  render: function render(h) {
    this.$slots.default = this.renderDefault();
    this.$slots.otherSlotA = this.renderOtherSlotA();
    this.$slots.otherSlotB = this.renderOtherSlotB();
    var baseClass = this.$options.extends;
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
    renderDefault: function renderDefault() {
      var h = this.$createElement;
      /**
       * 默认应该 return null;
       * 此处为了演示，返回一个mixin自定义的slot
       */
      return h("elCard", {
        "class": "mb-20"
      }, ["\u5B50\u7C7BMixin\u81EA\u5B9A\u4E49slot"]);
    },
    renderOtherSlotA: function renderOtherSlotA() {
      var h = this.$createElement;
      /**
       * 默认应该 return null;
       * 此处为了演示，返回一个mixin自定义的slot
       */
      return h("elCard", {
        "class": "mb-20"
      }, ["\u5B50\u7C7BMixin\u81EA\u5B9A\u4E49otherSlotA"]);
    },
    renderOtherSlotB: function renderOtherSlotB() {
      var h = this.$createElement;
      /**
       * 默认应该 return null;
       * 此处为了演示，返回一个mixin自定义的slot
       */
      return h("elCard", {
        "class": "mb-20"
      }, ["\u5B50\u7C7BMixin\u81EA\u5B9A\u4E49otherSlotB"]);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/extend/components/othenSlotB.vue?vue&type=template&id=a1ef04a8&scoped=true&
var othenSlotBvue_type_template_id_a1ef04a8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"mb-20",on:{"click":_vm.acc}},[_vm._v("子类中以组件形式引入的自定义otherSlotB")])}
var othenSlotBvue_type_template_id_a1ef04a8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/extend/components/othenSlotB.vue?vue&type=template&id=a1ef04a8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/extend/components/othenSlotB.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var othenSlotBvue_type_script_lang_js_ = ({
  inject: ['baseClass'],
  props: ['a'],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var _this = this;
    console.log(this);
    this.$nextTick(function () {
      console.log(_this.$parent);
      console.log(_this.baseClass);
    });
  },
  methods: {
    acc: function acc() {}
  }
});
// CONCATENATED MODULE: ./src/views/example/extend/components/othenSlotB.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_othenSlotBvue_type_script_lang_js_ = (othenSlotBvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/extend/components/othenSlotB.vue





/* normalize component */

var othenSlotB_component = Object(componentNormalizer["a" /* default */])(
  components_othenSlotBvue_type_script_lang_js_,
  othenSlotBvue_type_template_id_a1ef04a8_scoped_true_render,
  othenSlotBvue_type_template_id_a1ef04a8_scoped_true_staticRenderFns,
  false,
  null,
  "a1ef04a8",
  null
  
)

/* harmony default export */ var othenSlotB = (othenSlotB_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/extend/index.vue?vue&type=script&lang=js&


/* harmony default export */ var extendvue_type_script_lang_js_ = ({
  mixins: [renderMixin],
  data: function data() {
    return {
      a: 1234569898
    };
  },
  mounted: function mounted() {},
  methods: {
    renderDefault: function renderDefault() {
      var h = this.$createElement;
      return h("elCard", {
        "class": "mb-20"
      }, ["\u5B50\u7C7B\u81EA\u5B9A\u4E49slot"]);
    },
    renderOtherSlotB: function renderOtherSlotB() {
      var h = this.$createElement;
      return h(othenSlotB, {
        "attrs": {
          "a": this.a
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/extend/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var example_extendvue_type_script_lang_js_ = (extendvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/extend/index.vue
var extend_render, extend_staticRenderFns




/* normalize component */

var extend_component = Object(componentNormalizer["a" /* default */])(
  example_extendvue_type_script_lang_js_,
  extend_render,
  extend_staticRenderFns,
  false,
  null,
  "061e6117",
  null
  
)

/* harmony default export */ var extend = __webpack_exports__["default"] = (extend_component.exports);

/***/ })

}]);