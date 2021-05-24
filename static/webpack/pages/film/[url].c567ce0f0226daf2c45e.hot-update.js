self["webpackHotUpdate_N_E"]("pages/film/[url]",{

/***/ "./pages/film/[url].js":
/*!*****************************!*\
  !*** ./pages/film/[url].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _film_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./film.module.scss */ "./pages/film/film.module.scss");
/* harmony import */ var _film_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_film_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/mnt/c/Users/Tonysier/Desktop/cihat/github/react-crash-course/birlikte-next.js-ogreniyoruz/pages/film/[url].js",
    _this = undefined;




var FilmDetail = function FilmDetail(_ref) {
  var movie = _ref.movie;
  // console.log(movie)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_film_module_scss__WEBPACK_IMPORTED_MODULE_2___default().movie),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: movie.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_film_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cover),
      style: {
        backgroundImage: "url(https://www.themoviedb.org/t/p/original".concat(movie.backdrop_path, ")")
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: movie.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_film_module_scss__WEBPACK_IMPORTED_MODULE_2___default().summary),
      children: movie.overview
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = FilmDetail;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (FilmDetail);

var _c;

$RefreshReg$(_c, "FilmDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsbS9bdXJsXS5qcyJdLCJuYW1lcyI6WyJGaWxtRGV0YWlsIiwibW92aWUiLCJzdHlsZSIsInRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2Ryb3BfcGF0aCIsIm92ZXJ2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2hDO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLGdFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUUQsS0FBSyxDQUFDRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUNFLGVBQVMsRUFBRUQsZ0VBRGI7QUFFRSxXQUFLLEVBQUU7QUFDTEUsdUJBQWUsdURBQWdESCxLQUFLLENBQUNJLGFBQXREO0FBRFY7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFVRTtBQUFBLGdCQUFLSixLQUFLLENBQUNFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBV0U7QUFBSyxlQUFTLEVBQUVELGtFQUFoQjtBQUFBLGdCQUFnQ0QsS0FBSyxDQUFDSztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQWpCRDs7S0FBTU4sVTs7QUFpQ04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmlsbS9bdXJsXS5jNTY3Y2UwZjAyMjZkYWYyYzQ1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9maWxtLm1vZHVsZS5zY3NzXCJcclxuXHJcbmNvbnN0IEZpbG1EZXRhaWwgPSAoeyBtb3ZpZSB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cobW92aWUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tb3ZpZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57bW92aWUudGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5jb3Zlcn1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vd3d3LnRoZW1vdmllZGIub3JnL3QvcC9vcmlnaW5hbCR7bW92aWUuYmFja2Ryb3BfcGF0aH0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxoMz57bW92aWUudGl0bGV9PC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1bW1hcnl9Pnttb3ZpZS5vdmVydmlld308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtwYXJhbXMudXJsfT9hcGlfa2V5PWRkNmUwNGZjNGExY2ZmODJmOGU1YmRjNzkzZDMxMzdlJmxhbmd1YWdlPXRyLVRSYFxyXG4gIClcclxuXHJcbiAgY29uc3QgbW92aWUgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbW92aWUsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsbURldGFpbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9