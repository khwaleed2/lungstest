(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Results_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "result",
  data: function data() {
    return {
      show: false,
      results: [],
      inhale_dura: null,
      hold_dura: null,
      meta: {
        url: "",
        title: "",
        description: "",
        media: ""
      }
    };
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.show = true;
    }, 1400);
  },
  mounted: function mounted() {
    $('[data-toggle="tooltip"]').tooltip();
    this.getMetaData();
  },
  computed: {
    cardText: function cardText() {
      return this.$store.getters.getData.resultData.card_text;
    },
    f_result: function f_result() {
      return this.$store.getters.getResult;
    }
  },
  methods: {
    tryAgain: function tryAgain() {
      var _this2 = this;

      this.$store.commit("setTryAgain", true);
      this.$store.commit("setShowPage", 3);
      setTimeout(function () {
        _this2.$router.push({
          name: "master"
        });
      }, 500);
    },
    getMetaData: function getMetaData() {
      var _this3 = this;

      axios({
        url: "get-metaData",
        method: "GET"
      }).then(function (res) {
        console.log(res.data.metaData);
        _this3.meta.title = res.data.metaData.title;
        _this3.meta.url = res.data.metaData.url;
        _this3.meta.description = res.data.metaData.description;
        _this3.meta.media = "".concat("http://127.0.0.1:8000").concat(res.data.metaData.image);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".result[data-v-3223b5f2] {\n  width: 100%;\n  max-width: 159px;\n  margin: 10% auto 0px;\n  position: relative;\n}\n.result .danger[data-v-3223b5f2] {\n  position: absolute;\n  top: 33px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #ec4141;\n  font-size: 1.2rem;\n  z-index: 9;\n}\n.result .text[data-v-3223b5f2] {\n  z-index: 9;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -39%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  line-height: 23px;\n}\n.result .text .lite[data-v-3223b5f2] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.min-h-70[data-v-3223b5f2] {\n  min-height: 70px;\n}\nsvg[data-v-3223b5f2] {\n  transform: rotateY(-360deg) rotateZ(-90deg);\n}\nsvg g#circle_3 circle[data-v-3223b5f2] {\n  stroke-dasharray: 400px;\n  stroke-dashoffset: 0px;\n  stroke-linecap: round;\n  stroke-width: 9px;\n  -webkit-animation: countdown-data-v-3223b5f2 1.4s linear forwards;\n          animation: countdown-data-v-3223b5f2 1.4s linear forwards;\n}\n@-webkit-keyframes countdown-data-v-3223b5f2 {\nfrom {\n    stroke-dashoffset: 400px;\n}\nto {\n    stroke-dashoffset: 0px;\n}\n}\n@keyframes countdown-data-v-3223b5f2 {\nfrom {\n    stroke-dashoffset: 400px;\n}\nto {\n    stroke-dashoffset: 0px;\n}\n}\n.social-share[data-v-3223b5f2] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.social-share a[data-v-3223b5f2] {\n  color: #fff;\n  margin: 8px;\n}\n.social-share a i[data-v-3223b5f2] {\n  font-size: 32px;\n}\n@media screen and (max-width: 309px) {\n.result .danger[data-v-3223b5f2] {\n    font-size: 1.1rem;\n}\n.result .text[data-v-3223b5f2] {\n    font-size: 16px;\n    line-height: 18px;\n}\n.result .text .lite[data-v-3223b5f2] {\n    font-size: 14px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Views/Results.vue":
/*!****************************************!*\
  !*** ./resources/js/Views/Results.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Results_vue_vue_type_template_id_3223b5f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Results.vue?vue&type=template&id=3223b5f2&scoped=true& */ "./resources/js/Views/Results.vue?vue&type=template&id=3223b5f2&scoped=true&");
/* harmony import */ var _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue?vue&type=script&lang=js& */ "./resources/js/Views/Results.vue?vue&type=script&lang=js&");
/* harmony import */ var _Results_vue_vue_type_style_index_0_id_3223b5f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true& */ "./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Results_vue_vue_type_template_id_3223b5f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Results_vue_vue_type_template_id_3223b5f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3223b5f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/Results.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Views/Results.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Views/Results.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Results.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Views/Results.vue?vue&type=template&id=3223b5f2&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Views/Results.vue?vue&type=template&id=3223b5f2&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_3223b5f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_3223b5f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_3223b5f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Results.vue?vue&type=template&id=3223b5f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=template&id=3223b5f2&scoped=true&");


/***/ }),

