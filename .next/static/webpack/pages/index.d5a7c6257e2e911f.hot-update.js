"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"skills\": function() { return /* binding */ skills; },\n/* harmony export */   \"experiences\": function() { return /* binding */ experiences; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar skills = [\n    {\n        skill: 'Scratch 3',\n        percentage: 90\n    },\n    {\n        skill: 'Illustrator',\n        percentage: 67\n    },\n    {\n        skill: 'Photoshop',\n        percentage: 65\n    },\n    {\n        skill: 'Premiere Pro',\n        percentage: 55\n    },\n    {\n        skill: 'Unity',\n        percentage: 40\n    },\n    {\n        skill: 'Arduino',\n        percentage: 87\n    },\n    {\n        skill: 'LEGO EV3',\n        percentage: '100'\n    },\n    {\n        skill: 'Godot',\n        percentage: '60'\n    }\n];\nvar experiences = [\n    {\n        exp: \"Jr Game programmer\",\n        description: \"Jr programmer for RCK Games in the development of the LawLer's Barbecue videogame. The videogame is available to download in the App Store and Play store as well. The game was developed using the Godot engine.\",\n        from: \"May 2021\",\n        to: \"August 2021\"\n    },\n    {\n        exp: \"Object Oriented Programming teacher - High School Level\",\n        description: \"High School Programming teacher of Object Oriented programming with C++ - Teacher for one semester\",\n        from: \"2020\",\n        to: \"2020\"\n    },\n    {\n        exp: \"VideoGames Programming Teacher\",\n        description: \"Programming teacher of Scratch, Game Design, Arduino, LEGO MINDSTORMS EV3, Character Animation\",\n        from: \"2015\"\n    }, \n];\nvar projects = [\n    {\n        name: \"Lawler's Super Service\",\n        description: \"I worked as a Jr. programmer in the develop of the Lawler's super service videogame. The videogame is available to download in the Apps Store and Play store as well but only in the US. The game consists of Tasty the pig delivering food to the costumers that enters the restaurant with every correct order Tasty delivers it will gain points that can be exchanged by real food on all the Lawler's Restaurants. My participation consisted in the programming of the screens flow, and the overall game mechanics including character and enemies behavior, food items, points system, persistence manager and rewards system The game was developed using the Godot engine.\",\n        image: \"portfolio1.jpeg\"\n    },\n    {\n        name: \"Frutiyuks de Animayuks\",\n        description: \"Reskin and adaptation of the videogame for being piblush to the play store. The videogame was developed using the Unity engine. My participation was to change all the graphics and modify some of the parameters to the game to be fully functional on android phones. The project was a colaboration between the Animayuks Group and YOUGUI S.C.P. the main goal was to create an interactive product that shows the spirit and mision of the Animayuks group that is to show the Yucatecan fauna and culture. My participation in the development include: * Change the default sprites of the game, scale, chage their position check if the animations were working correctly * Change the parameters of the scripts to the points systems * Check and adjust the flow between screens of the game * Check and adjust the parameters of the backgrounds of the gameplay\",\n        image: \"portfolio2.jpg\"\n    },\n    {\n        name: \"YOUGUI Web Page\",\n        description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias ducimus cupiditate dolore quasi rerum qui fugiat dicta nam perferendis quas ab ullam porro nisi sapiente, nobis non maiores? Ipsam.\",\n        image: \"portfolio3.png\"\n    }\n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxHQUFLLENBQUNBLE1BQU0sR0FBRyxDQUFDO0lBQ25CLENBQUM7UUFDR0MsS0FBSyxFQUFFLENBQVc7UUFDbEJDLFVBQVUsRUFBRSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxDQUFDO1FBQ0dELEtBQUssRUFBRSxDQUFhO1FBQ3BCQyxVQUFVLEVBQUUsRUFBRTtJQUNsQixDQUFDO0lBQ0QsQ0FBQztRQUNHRCxLQUFLLEVBQUUsQ0FBVztRQUNsQkMsVUFBVSxFQUFFLEVBQUU7SUFDbEIsQ0FBQztJQUNELENBQUM7UUFDR0QsS0FBSyxFQUFFLENBQWM7UUFDckJDLFVBQVUsRUFBRSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxDQUFDO1FBQ0dELEtBQUssRUFBRSxDQUFPO1FBQ2RDLFVBQVUsRUFBRSxFQUFFO0lBQ2xCLENBQUM7SUFDRyxDQUFDO1FBQ0RELEtBQUssRUFBRSxDQUFTO1FBQ2hCQyxVQUFVLEVBQUUsRUFBRTtJQUNsQixDQUFDO0lBQ0QsQ0FBQztRQUNHRCxLQUFLLEVBQUUsQ0FBVTtRQUNqQkMsVUFBVSxFQUFFLENBQUs7SUFDckIsQ0FBQztJQUNELENBQUM7UUFDR0QsS0FBSyxFQUFFLENBQU87UUFDZEMsVUFBVSxFQUFFLENBQUk7SUFDcEIsQ0FBQztBQUVMLENBQUM7QUFFTSxHQUFLLENBQUNDLFdBQVcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7UUFDR0MsR0FBRyxFQUFFLENBQW9CO1FBQ3pCQyxXQUFXLEVBQUUsQ0FBbU47UUFDaE9DLElBQUksRUFBRSxDQUFVO1FBQ2hCQyxFQUFFLEVBQUUsQ0FBYTtJQUNyQixDQUFDO0lBR0QsQ0FBQztRQUNHSCxHQUFHLEVBQUUsQ0FBeUQ7UUFDOURDLFdBQVcsRUFBRSxDQUFvRztRQUNqSEMsSUFBSSxFQUFFLENBQU07UUFDWkMsRUFBRSxFQUFFLENBQU07SUFDZCxDQUFDO0lBRUQsQ0FBQztRQUNHSCxHQUFHLEVBQUUsQ0FBZ0M7UUFDckNDLFdBQVcsRUFBRSxDQUFnRztRQUM3R0MsSUFBSSxFQUFFLENBQU07SUFFaEIsQ0FBQztBQUVMLENBQUM7QUFFTSxHQUFLLENBQUNFLFFBQVEsR0FBRyxDQUFDO0lBQ3JCLENBQUM7UUFDR0MsSUFBSSxFQUFFLENBQXdCO1FBQzlCSixXQUFXLEVBQUUsQ0FBc3BCO1FBQ25xQkssS0FBSyxFQUFFLENBQWlCO0lBQzVCLENBQUM7SUFFRCxDQUFDO1FBQ0dELElBQUksRUFBRSxDQUF3QjtRQUM5QkosV0FBVyxFQUFFLENBQTgwQjtRQUMzMUJLLEtBQUssRUFBRSxDQUFnQjtJQUMzQixDQUFDO0lBRUQsQ0FBQztRQUNHRCxJQUFJLEVBQUUsQ0FBaUI7UUFDdkJKLFdBQVcsRUFBRSxDQUFnTjtRQUM3TkssS0FBSyxFQUFFLENBQWdCO0lBQzNCLENBQUM7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Byb2ZpbGUuanM/OWRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnU2NyYXRjaCAzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA5MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdJbGx1c3RyYXRvcicsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUGhvdG9zaG9wJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA2NSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdQcmVtaWVyZSBQcm8nLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDU1LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1VuaXR5JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA0MCxcclxuICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHNraWxsOiAnQXJkdWlubycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTEVHTyBFVjMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICcxMDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0dvZG90JyxcclxuICAgICAgICBwZXJjZW50YWdlOiAnNjAnLFxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGV4cDogXCJKciBHYW1lIHByb2dyYW1tZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJKciBwcm9ncmFtbWVyIGZvciBSQ0sgR2FtZXMgaW4gdGhlIGRldmVsb3BtZW50IG9mIHRoZSBMYXdMZXIncyBCYXJiZWN1ZSB2aWRlb2dhbWUuIFRoZSB2aWRlb2dhbWUgaXMgYXZhaWxhYmxlIHRvIGRvd25sb2FkIGluIHRoZSBBcHAgU3RvcmUgYW5kIFBsYXkgc3RvcmUgYXMgd2VsbC4gVGhlIGdhbWUgd2FzIGRldmVsb3BlZCB1c2luZyB0aGUgR29kb3QgZW5naW5lLlwiLFxyXG4gICAgICAgIGZyb206IFwiTWF5IDIwMjFcIixcclxuICAgICAgICB0bzogXCJBdWd1c3QgMjAyMVwiXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAge1xyXG4gICAgICAgIGV4cDogXCJPYmplY3QgT3JpZW50ZWQgUHJvZ3JhbW1pbmcgdGVhY2hlciAtIEhpZ2ggU2Nob29sIExldmVsXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGlnaCBTY2hvb2wgUHJvZ3JhbW1pbmcgdGVhY2hlciBvZiBPYmplY3QgT3JpZW50ZWQgcHJvZ3JhbW1pbmcgd2l0aCBDKysgLSBUZWFjaGVyIGZvciBvbmUgc2VtZXN0ZXJcIixcclxuICAgICAgICBmcm9tOiBcIjIwMjBcIixcclxuICAgICAgICB0bzogXCIyMDIwXCIgXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBleHA6IFwiVmlkZW9HYW1lcyBQcm9ncmFtbWluZyBUZWFjaGVyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHJvZ3JhbW1pbmcgdGVhY2hlciBvZiBTY3JhdGNoLCBHYW1lIERlc2lnbiwgQXJkdWlubywgTEVHTyBNSU5EU1RPUk1TIEVWMywgQ2hhcmFjdGVyIEFuaW1hdGlvblwiLFxyXG4gICAgICAgIGZyb206IFwiMjAxNVwiLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkxhd2xlcidzIFN1cGVyIFNlcnZpY2VcIiwgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSSB3b3JrZWQgYXMgYSBKci4gcHJvZ3JhbW1lciBpbiB0aGUgZGV2ZWxvcCBvZiB0aGUgTGF3bGVyJ3Mgc3VwZXIgc2VydmljZSB2aWRlb2dhbWUuIFRoZSB2aWRlb2dhbWUgaXMgYXZhaWxhYmxlIHRvIGRvd25sb2FkIGluIHRoZSBBcHBzIFN0b3JlIGFuZCBQbGF5IHN0b3JlIGFzIHdlbGwgYnV0IG9ubHkgaW4gdGhlIFVTLiBUaGUgZ2FtZSBjb25zaXN0cyBvZiBUYXN0eSB0aGUgcGlnIGRlbGl2ZXJpbmcgZm9vZCB0byB0aGUgY29zdHVtZXJzIHRoYXQgZW50ZXJzIHRoZSByZXN0YXVyYW50IHdpdGggZXZlcnkgY29ycmVjdCBvcmRlciBUYXN0eSBkZWxpdmVycyBpdCB3aWxsIGdhaW4gcG9pbnRzIHRoYXQgY2FuIGJlIGV4Y2hhbmdlZCBieSByZWFsIGZvb2Qgb24gYWxsIHRoZSBMYXdsZXIncyBSZXN0YXVyYW50cy4gTXkgcGFydGljaXBhdGlvbiBjb25zaXN0ZWQgaW4gdGhlIHByb2dyYW1taW5nIG9mIHRoZSBzY3JlZW5zIGZsb3csIGFuZCB0aGUgb3ZlcmFsbCBnYW1lIG1lY2hhbmljcyBpbmNsdWRpbmcgY2hhcmFjdGVyIGFuZCBlbmVtaWVzIGJlaGF2aW9yLCBmb29kIGl0ZW1zLCBwb2ludHMgc3lzdGVtLCBwZXJzaXN0ZW5jZSBtYW5hZ2VyIGFuZCByZXdhcmRzIHN5c3RlbSBUaGUgZ2FtZSB3YXMgZGV2ZWxvcGVkIHVzaW5nIHRoZSBHb2RvdCBlbmdpbmUuXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwicG9ydGZvbGlvMS5qcGVnXCJcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRnJ1dGl5dWtzIGRlIEFuaW1heXVrc1wiLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXNraW4gYW5kIGFkYXB0YXRpb24gb2YgdGhlIHZpZGVvZ2FtZSBmb3IgYmVpbmcgcGlibHVzaCB0byB0aGUgcGxheSBzdG9yZS4gVGhlIHZpZGVvZ2FtZSB3YXMgZGV2ZWxvcGVkIHVzaW5nIHRoZSBVbml0eSBlbmdpbmUuIE15IHBhcnRpY2lwYXRpb24gd2FzIHRvIGNoYW5nZSBhbGwgdGhlIGdyYXBoaWNzIGFuZCBtb2RpZnkgc29tZSBvZiB0aGUgcGFyYW1ldGVycyB0byB0aGUgZ2FtZSB0byBiZSBmdWxseSBmdW5jdGlvbmFsIG9uIGFuZHJvaWQgcGhvbmVzLiBUaGUgcHJvamVjdCB3YXMgYSBjb2xhYm9yYXRpb24gYmV0d2VlbiB0aGUgQW5pbWF5dWtzIEdyb3VwIGFuZCBZT1VHVUkgUy5DLlAuIHRoZSBtYWluIGdvYWwgd2FzIHRvIGNyZWF0ZSBhbiBpbnRlcmFjdGl2ZSBwcm9kdWN0IHRoYXQgc2hvd3MgdGhlIHNwaXJpdCBhbmQgbWlzaW9uIG9mIHRoZSBBbmltYXl1a3MgZ3JvdXAgdGhhdCBpcyB0byBzaG93IHRoZSBZdWNhdGVjYW4gZmF1bmEgYW5kIGN1bHR1cmUuIE15IHBhcnRpY2lwYXRpb24gaW4gdGhlIGRldmVsb3BtZW50IGluY2x1ZGU6ICogQ2hhbmdlIHRoZSBkZWZhdWx0IHNwcml0ZXMgb2YgdGhlIGdhbWUsIHNjYWxlLCBjaGFnZSB0aGVpciBwb3NpdGlvbiBjaGVjayBpZiB0aGUgYW5pbWF0aW9ucyB3ZXJlIHdvcmtpbmcgY29ycmVjdGx5ICogQ2hhbmdlIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBzY3JpcHRzIHRvIHRoZSBwb2ludHMgc3lzdGVtcyAqIENoZWNrIGFuZCBhZGp1c3QgdGhlIGZsb3cgYmV0d2VlbiBzY3JlZW5zIG9mIHRoZSBnYW1lICogQ2hlY2sgYW5kIGFkanVzdCB0aGUgcGFyYW1ldGVycyBvZiB0aGUgYmFja2dyb3VuZHMgb2YgdGhlIGdhbWVwbGF5XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwicG9ydGZvbGlvMi5qcGdcIlxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJZT1VHVUkgV2ViIFBhZ2VcIiwgXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVyaW9yZXMgYWxpYXMgZHVjaW11cyBjdXBpZGl0YXRlIGRvbG9yZSBxdWFzaSByZXJ1bSBxdWkgZnVnaWF0IGRpY3RhIG5hbSBwZXJmZXJlbmRpcyBxdWFzIGFiIHVsbGFtIHBvcnJvIG5pc2kgc2FwaWVudGUsIG5vYmlzIG5vbiBtYWlvcmVzPyBJcHNhbS5cIixcclxuICAgICAgICBpbWFnZTogXCJwb3J0Zm9saW8zLnBuZ1wiXHJcbiAgICB9XHJcblxyXG5dIl0sIm5hbWVzIjpbInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2VzIiwiZXhwIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./profile.js\n");

/***/ })

});