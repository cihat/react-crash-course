(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ pages_getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Popular/popular.module.scss
var popular_module = __webpack_require__(5907);
var popular_module_default = /*#__PURE__*/__webpack_require__.n(popular_module);
;// CONCATENATED MODULE: ./components/Popular/index.js





const popular = ({
  movies
}) => {
  console.log(movies);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (popular_module_default()).popular,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Popular Films"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (popular_module_default())["popular-inner"],
      children: movies.results.map(movie => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/film/${movie.id}`,
        className: (popular_module_default())["movie-cart"],
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: movie.title
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`,
            alt: `${movie.title}`,
            title: `${movie.title}`
          })]
        })
      }, movie.id))
    })]
  });
};

async function getStaticProps({
  params
}) {
  return {
    props: {
      params
    }
  };
}
/* harmony default export */ var Popular = (popular);
;// CONCATENATED MODULE: ./pages/index.js






const Home = ({
  movies
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Create Next App"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Popular, {
      movies: movies
    })]
  });
};

async function pages_getStaticProps() {
  const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dd6e04fc4a1cff82f8e5bdc793d3137e&language=en-US&page=1`);
  const movies = await request.json();
  return {
    props: {
      movies
    }
  };
}
/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 5907:
/***/ (function(module) {

// Exports
module.exports = {
	"popular": "popular_popular__2rnUG",
	"popular-inner": "popular_popular-inner__39PIa"
};


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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(2643); });
module.exports = __webpack_exports__;

})();