/***/ "./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_3223b5f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_3223b5f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_3223b5f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_3223b5f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_3223b5f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=template&id=3223b5f2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=template&id=3223b5f2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-wrapper", attrs: { "data-hash": "result" } },
    [
      _c(
        "div",
        { staticClass: "app-container" },
        [
          _c("div", { staticClass: "app-body" }, [
            _c(
              "h2",
              { staticClass: "title min-h-70" },
              [
                _c("transition", { attrs: { name: "fade" } }, [
                  _vm.show
                    ? _c("span", [
                        _vm._v("Your appoximate blood oxygen level is")
                      ])
                    : _vm._e()
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "result" }, [
              _vm.f_result.critical === "yes"
                ? _c("i", {
                    staticClass: "fas fa-exclamation-circle danger",
                    attrs: {
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "Critical"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "text" }, [
                _c("span", [_vm._v(_vm._s(_vm.f_result.result))]),
                _vm._v(" "),
                _c("span", { staticClass: "lite" }, [_vm._v("SpO2")])
              ]),
              _vm._v(" "),
              _c(
                "svg",
                {
                  attrs: {
                    width: "159",
                    height: "159",
                    id: "loader",
                    viewBox: "0 0 159 159",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("g", { attrs: { id: "circle_2" } }, [
                    _c("circle", {
                      attrs: {
                        id: "line_2",
                        cx: "79.8425",
                        cy: "79.8427",
                        r: "64.6015",
                        stroke: "white"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "g",
                      { attrs: { id: "circle_3", filter: "url(#filter0_d)" } },
                      [
                        _c("circle", {
                          attrs: {
                            id: "c",
                            cx: "79.5",
                            cy: "79.5",
                            r: "63.5",
                            stroke: "white",
                            "stroke-width": "7"
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("defs", [
                    _c(
                      "filter",
                      {
                        attrs: {
                          id: "filter0_d",
                          x: "0",
                          y: "0",
                          width: "159",
                          height: "159",
                          filterUnits: "userSpaceOnUse",
                          "color-interpolation-filters": "sRGB"
                        }
                      },
                      [
                        _c("feFlood", {
                          attrs: {
                            "flood-opacity": "0",
                            result: "BackgroundImageFix"
                          }
                        }),
                        _vm._v(" "),
                        _c("feColorMatrix", {
                          attrs: {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("feOffset"),
                        _vm._v(" "),
                        _c("feGaussianBlur", { attrs: { stdDeviation: "6" } }),
                        _vm._v(" "),
                        _c("feColorMatrix", {
                          attrs: {
                            type: "matrix",
                            values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                          }
                        }),
                        _vm._v(" "),
                        _c("feBlend", {
                          attrs: {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow"
                          }
                        }),
                        _vm._v(" "),
                        _c("feBlend", {
                          attrs: {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow",
                            result: "shape"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("transition", { attrs: { name: "fade" } }, [
            _vm.show
              ? _c("div", { staticClass: "app-footer" }, [
                  _c("div", { staticClass: "text-card t-sm" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.cardText) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "social-share" },
                    [
                      _c(
                        "ShareNetwork",
                        {
                          staticClass: "fb",
                          attrs: {
                            network: "facebook",
                            url: _vm.meta.url,
                            title: _vm.meta.title,
                            description: _vm.meta.description,
                            quote:
                              "I took my lungs test and this my result " +
                              _vm.f_result.result +
                              " SpO2",
                            media: _vm.meta.media
                          }
                        },
                        [_c("i", { staticClass: "fab fa-facebook-square" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "ShareNetwork",
                        {
                          staticClass: "tw",
                          attrs: {
                            network: "twitter",
                            url: _vm.meta.url,
                            title: _vm.meta.title,
                            description: _vm.meta.description,
                            quote:
                              "I took my lungs test and this my result " +
                              _vm.f_result.result +
                              " SpO2",
                            media: _vm.meta.media
                          }
                        },
                        [_c("i", { staticClass: "fab fa-twitter-square" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "ShareNetwork",
                        {
                          staticClass: "li",
                          attrs: {
                            network: "linkedIn",
                            url: _vm.meta.url,
                            title: _vm.meta.title,
                            description: _vm.meta.description,
                            quote:
                              "I took my lungs test and this my result " +
                              _vm.f_result.result +
                              " SpO2",
                            media: _vm.meta.media
                          }
                        },
                        [_c("i", { staticClass: "fab fa-linkedin" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "ShareNetwork",
                        {
                          staticClass: "wa",
                          attrs: {
                            network: "WhatsApp",
                            url: _vm.meta.url,
                            title: _vm.meta.title,
                            description: _vm.meta.description,
                            quote:
                              "I took my lungs test and this my result " +
                              _vm.f_result.result +
                              " SpO2",
                            media: _vm.meta.media
                          }
                        },
                        [_c("i", { staticClass: "fab fa-whatsapp-square" })]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "footer-btn-lite",
                      attrs: { href: "#" },
                      on: { click: _vm.tryAgain }
                    },
                    [_vm._v("Try again")]
                  )
                ])
              : _vm._e()
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Results.vue?vue&type=style&index=0&id=3223b5f2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5c7e9014", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);