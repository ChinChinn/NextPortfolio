"use strict";
(() => {
var exports = {};
exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ github),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(850);
;// CONCATENATED MODULE: ./components/_error.js


const _error = ({ statusCode  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: statusCode ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            className: "text-center",
            children: [
                "Could not load your page : Status Code ",
                statusCode
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "CVould not get this page"
        })
    }));
};
/* harmony default export */ const components_error = (_error);

;// CONCATENATED MODULE: ./pages/github.js



const Github = ({ user , statusCode  })=>{
    if (statusCode) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(components_error, {
            statusCode: statusCode
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        footer: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-4 offset-md-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "card card-body text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: user.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: user.avatar_url,
                            alt: "/"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: user.bio
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: user.blog,
                            target: "_blank",
                            className: "btn btn-outline-info my-2",
                            children: "My blog"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: user.html_url,
                            target: "blank",
                            className: "btn btn-primary",
                            children: "Go to github"
                        })
                    ]
                })
            })
        })
    }));
};
async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/ChinChinn');
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status : false;
    console.log(data);
    return {
        props: {
            user: data,
            statusCode
        }
    };
}
/* harmony default export */ const github = (Github);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,850], () => (__webpack_exec__(901)));
module.exports = __webpack_exports__;

})();