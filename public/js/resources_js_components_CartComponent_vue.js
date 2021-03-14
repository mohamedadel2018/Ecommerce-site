(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CartComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CartComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CartComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOut */ "./resources/js/components/checkOut.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      total: '',
      cartItems: [],
      totalPrice: '',
      cartupdate: ''
    };
  },
  components: {
    checkOut: _checkOut__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: ['userId'],
  methods: {
    getCart: function getCart() {
      var _this = this;

      axios.get('/ApiCart').then(function (res) {
        _this.cartItems = res.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    DeleteCart: function DeleteCart(id) {
      var _this2 = this;

      axios["delete"]("/ApiCart/".concat(id)).then(function (res) {
        res.data;

        _this2.getCart();

        flash('product is Deleted from your Cart', 'success');
      });
    },
    addamunt: function addamunt(cartItem) {
      if (cartItem.quantity < cartItem.attributes['Availability']) {
        this.updatequantity(cartItem.id);
        return cartItem.quantity++;
      } else {
        flash('Maximum limit From ' + cartItem.name, 'success');
      }
    },
    subamunt: function subamunt(cartItem) {
      if (cartItem.quantity > 0) {
        return cartItem.quantity--;
      } else if (cartItem.quantity == 0) {
        this.DeleteCart(cartItem.id);
        this.getCart();
      }
    },
    updatequantity: function updatequantity(id) {
      var _this3 = this;

      axios.put("/ApiCart/".concat(id)).then(function (res) {
        res.data;

        _this3.getCart();
      }).then(function (error) {
        return console.log(error);
      });
    }
  },
  created: function created() {
    this.getCart();
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/checkOut.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/checkOut.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['cartItem', 'total', 'subtotal'],
  data: function data() {
    return {};
  },
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ "./resources/js/components/CartComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/CartComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CartComponent_vue_vue_type_template_id_e7ab8a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=template&id=e7ab8a3c& */ "./resources/js/components/CartComponent.vue?vue&type=template&id=e7ab8a3c&");
/* harmony import */ var _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/CartComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CartComponent_vue_vue_type_template_id_e7ab8a3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CartComponent_vue_vue_type_template_id_e7ab8a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CartComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/checkOut.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/checkOut.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkOut_vue_vue_type_template_id_6a68d91e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOut.vue?vue&type=template&id=6a68d91e& */ "./resources/js/components/checkOut.vue?vue&type=template&id=6a68d91e&");
/* harmony import */ var _checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkOut.vue?vue&type=script&lang=js& */ "./resources/js/components/checkOut.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _checkOut_vue_vue_type_template_id_6a68d91e___WEBPACK_IMPORTED_MODULE_0__.render,
  _checkOut_vue_vue_type_template_id_6a68d91e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/checkOut.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CartComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/CartComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CartComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/checkOut.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/checkOut.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkOut.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/checkOut.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CartComponent.vue?vue&type=template&id=e7ab8a3c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/CartComponent.vue?vue&type=template&id=e7ab8a3c& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_e7ab8a3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_e7ab8a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_e7ab8a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CartComponent.vue?vue&type=template&id=e7ab8a3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CartComponent.vue?vue&type=template&id=e7ab8a3c&");


/***/ }),

/***/ "./resources/js/components/checkOut.vue?vue&type=template&id=6a68d91e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/checkOut.vue?vue&type=template&id=6a68d91e& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_template_id_6a68d91e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_template_id_6a68d91e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkOut_vue_vue_type_template_id_6a68d91e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./checkOut.vue?vue&type=template&id=6a68d91e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/checkOut.vue?vue&type=template&id=6a68d91e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CartComponent.vue?vue&type=template&id=e7ab8a3c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CartComponent.vue?vue&type=template&id=e7ab8a3c& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    [
      _vm._l(_vm.cartItems.cartItems, function(cartItem) {
        return _c("li", { key: cartItem.id, staticClass: "pr-cart-item" }, [
          _c("div", { staticClass: "product-image" }, [
            _c("figure", [
              _c("img", {
                attrs: {
                  src:
                    "/assets/images/products/" + cartItem.attributes["image"],
                  alt: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "product-name" }, [
            _c("a", { staticClass: "link-to-product", attrs: { href: "#" } }, [
              _vm._v(_vm._s(cartItem.name))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "price-field produtc-price" }, [
            _c("p", { staticClass: "price" }, [
              _vm._v("$" + _vm._s(cartItem.price))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "quantity" }, [
            _c("div", { staticClass: "quantity-input" }, [
              _c("input", {
                attrs: {
                  type: "text",
                  name: "product-quatity",
                  "data-max": "10",
                  pattern: "[0-9]*"
                },
                domProps: { value: cartItem.quantity }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "btn btn-increase",
                on: {
                  click: function($event) {
                    return _vm.addamunt(cartItem)
                  },
                  change: function($event) {
                    return _vm.updatequantity(cartItem.id)
                  }
                }
              }),
              _vm._v(" "),
              _c("a", {
                staticClass: "btn btn-reduce",
                on: {
                  click: function($event) {
                    return _vm.subamunt(cartItem)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "price-field sub-total" }, [
            _c("p", { staticClass: "price" }, [
              _vm._v("$" + _vm._s(cartItem.price * cartItem.quantity))
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "delete",
              on: {
                click: function($event) {
                  return _vm.DeleteCart(cartItem.id)
                }
              }
            },
            [_vm._m(0, true)]
          )
        ])
      }),
      _vm._v(" "),
      _c("check-Out", {
        attrs: { total: _vm.cartItems.total, subtotal: _vm.cartItems.subtotal }
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "btn btn-delete" }, [
      _c("span", [_vm._v("Delete from your cart")]),
      _vm._v(" "),
      _c("i", {
        staticClass: "fa fa-times-circle",
        attrs: { "aria-hidden": "false" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/checkOut.vue?vue&type=template&id=6a68d91e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/checkOut.vue?vue&type=template&id=6a68d91e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "summary" }, [
    _c("div", { staticClass: "order-summary" }, [
      _c("h4", { staticClass: "title-box" }, [_vm._v("Order Summary")]),
      _vm._v(" "),
      _c("p", { staticClass: "summary-info" }, [
        _c("span", { staticClass: "title" }, [_vm._v("Subtotal")]),
        _c("b", { staticClass: "index" }, [_vm._v(_vm._s(_vm.subtotal))])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("p", { staticClass: "summary-info total-info " }, [
        _c("span", { staticClass: "title" }, [_vm._v("Total")]),
        _c("b", { staticClass: "index" }, [_vm._v(_vm._s(_vm.total))])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "summary-info" }, [
      _c("span", { staticClass: "title" }, [_vm._v("Shipping")]),
      _c("b", { staticClass: "index" }, [_vm._v("Free Shipping")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "checkout-info" }, [
      _c("label", { staticClass: "checkbox-field" }, [
        _c("input", {
          staticClass: "frm-input ",
          attrs: {
            name: "have-code",
            id: "have-code",
            value: "",
            type: "checkbox"
          }
        }),
        _c("span", [_vm._v("I have promo code")])
      ]),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "btn btn-checkout", attrs: { href: "checkout.html" } },
        [_vm._v("Check out")]
      ),
      _vm._v(" "),
      _c("a", { staticClass: "link-to-shop", attrs: { href: "shop.html" } }, [
        _vm._v("Continue Shopping"),
        _c("i", {
          staticClass: "fa fa-arrow-circle-right",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "update-clear" }, [
      _c("a", { staticClass: "btn btn-clear", attrs: { href: "#" } }, [
        _vm._v("Clear Shopping Cart")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "btn btn-update", attrs: { href: "#" } }, [
        _vm._v("Update Shopping Cart")
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