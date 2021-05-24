self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Popular/index.js":
/*!*************************************!*\
  !*** ./components/Popular/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var _mnt_c_Users_Tonysier_Desktop_cihat_github_react_crash_course_birlikte_next_js_ogreniyoruz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _mnt_c_Users_Tonysier_Desktop_cihat_github_react_crash_course_birlikte_next_js_ogreniyoruz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mnt_c_Users_Tonysier_Desktop_cihat_github_react_crash_course_birlikte_next_js_ogreniyoruz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Users_Tonysier_Desktop_cihat_github_react_crash_course_birlikte_next_js_ogreniyoruz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/mnt/c/Users/Tonysier/Desktop/cihat/github/react-crash-course/birlikte-next.js-ogreniyoruz/components/Popular/index.js",
    _this = undefined;




var popular = function popular(_ref) {
  var movies = _ref.movies;
  // console.log(movies)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "popular",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: "Popular Films"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "popular-inner",
      children: movies.results.map(function (movie) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/film/".concat(movie.id),
          className: "movie-cart",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              children: movie.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              src: "https://www.themoviedb.org/t/p/w220_and_h330_face".concat(movie.poster_path),
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)
        }, movie.id, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = (0,_mnt_c_Users_Tonysier_Desktop_cihat_github_react_crash_course_birlikte_next_js_ogreniyoruz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_mnt_c_Users_Tonysier_Desktop_cihat_github_react_crash_course_birlikte_next_js_ogreniyoruz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var params;
    return _mnt_c_Users_Tonysier_Desktop_cihat_github_react_crash_course_birlikte_next_js_ogreniyoruz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref2.params;
            return _context.abrupt("return", {
              props: {
                params: params
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (popular);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3B1bGFyL2luZGV4LmpzIl0sIm5hbWVzIjpbInBvcHVsYXIiLCJtb3ZpZXMiLCJyZXN1bHRzIiwibWFwIiwibW92aWUiLCJpZCIsInRpdGxlIiwicG9zdGVyX3BhdGgiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFnQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUM5QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNHQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxLQUFEO0FBQUEsNEJBQ2xCLDhEQUFDLGtEQUFEO0FBQ0UsY0FBSSxrQkFBV0EsS0FBSyxDQUFDQyxFQUFqQixDQUROO0FBRUUsbUJBQVMsRUFBQyxZQUZaO0FBQUEsaUNBS0U7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLRCxLQUFLLENBQUNFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsaUJBQUcsNkRBQXNERixLQUFLLENBQUNHLFdBQTVELENBREw7QUFFRSxpQkFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixXQUdPSCxLQUFLLENBQUNDLEVBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEa0I7QUFBQSxPQUFuQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXpCRDs7QUEyQk8sU0FBZUcsY0FBdEI7QUFBQTtBQUFBOzs7NFlBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCQyxrQkFBL0IsU0FBK0JBLE1BQS9CO0FBQUEsNkNBQ0U7QUFDTEMsbUJBQUssRUFBRTtBQUNMRCxzQkFBTSxFQUFOQTtBQURLO0FBREYsYUFERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUVAsK0RBQWVULE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWM4ZjYxMTFlMWU0NGQ3ODE5MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgbW9kdWxlTmFtZSBmcm9tICcuL3BvcHVsYXIubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBwb3B1bGFyID0gKHsgbW92aWVzIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhtb3ZpZXMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVsYXJcIj5cclxuICAgICAgPGgyPlBvcHVsYXIgRmlsbXM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVsYXItaW5uZXJcIj5cclxuICAgICAgICB7bW92aWVzLnJlc3VsdHMubWFwKChtb3ZpZSkgPT4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17YC9maWxtLyR7bW92aWUuaWR9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW92aWUtY2FydFwiXHJcbiAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxoMz57bW92aWUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy90L3AvdzIyMF9hbmRfaDMzMF9mYWNlJHttb3ZpZS5wb3N0ZXJfcGF0aH1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9