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
  console.log(movies);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_popular_module_scss__WEBPACK_IMPORTED_MODULE_4___default().popular),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      children: "Popular Films"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_popular_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["popular-inner"]),
      children: movies.results.map(function (movie) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/film/".concat(movie.id),
          className: (_popular_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["movie-cart"]),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              children: movie.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              src: "https://www.themoviedb.org/t/p/w220_and_h330_face".concat(movie.poster_path),
              alt: "".concat(movie.title),
              title: "".concat(movie.title)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3B1bGFyL2luZGV4LmpzIl0sIm5hbWVzIjpbInBvcHVsYXIiLCJtb3ZpZXMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicmVzdWx0cyIsIm1hcCIsIm1vdmllIiwiaWQiLCJ0aXRsZSIsInBvc3Rlcl9wYXRoIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFnQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUM5QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcscUVBQWhCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFFQSw4RUFBaEI7QUFBQSxnQkFDR0gsTUFBTSxDQUFDSSxPQUFQLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsS0FBRDtBQUFBLDRCQUNsQiw4REFBQyxrREFBRDtBQUNFLGNBQUksa0JBQVdBLEtBQUssQ0FBQ0MsRUFBakIsQ0FETjtBQUVFLG1CQUFTLEVBQUVKLDJFQUZiO0FBQUEsaUNBS0U7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLRyxLQUFLLENBQUNFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsaUJBQUcsNkRBQXNERixLQUFLLENBQUNHLFdBQTVELENBREw7QUFFRSxpQkFBRyxZQUFLSCxLQUFLLENBQUNFLEtBQVgsQ0FGTDtBQUdFLG1CQUFLLFlBQUtGLEtBQUssQ0FBQ0UsS0FBWDtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsV0FHT0YsS0FBSyxDQUFDQyxFQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGtCO0FBQUEsT0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0ExQkQ7O0FBNEJPLFNBQWVHLGNBQXRCO0FBQUE7QUFBQTs7OzRZQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQkMsa0JBQS9CLFNBQStCQSxNQUEvQjtBQUFBLDZDQUNFO0FBQ0xDLG1CQUFLLEVBQUU7QUFDTEQsc0JBQU0sRUFBTkE7QUFESztBQURGLGFBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVFQLCtEQUFlWixPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxYjU5ODlkZTc0YzU0ZTdkYzU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BvcHVsYXIubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBwb3B1bGFyID0gKHsgbW92aWVzIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhtb3ZpZXMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVsYXJ9PlxyXG4gICAgICA8aDI+UG9wdWxhciBGaWxtczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3BvcHVsYXItaW5uZXInXX0+XHJcbiAgICAgICAge21vdmllcy5yZXN1bHRzLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e2AvZmlsbS8ke21vdmllLmlkfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydtb3ZpZS1jYXJ0J119XHJcbiAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxoMz57bW92aWUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy90L3AvdzIyMF9hbmRfaDMzMF9mYWNlJHttb3ZpZS5wb3N0ZXJfcGF0aH1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgJHttb3ZpZS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2Ake21vdmllLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwYXJhbXNcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==