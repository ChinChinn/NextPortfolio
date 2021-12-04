"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Navbar.js


const Navbar = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "navbar-brand",
                    children: "Carlos Chin"
                })
            })
        })
    }));
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({ children , footer =true  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            console.log(url);
            external_nprogress_default().start();
        };
        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', ()=>external_nprogress_default().done()
        );
        return ()=>{
            router.events.off('routerChangeStart', handleRouteChange);
        };
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "container py-4",
                children: children
            }),
            footer && /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "bg-info text-light text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "\xa9 Carlos Chin Portfolio"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "2000 - ",
                                new Date().getFullYear()
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Made on earth by humans... Trust me."
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;