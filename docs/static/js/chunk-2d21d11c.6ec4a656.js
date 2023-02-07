(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d21d11c"],{

/***/ "d071":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/index.vue?vue&type=template&id=dea3f99c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-container',[_c('base-main',[_c('element-custom',{staticClass:"mb-20"}),_c('element-validate-mode-custom',{staticClass:"mb-20"}),_c('native-custom')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/customVModel/index.vue?vue&type=template&id=dea3f99c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/element/index.vue?vue&type=template&id=353758d6&scoped=true&
var elementvue_type_template_id_353758d6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{attrs:{"header":"使用element组件自定义vmodel对象，并集成element-ui-form校验"}},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"活动名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入活动名称"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('el-form-item',{attrs:{"label":"活动区域","prop":"region"}},[_c('el-select',{attrs:{"placeholder":"请选择活动区域","clearable":""},model:{value:(_vm.form.region),callback:function ($$v) {_vm.$set(_vm.form, "region", $$v)},expression:"form.region"}},[_c('el-option',{attrs:{"label":"区域一","value":"shanghai"}}),_c('el-option',{attrs:{"label":"区域二","value":"beijing"}})],1)],1),_c('el-form-item',{attrs:{"label":"活动时间","required":""}},[_c('custom',{attrs:{"propName":"date"},model:{value:(_vm.form.date),callback:function ($$v) {_vm.$set(_vm.form, "date", $$v)},expression:"form.date"}})],1)],1),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("提交")])],1)}
var elementvue_type_template_id_353758d6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/customVModel/element/index.vue?vue&type=template&id=353758d6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/element/custom.vue?vue&type=template&id=43a392b4&scoped=true&
var customvue_type_template_id_43a392b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form-item',{staticStyle:{"margin-bottom":"20px"},attrs:{"prop":(_vm.propName + ".options")}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},model:{value:(_vm.value.options),callback:function ($$v) {_vm.$set(_vm.value, "options", $$v)},expression:"value.options"}},[_c('el-option',{attrs:{"label":"options1","value":"options1"}}),_c('el-option',{attrs:{"label":"options2","value":"options2"}})],1)],1),_c('el-form-item',{attrs:{"prop":(_vm.propName + ".range")}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:(_vm.value.range),callback:function ($$v) {_vm.$set(_vm.value, "range", $$v)},expression:"value.range"}})],1)],1)}
var customvue_type_template_id_43a392b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/customVModel/element/custom.vue?vue&type=template&id=43a392b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/element/custom.vue?vue&type=script&lang=js&
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

