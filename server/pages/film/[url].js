(function() {
var exports = {};
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 3161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _film_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5425);
/* harmony import */ var _film_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_film_module_scss__WEBPACK_IMPORTED_MODULE_2__);





const FilmDetail = ({
  movie
}) => {
  // console.log(movie)
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_film_module_scss__WEBPACK_IMPORTED_MODULE_2___default().movie),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: movie.title
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_film_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cover),
      style: {
        backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      children: movie.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_film_module_scss__WEBPACK_IMPORTED_MODULE_2___default().summary),
      children: movie.overview
    })]
  });
};

async function getServerSideProps({
  params
}) {
  const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=dd6e04fc4a1cff82f8e5bdc793d3137e&language=tr-TR`);
  const movie = await request.json();
  return {
    props: {
      movie
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (FilmDetail);

/***/ }),

/***/ 5425:
/***/ (function(module) {

// Exports
module.exports = {
	"movie": "film_movie__ZzLW3",
	"summary": "film_summary__24jPW",
	"cover": "film_cover__1HL5T"
};


/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3161));
module.exports = __webpack_exports__;

})();