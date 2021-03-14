(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_siteBar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/siteBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/siteBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      catigorys: {},
      productBycatigory: {},
      products: {}
    };
  },
  methods: {
    getcatigorys: function getcatigorys() {
      var _this = this;

      axios.get('/ApiCatigory').then(function (res) {
        _this.catigorys = res.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getproduct: function getproduct(catigory) {
      axios.get("/ApiCatigory/".concat(catigory.id)).then(function (res) {
        Event.$emit('productBycatigory', res.data);
      })["catch"](function (error) {
        return console.log(error);
      });
      Event.$emit('catigoryName', catigory.name);
    }
  },
  created: function created() {
    this.getcatigorys();
  }
});

/***/ }),

/***/ "./resources/js/components/siteBar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/siteBar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _siteBar_vue_vue_type_template_id_031806d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siteBar.vue?vue&type=template&id=031806d1& */ "./resources/js/components/siteBar.vue?vue&type=template&id=031806d1&");
/* harmony import */ var _siteBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./siteBar.vue?vue&type=script&lang=js& */ "./resources/js/components/siteBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _siteBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _siteBar_vue_vue_type_template_id_031806d1___WEBPACK_IMPORTED_MODULE_0__.render,
  _siteBar_vue_vue_type_template_id_031806d1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/siteBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/siteBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/siteBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./siteBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/siteBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/siteBar.vue?vue&type=template&id=031806d1&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/siteBar.vue?vue&type=template&id=031806d1& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_siteBar_vue_vue_type_template_id_031806d1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_siteBar_vue_vue_type_template_id_031806d1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_siteBar_vue_vue_type_template_id_031806d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./siteBar.vue?vue&type=template&id=031806d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/siteBar.vue?vue&type=template&id=031806d1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/siteBar.vue?vue&type=template&id=031806d1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/siteBar.vue?vue&type=template&id=031806d1& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar" }, [
      _c("div", { staticClass: "widget mercado-widget categories-widget" }, [
        _c("h2", { staticClass: "widget-title" }, [_vm._v("All Categories")]),
        _vm._v(" "),
        _c("div", { staticClass: "widget-content" }, [
          _c(
            "ul",
            { staticClass: "list-category" },
            _vm._l(_vm.catigorys, function(catigory) {
              return _c(
                "li",
                {
                  key: catigory.id,
                  staticClass: "category-item has-child-cate"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "cate-link pointer",
                      on: {
                        click: function($event) {
                          return _vm.getproduct(catigory)
                        }
                      }
                    },
                    [_vm._v(_vm._s(catigory.name))]
                  )
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "widget mercado-widget filter-widget brand-widget" },
      [
        _c("h2", { staticClass: "widget-title" }, [_vm._v("Brand")]),
        _vm._v(" "),
        _c("div", { staticClass: "widget-content" }, [
          _c(
            "ul",
            {
              staticClass: "list-style vertical-list list-limited",
              attrs: { "data-show": "6" }
            },
            [
              _c("li", { staticClass: "list-item" }, [
                _c(
                  "a",
                  { staticClass: "filter-link active", attrs: { href: "#" } },
                  [_vm._v("Fashion Clothings")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("Laptop Batteries")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("Printer & Ink")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("CPUs & Prosecsors")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("Sound & Speaker")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("Shop Smartphone & Tablets")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item default-hiden" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("Printer & Ink")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item default-hiden" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("CPUs & Prosecsors")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item default-hiden" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("Sound & Speaker")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item default-hiden" }, [
                _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
                  _vm._v("Shop Smartphone & Tablets")
                ])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "list-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn-control control-show-more",
                    attrs: {
                      "data-label":
                        'Show less<i class="fa fa-angle-up" aria-hidden="true"></i>',
                      href: "#"
                    }
                  },
                  [
                    _vm._v("Show more"),
                    _c("i", {
                      staticClass: "fa fa-angle-down",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ])
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "widget mercado-widget filter-widget price-filter" },
      [
        _c("h2", { staticClass: "widget-title" }, [_vm._v("Price")]),
        _vm._v(" "),
        _c("div", { staticClass: "widget-content" }, [
          _c("div", { attrs: { id: "slider-range" } }),
          _vm._v(" "),
          _c("p", [
            _c("label", { attrs: { for: "amount" } }, [_vm._v("Price:")]),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "text", id: "amount", readonly: "" }
            }),
            _vm._v(" "),
            _c("button", { staticClass: "filter-submit" }, [_vm._v("Filter")])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget mercado-widget filter-widget" }, [
      _c("h2", { staticClass: "widget-title" }, [_vm._v("Color")]),
      _vm._v(" "),
      _c("div", { staticClass: "widget-content" }, [
        _c("ul", { staticClass: "list-style vertical-list has-count-index" }, [
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("Red "),
              _c("span", [_vm._v("(217)")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("Yellow "),
              _c("span", [_vm._v("(179)")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("Black "),
              _c("span", [_vm._v("(79)")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("Blue "),
              _c("span", [_vm._v("(283)")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("Grey "),
              _c("span", [_vm._v("(116)")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("Pink "),
              _c("span", [_vm._v("(29)")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget mercado-widget filter-widget" }, [
      _c("h2", { staticClass: "widget-title" }, [_vm._v("Size")]),
      _vm._v(" "),
      _c("div", { staticClass: "widget-content" }, [
        _c("ul", { staticClass: "list-style inline-round " }, [
          _c("li", { staticClass: "list-item" }, [
            _c(
              "a",
              { staticClass: "filter-link active", attrs: { href: "#" } },
              [_vm._v("s")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("M")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("l")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-item" }, [
            _c("a", { staticClass: "filter-link ", attrs: { href: "#" } }, [
              _vm._v("xl")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget-banner" }, [
          _c("figure", [
            _c("img", {
              attrs: {
                src: "/assets/images/size-banner-widget.jpg",
                width: "270",
                height: "331",
                alt: ""
              }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget mercado-widget widget-product" }, [
      _c("h2", { staticClass: "widget-title" }, [_vm._v("Popular Products")]),
      _vm._v(" "),
      _c("div", { staticClass: "widget-content" }, [
        _c("ul", { staticClass: "products" }, [
          _c("li", { staticClass: "product-item" }, [
            _c("div", { staticClass: "product product-widget-style" }, [
              _c("div", { staticClass: "thumbnnail" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "detail.html",
                      title:
                        "Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    }
                  },
                  [
                    _c("figure", [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/products/digital_01.jpg",
                          alt: ""
                        }
                      })
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-info" }, [
                _c("a", { staticClass: "product-name", attrs: { href: "#" } }, [
                  _c("span", [
                    _vm._v("Radiant-360 R6 Wireless Omnidirectional Speaker...")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wrap-price" }, [
                  _c("span", { staticClass: "product-price" }, [
                    _vm._v("$168.00")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "product-item" }, [
            _c("div", { staticClass: "product product-widget-style" }, [
              _c("div", { staticClass: "thumbnnail" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "detail.html",
                      title:
                        "Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    }
                  },
                  [
                    _c("figure", [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/products/digital_17.jpg",
                          alt: ""
                        }
                      })
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-info" }, [
                _c("a", { staticClass: "product-name", attrs: { href: "#" } }, [
                  _c("span", [
                    _vm._v("Radiant-360 R6 Wireless Omnidirectional Speaker...")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wrap-price" }, [
                  _c("span", { staticClass: "product-price" }, [
                    _vm._v("$168.00")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "product-item" }, [
            _c("div", { staticClass: "product product-widget-style" }, [
              _c("div", { staticClass: "thumbnnail" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "detail.html",
                      title:
                        "Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    }
                  },
                  [
                    _c("figure", [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/products/digital_18.jpg",
                          alt: ""
                        }
                      })
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-info" }, [
                _c("a", { staticClass: "product-name", attrs: { href: "#" } }, [
                  _c("span", [
                    _vm._v("Radiant-360 R6 Wireless Omnidirectional Speaker...")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wrap-price" }, [
                  _c("span", { staticClass: "product-price" }, [
                    _vm._v("$168.00")
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "product-item" }, [
            _c("div", { staticClass: "product product-widget-style" }, [
              _c("div", { staticClass: "thumbnnail" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "detail.html",
                      title:
                        "Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                    }
                  },
                  [
                    _c("figure", [
                      _c("img", {
                        attrs: {
                          src: "/assets/images/products/digital_20.jpg",
                          alt: ""
                        }
                      })
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "product-info" }, [
                _c("a", { staticClass: "product-name", attrs: { href: "#" } }, [
                  _c("span", [
                    _vm._v("Radiant-360 R6 Wireless Omnidirectional Speaker...")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wrap-price" }, [
                  _c("span", { staticClass: "product-price" }, [
                    _vm._v("$168.00")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);