/* harmony default export */ var customvue_type_script_lang_js_ = ({
  props: {
    value: Object,
    propName: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/customVModel/element/custom.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_customvue_type_script_lang_js_ = (customvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/example/customVModel/element/custom.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_customvue_type_script_lang_js_,
  customvue_type_template_id_43a392b4_scoped_true_render,
  customvue_type_template_id_43a392b4_scoped_true_staticRenderFns,
  false,
  null,
  "43a392b4",
  null
  
)

/* harmony default export */ var custom = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/element/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var elementvue_type_script_lang_js_ = ({
  components: {
    Custom: custom
  },
  data: function data() {
    return {
      form: {
        name: '',
        region: '',
        date: {
          options: 'options2',
          range: []
        }
      },
      /** 自定义组件vmodel是对象时，rules应采用下面写法 */
      rules: {
        name: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur'
        }],
        region: [{
          required: true,
          message: '请选择活动区域',
          trigger: 'change'
        }],
        'date.options': [{
          required: true,
          message: '请选择日期1'
        }],
        'date.range': [{
          required: true,
          message: '请选择日期2'
        }]
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    submit: function submit() {
      console.log(this.form);
      this.$refs.form.validate(function (valid) {
        console.log(valid);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/customVModel/element/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var customVModel_elementvue_type_script_lang_js_ = (elementvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/customVModel/element/index.vue





/* normalize component */

var element_component = Object(componentNormalizer["a" /* default */])(
  customVModel_elementvue_type_script_lang_js_,
  elementvue_type_template_id_353758d6_scoped_true_render,
  elementvue_type_template_id_353758d6_scoped_true_staticRenderFns,
  false,
  null,
  "353758d6",
  null
  
)

/* harmony default export */ var customVModel_element = (element_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/elementValidateMode/index.vue?vue&type=template&id=1414629d&scoped=true&
var elementValidateModevue_type_template_id_1414629d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{attrs:{"header":"使用element组件自定义vmodel对象，并集成element-ui-form将整个字段一起校验"}},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"活动名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入活动名称"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('el-form-item',{attrs:{"label":"活动区域","prop":"region"}},[_c('el-select',{attrs:{"placeholder":"请选择活动区域","clearable":""},model:{value:(_vm.form.region),callback:function ($$v) {_vm.$set(_vm.form, "region", $$v)},expression:"form.region"}},[_c('el-option',{attrs:{"label":"区域一","value":"shanghai"}}),_c('el-option',{attrs:{"label":"区域二","value":"beijing"}})],1)],1),_c('el-form-item',{attrs:{"label":"活动时间","prop":"date"}},[_c('custom',{on:{"triggerValidate":_vm.triggerValidate},model:{value:(_vm.form.date),callback:function ($$v) {_vm.$set(_vm.form, "date", $$v)},expression:"form.date"}})],1)],1),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("提交")])],1)}
var elementValidateModevue_type_template_id_1414629d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/customVModel/elementValidateMode/index.vue?vue&type=template&id=1414629d&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("d9e2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/elementValidateMode/custom.vue?vue&type=template&id=764a8d81&scoped=true&
var customvue_type_template_id_764a8d81_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form-item',{staticStyle:{"margin-bottom":"20px"}},[_c('el-select',{attrs:{"placeholder":"请选择","clearable":""},on:{"change":_vm.triggerValidate},model:{value:(_vm.value.options),callback:function ($$v) {_vm.$set(_vm.value, "options", $$v)},expression:"value.options"}},[_c('el-option',{attrs:{"label":"options1","value":"options1"}}),_c('el-option',{attrs:{"label":"options2","value":"options2"}})],1)],1),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{"change":_vm.triggerValidate},model:{value:(_vm.value.range),callback:function ($$v) {_vm.$set(_vm.value, "range", $$v)},expression:"value.range"}})],1)],1)}
var customvue_type_template_id_764a8d81_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/customVModel/elementValidateMode/custom.vue?vue&type=template&id=764a8d81&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/elementValidateMode/custom.vue?vue&type=script&lang=js&
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

/* harmony default export */ var elementValidateMode_customvue_type_script_lang_js_ = ({
  props: {
    value: Object
  },
  methods: {
    triggerValidate: function triggerValidate() {
      /** emit调用的方法必须是input之外的其他方法名，input为vue2中v-model的关键字，设置为input会覆盖掉v-model双向数据绑定 */
      this.$emit('triggerValidate');
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/customVModel/elementValidateMode/custom.vue?vue&type=script&lang=js&
 /* harmony default export */ var customVModel_elementValidateMode_customvue_type_script_lang_js_ = (elementValidateMode_customvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/customVModel/elementValidateMode/custom.vue





/* normalize component */

var custom_component = Object(componentNormalizer["a" /* default */])(
  customVModel_elementValidateMode_customvue_type_script_lang_js_,
  customvue_type_template_id_764a8d81_scoped_true_render,
  customvue_type_template_id_764a8d81_scoped_true_staticRenderFns,
  false,
  null,
  "764a8d81",
  null
  
)

/* harmony default export */ var elementValidateMode_custom = (custom_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/elementValidateMode/index.vue?vue&type=script&lang=js&

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


/* harmony default export */ var elementValidateModevue_type_script_lang_js_ = ({
  components: {
    Custom: elementValidateMode_custom
  },
  data: function data() {
    return {
      form: {
        name: '',
        region: '',
        date: {
          options: 'options2',
          range: []
        }
      },
      /** 自定义组件vmodel是对象时，rules应采用下面写法 */
      rules: {
        name: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur'
        }],
        region: [{
          required: true,
          message: '请选择活动区域',
          trigger: 'change'
        }],
        date: [{
          validator: function validator(rule, value, callback) {
            console.log(rule, value, callback);
            if (!value.options) {
              callback(new Error('请选择日期1'));
            }
            if (!value.range || !value.range.length) {
              callback(new Error('请选择日期2'));
            }
            callback();
          }
        }]
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    submit: function submit() {
      console.log(this.form);
      this.$refs.form.validate(function (valid) {
        console.log(valid);
      });
    },
    triggerValidate: function triggerValidate() {
      this.$refs.form.validateField('date');
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/customVModel/elementValidateMode/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var customVModel_elementValidateModevue_type_script_lang_js_ = (elementValidateModevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/customVModel/elementValidateMode/index.vue





/* normalize component */

var elementValidateMode_component = Object(componentNormalizer["a" /* default */])(
  customVModel_elementValidateModevue_type_script_lang_js_,
  elementValidateModevue_type_template_id_1414629d_scoped_true_render,
  elementValidateModevue_type_template_id_1414629d_scoped_true_staticRenderFns,
  false,
  null,
  "1414629d",
  null
  
)

/* harmony default export */ var elementValidateMode = (elementValidateMode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/native/index.vue?vue&type=template&id=2f422805&scoped=true&
var nativevue_type_template_id_2f422805_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{attrs:{"header":"使用html原生组件自定义vmodel对象，并集成element-ui-form校验"}},[_c('el-form',{ref:"form",attrs:{"model":_vm.form,"rules":_vm.rules,"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"活动名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"请输入活动名称"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('el-form-item',{attrs:{"label":"活动区域","prop":"region"}},[_c('el-select',{attrs:{"placeholder":"请选择活动区域","clearable":""},model:{value:(_vm.form.region),callback:function ($$v) {_vm.$set(_vm.form, "region", $$v)},expression:"form.region"}},[_c('el-option',{attrs:{"label":"区域一","value":"shanghai"}}),_c('el-option',{attrs:{"label":"区域二","value":"beijing"}})],1)],1),_c('el-form-item',{attrs:{"label":"活动时间","required":""}},[_c('custom',{attrs:{"propName":"date"},model:{value:(_vm.form.date),callback:function ($$v) {_vm.$set(_vm.form, "date", $$v)},expression:"form.date"}})],1)],1),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("提交")])],1)}
var nativevue_type_template_id_2f422805_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/customVModel/native/index.vue?vue&type=template&id=2f422805&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"dff5a22c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/native/custom.vue?vue&type=template&id=383db650&scoped=true&
var customvue_type_template_id_383db650_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form-item',{staticStyle:{"margin-bottom":"20px"},attrs:{"prop":(_vm.propName + ".options")}},[_c('select',{domProps:{"value":_vm.value.options},on:{"input":function($event){return _vm.update('options', $event.target.value)}}},[_c('option',{attrs:{"value":"options1"}},[_vm._v("options1")]),_c('option',{attrs:{"value":"options2"}},[_vm._v("options2")])])]),_c('el-form-item',{attrs:{"prop":(_vm.propName + ".range")}},[_c('input',{attrs:{"placeholder":"请输入","type":"text"},domProps:{"value":_vm.value.range},on:{"input":function($event){return _vm.update('range', $event.target.value)}}})])],1)}
var customvue_type_template_id_383db650_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/example/customVModel/native/custom.vue?vue&type=template&id=383db650&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/native/custom.vue?vue&type=script&lang=js&


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

/* harmony default export */ var native_customvue_type_script_lang_js_ = ({
  props: {
    value: Object,
    propName: {
      type: String,
      required: true
    }
  },
  methods: {
    update: function update(key, value) {
      console.log(key, value);
      this.$emit('input', Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, this.value), {}, Object(defineProperty["a" /* default */])({}, key, value)));
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/customVModel/native/custom.vue?vue&type=script&lang=js&
 /* harmony default export */ var customVModel_native_customvue_type_script_lang_js_ = (native_customvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/customVModel/native/custom.vue





/* normalize component */

var native_custom_component = Object(componentNormalizer["a" /* default */])(
  customVModel_native_customvue_type_script_lang_js_,
  customvue_type_template_id_383db650_scoped_true_render,
  customvue_type_template_id_383db650_scoped_true_staticRenderFns,
  false,
  null,
  "383db650",
  null
  
)

/* harmony default export */ var native_custom = (native_custom_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/native/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var nativevue_type_script_lang_js_ = ({
  components: {
    Custom: native_custom
  },
  data: function data() {
    return {
      form: {
        name: '',
        region: '',
        date: {
          options: '',
          range: ''
        }
      },
      /** 自定义组件vmodel是对象时，rules应采用下面写法 */
      rules: {
        name: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur'
        }],
        region: [{
          required: true,
          message: '请选择活动区域',
          trigger: 'change'
        }],
        'date.options': [{
          required: true,
          message: '请选择日期1'
        }],
        'date.range': [{
          required: true,
          message: '请选择日期2'
        }]
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    submit: function submit() {
      console.log(this.form);
      this.$refs.form.validate(function (valid) {
        console.log(valid);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/example/customVModel/native/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var customVModel_nativevue_type_script_lang_js_ = (nativevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/customVModel/native/index.vue





/* normalize component */

var native_component = Object(componentNormalizer["a" /* default */])(
  customVModel_nativevue_type_script_lang_js_,
  nativevue_type_template_id_2f422805_scoped_true_render,
  nativevue_type_template_id_2f422805_scoped_true_staticRenderFns,
  false,
  null,
  "2f422805",
  null
  
)

/* harmony default export */ var customVModel_native = (native_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/example/customVModel/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var customVModelvue_type_script_lang_js_ = ({
  components: {
    ElementCustom: customVModel_element,
    ElementValidateModeCustom: elementValidateMode,
    NativeCustom: customVModel_native
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/views/example/customVModel/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var example_customVModelvue_type_script_lang_js_ = (customVModelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/example/customVModel/index.vue





/* normalize component */

var customVModel_component = Object(componentNormalizer["a" /* default */])(
  example_customVModelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "dea3f99c",
  null
  
)

/* harmony default export */ var customVModel = __webpack_exports__["default"] = (customVModel_component.exports);

/***/ })

}]);