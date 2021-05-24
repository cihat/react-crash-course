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
/* harmony import */ var _popular_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popular.module.scss */ "./components/Popular/popular.module.scss");
/* harmony import */ var _popular_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_popular_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/mnt/c/Users/Tonysier/Desktop/cihat/github/react-crash-course/birlikte-next.js-ogreniyoruz/components/Popular/index.js",
    _this = undefined;




var popular = function popular(_ref) {
  var movies = _ref.movies;
  // console.log(movies)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_popular_module_scss__WEBPACK_IMPORTED_MODULE_4___default().popular),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: "Popular Films"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_popular_module_scss__WEBPACK_IMPORTED_MODULE_4___default().popular) - inner,
      children: movies.results.map(function (movie) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/film/".concat(movie.id),
          className: (_popular_module_scss__WEBPACK_IMPORTED_MODULE_4___default().movie) - cart,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3B1bGFyL2luZGV4LmpzIl0sIm5hbWVzIjpbInBvcHVsYXIiLCJtb3ZpZXMiLCJzdHlsZXMiLCJpbm5lciIsInJlc3VsdHMiLCJtYXAiLCJtb3ZpZSIsImlkIiwiY2FydCIsInRpdGxlIiwicG9zdGVyX3BhdGgiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQzlCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHFFQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUEscUVBQUEsR0FBZUMsS0FBL0I7QUFBQSxnQkFDR0YsTUFBTSxDQUFDRyxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsS0FBRDtBQUFBLDRCQUNsQiw4REFBQyxrREFBRDtBQUNFLGNBQUksa0JBQVdBLEtBQUssQ0FBQ0MsRUFBakIsQ0FETjtBQUVFLG1CQUFTLEVBQUVMLG1FQUFBLEdBQWFNLElBRjFCO0FBQUEsaUNBS0U7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLRixLQUFLLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsaUJBQUcsNkRBQXNESCxLQUFLLENBQUNJLFdBQTVELENBREw7QUFFRSxpQkFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixXQUdPSixLQUFLLENBQUNDLEVBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEa0I7QUFBQSxPQUFuQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXpCRDs7QUEyQk8sU0FBZUksY0FBdEI7QUFBQTtBQUFBOzs7NFlBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCQyxrQkFBL0IsU0FBK0JBLE1BQS9CO0FBQUEsNkNBQ0U7QUFDTEMsbUJBQUssRUFBRTtBQUNMRCxzQkFBTSxFQUFOQTtBQURLO0FBREYsYUFERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBUVAsK0RBQWVaLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2QwY2VhOTJhYjA1ZDVlM2Q4ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9wdWxhci5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IHBvcHVsYXIgPSAoeyBtb3ZpZXMgfSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKG1vdmllcylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdWxhcn0+XHJcbiAgICAgIDxoMj5Qb3B1bGFyIEZpbG1zPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1bGFyLWlubmVyfT5cclxuICAgICAgICB7bW92aWVzLnJlc3VsdHMubWFwKChtb3ZpZSkgPT4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17YC9maWxtLyR7bW92aWUuaWR9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW92aWUtY2FydH1cclxuICAgICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGgzPnttb3ZpZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnRoZW1vdmllZGIub3JnL3QvcC93MjIwX2FuZF9oMzMwX2ZhY2Uke21vdmllLnBvc3Rlcl9wYXRofWB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcGFyYW1zXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3B1bGFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=