(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1375:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Header/index.js





const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "jsx-631581741" + " " + "header",
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "jsx-631581741",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "jsx-631581741",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "jsx-631581741",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "jsx-631581741",
              children: "Anasayfa"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "jsx-631581741",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/about",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "jsx-631581741",
              children: "Hakk\u0131nda"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "jsx-631581741",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "jsx-631581741",
              children: "Blog"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "jsx-631581741",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/blog/post",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "jsx-631581741",
              children: "Post"
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "631581741",
      children: [".header.jsx-631581741{background-color:#fff;border-bottom:1px solid #ccc;}", ".header.jsx-631581741 ul.jsx-631581741{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".header.jsx-631581741 ul.jsx-631581741 li.jsx-631581741 a.jsx-631581741{height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-text-decoration:none;text-decoration:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;color:#333;}"]
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(1375); });
module.exports = __webpack_exports__;

})();