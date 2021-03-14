(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_productComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      products: {},
      catigoryName: ''
    };
  },
  props: {
    userId: ''
  },
  methods: {
    showproduct: function showproduct() {
      var _this = this;

      axios.get('api/Apishop').then(function (res) {
        _this.products = res.data;
        console.log(_this.products.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    addToCart: function addToCart(product) {
      axios.post('/ApiCart', {
        product: product,
        user: {
          id: this.userId
        }
      }).then(function (res) {
        console.log(product);
        flash('Added to your cart', 'success');
        $('#success').html(res.data.message);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('api/Apishop?page=' + page).then(function (response) {
        _this2.products = response.data;
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.showproduct(); // for: gate product peoduct fillter By catigory

    Event.$on('productBycatigory', function (products) {
      _this3.products = products;
    }); // for: change catigory name in product page

    Event.$on('catigoryName', function (catigoryName) {
      _this3.catigoryName = catigoryName;
      console.log(_this3.catigoryName);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/productComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/productComponent.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productComponent_vue_vue_type_template_id_b61c57ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productComponent.vue?vue&type=template&id=b61c57ce& */ "./resources/js/components/productComponent.vue?vue&type=template&id=b61c57ce&");
/* harmony import */ var _productComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/productComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _productComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _productComponent_vue_vue_type_template_id_b61c57ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _productComponent_vue_vue_type_template_id_b61c57ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/productComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/productComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/productComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./productComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/productComponent.vue?vue&type=template&id=b61c57ce&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/productComponent.vue?vue&type=template&id=b61c57ce& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productComponent_vue_vue_type_template_id_b61c57ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productComponent_vue_vue_type_template_id_b61c57ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productComponent_vue_vue_type_template_id_b61c57ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./productComponent.vue?vue&type=template&id=b61c57ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productComponent.vue?vue&type=template&id=b61c57ce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productComponent.vue?vue&type=template&id=b61c57ce&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/productComponent.vue?vue&type=template&id=b61c57ce& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "wrap-shop-control" }, [
      _c("h1", { staticClass: "shop-title" }, [
        _vm._v(" " + _vm._s(_vm.catigoryName.count || "All Categories"))
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "ul",
        { staticClass: "product-list grid-products equal-container" },
        _vm._l(_vm.products.data, function(product) {
          return _c("div", { key: product.id }, [
            _c("li", { staticClass: "col-lg-4 col-md-6 col-sm-6 col-xs-6 " }, [
              _c(
                "div",
                { staticClass: "product product-style-3 equal-elem " },
                [
                  _c("div", { staticClass: "product-thumnail" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "details/" + product.id,
                          title: product.title
                        }
                      },
                      [
                        _c("figure", [
                          _c("img", {
                            attrs: {
                              src: "/assets/images/products/" + product.image,
                              alt: product.title
                            }
                          })
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product-info" }, [
                    _c(
                      "a",
                      { staticClass: "product-name", attrs: { href: "#" } },
                      [_c("span", [_vm._v(" " + _vm._s(product.presentPrice))])]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "wrap-price" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v(_vm._s(product.title))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "wrap-price" }, [
                      _c("span", { staticClass: "product-price" }, [
                        _vm._v("Availability: " + _vm._s(product.Availability))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn add-to-cart",
                        on: {
                          click: function($event) {
                            return _vm.addToCart(product)
                          }
                        }
                      },
                      [_vm._v("Add To Cart")]
                    )
                  ])
                ]
              )
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "wrap-pagination-info" }, [
      _c(
        "ul",
        { staticClass: "page-numbers" },
        [
          _c(
            "pagination",
            {
              attrs: { data: _vm.products, limit: 1, "show-disabled": true },
              on: { "pagination-change-page": _vm.getResults }
            },
            [
              _c("span", { attrs: { slot: "prev-nav" }, slot: "prev-nav" }, [
                _vm._v("< Previous")
              ]),
              _vm._v(" "),
              _c("span", { attrs: { slot: "next-nav" }, slot: "next-nav" }, [
                _vm._v("Next >")
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("p", { staticClass: "result-count" }, [
        _vm._v(
          "Showing " +
            _vm._s(_vm.products.from) +
            "-" +
            _vm._s(_vm.products.to) +
            " of " +
            _vm._s(_vm.products.total) +
            " result"
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wrap-right" }, [
      _c("div", { staticClass: "sort-item orderby " }, [
        _c(
          "select",
          { staticClass: "use-chosen", attrs: { name: "orderby" } },
          [
            _c(
              "option",
              { attrs: { value: "menu_order", selected: "selected" } },
              [_vm._v("Default sorting")]
            ),
            _vm._v(" "),
            _c("option", { attrs: { value: "popularity" } }, [
              _vm._v("Sort by popularity")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "rating" } }, [
              _vm._v("Sort by average rating")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "date" } }, [
              _vm._v("Sort by newness")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "price" } }, [
              _vm._v("Sort by price: low to high")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "price-desc" } }, [
              _vm._v("Sort by price: high to low")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sort-item product-per-page" }, [
        _c(
          "select",
          { staticClass: "use-chosen", attrs: { name: "post-per-page" } },
          [
            _c("option", { attrs: { value: "12", selected: "selected" } }, [
              _vm._v("12 per page")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "16" } }, [_vm._v("16 per page")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "18" } }, [_vm._v("18 per page")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "21" } }, [_vm._v("21 per page")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "24" } }, [_vm._v("24 per page")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "30" } }, [_vm._v("30 per page")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "32" } }, [_vm._v("32 per page")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "change-display-mode" }, [
        _c(
          "a",
          {
            staticClass: "grid-mode display-mode active",
            attrs: { href: "#" }
          },
          [_c("i", { staticClass: "fa fa-th" }), _vm._v("Grid")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "list-mode display-mode",
            attrs: { href: "list.html" }
          },
          [_c("i", { staticClass: "fa fa-th-list" }), _vm._v("List")]
        )
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