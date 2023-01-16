"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAPI\": function() { return /* binding */ fetchAPI; },\n/* harmony export */   \"getStrapiURL\": function() { return /* binding */ getStrapiURL; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n/**\n * Get full Strapi URL from path\n * @param {string} path Path of the URL\n * @returns {string} Full Strapi URL\n */ function getStrapiURL() {\n    var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\";\n    return \"\".concat(\"https://admin.villazzorealty.com/\" || 0).concat(path);\n}\n/**\n * Helper to make GET requests to Strapi API endpoints\n * @param {string} path Path of the API route\n * @param {Object} urlParamsObject URL params object, will be stringified\n * @param {Object} options Options passed to fetch\n * @returns Parsed API call response\n */ function fetchAPI(path) {\n    return _fetchAPI.apply(this, arguments);\n}\nfunction _fetchAPI() {\n    _fetchAPI = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(path) {\n        var urlParamsObject, options, mergedOptions, queryString, requestUrl, response, data;\n        var _arguments = arguments;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    urlParamsObject = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {}, options = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};\n                    mergedOptions = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                        mode: \"cors\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            \"Access-Control-Allow-Origin\": \"*\"\n                        }\n                    }, options);\n                    queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);\n                    requestUrl = \"\".concat(getStrapiURL(\"/api\".concat(path).concat(queryString ? \"?\".concat(queryString) : \"\")));\n                    console.log(\"requestUrl:\", requestUrl);\n                    return [\n                        4,\n                        fetch(requestUrl, mergedOptions)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    // Handle response\n                    if (!response.ok) {\n                        console.error(response.statusText);\n                        throw new Error(\"An error occured please try again\");\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return _fetchAPI.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW1CO0FBRW5COzs7O0NBSUMsR0FDTSxTQUFTQyxZQUFZLEdBQVk7UUFBWEMsSUFBSSxHQUFKQSwrQ0FBUyxrQkFBRixFQUFFO0lBQ3BDLE9BQU8sRUFBQyxDQUVMQSxNQUFJLENBRExDLG1DQUFzQyxJQUFJLENBQXVCLENBQzNELFFBQUxELElBQUksQ0FBRTtBQUNYLENBQUM7QUFFRDs7Ozs7O0NBTUMsR0FDTSxTQUFlSSxRQUFRLENBQUNKLElBQUk7V0FBYkksU0FBUTtDQTZCN0I7U0E3QnFCQSxTQUFRO0lBQVJBLFNBQVEsR0FBdkIsNkZBQXdCSixJQUFJLEVBQXNDO1lBQXBDSyxlQUFlLEVBQU9DLE9BQU8sRUFHMURDLGFBQWEsRUFVYkMsV0FBVyxFQUNYQyxVQUFVLEVBTVZDLFFBQVEsRUFPUkMsSUFBSTs7Ozs7b0JBM0J5Qk4sZUFBZSxHQUFmQSxpREFBb0IsbUJBQUYsRUFBRSxFQUFFQyxPQUFPLEdBQVBBLGlEQUFZLG1CQUFGLEVBQUU7b0JBRy9EQyxhQUFhLEdBQUc7d0JBQ3BCSyxJQUFJLEVBQUUsTUFBTTt3QkFDWkMsT0FBTyxFQUFFOzRCQUNQLGNBQWMsRUFBRSxrQkFBa0I7NEJBQ2xDLDZCQUE2QixFQUFDLEdBQUc7eUJBQ2xDO3VCQUNFUCxPQUFPLENBQ1g7b0JBR0tFLFdBQVcsR0FBR1YsbURBQVksQ0FBQ08sZUFBZSxDQUFDO29CQUMzQ0ksVUFBVSxHQUFHLEVBQUMsQ0FFbEIsT0FGb0JWLFlBQVksQ0FDaEMsTUFBSyxDQUFTUyxNQUFvQyxDQUEzQ1IsSUFBSSxDQUF3QyxRQUFyQ1EsV0FBVyxHQUFHLEdBQUUsQ0FBYyxPQUFaQSxXQUFXLENBQUUsR0FBRyxFQUFFLENBQUUsQ0FDckQsQ0FBRTtvQkFFSE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFUCxVQUFVLENBQUMsQ0FBQztvQkFFdEI7O3dCQUFNUSxLQUFLLENBQUNSLFVBQVUsRUFBRUYsYUFBYSxDQUFDO3NCQUFBOztvQkFBakRHLFFBQVEsR0FBRyxhQUFzQztvQkFFdkQsa0JBQWtCO29CQUNsQixJQUFJLENBQUNBLFFBQVEsQ0FBQ1EsRUFBRSxFQUFFO3dCQUNoQkgsT0FBTyxDQUFDSSxLQUFLLENBQUNULFFBQVEsQ0FBQ1UsVUFBVSxDQUFDO3dCQUNsQyxNQUFNLElBQUlDLEtBQUssQ0FBRSxtQ0FBaUMsQ0FBRTtvQkFDdEQsQ0FBQztvQkFDWTs7d0JBQU1YLFFBQVEsQ0FBQ1ksSUFBSSxFQUFFO3NCQUFBOztvQkFBNUJYLElBQUksR0FBRyxhQUFxQjtvQkFDbEM7O3dCQUFPQSxJQUFJO3NCQUFBOzs7SUFDYixDQUFDO1dBN0JxQlAsU0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvYXBpLmpzPzQ1NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiXG5cbi8qKlxuICogR2V0IGZ1bGwgU3RyYXBpIFVSTCBmcm9tIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcbiAgfSR7cGF0aH1gXG59XG5cbi8qKlxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cmxQYXJhbXNPYmplY3QgVVJMIHBhcmFtcyBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXG4gIFxuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6XCIqXCJcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH1cblxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXG4gICl9YFxuICBcbiAgY29uc29sZS5sb2coXCJyZXF1ZXN0VXJsOlwiLCByZXF1ZXN0VXJsKTtcbiAgLy8gVHJpZ2dlciBBUEkgY2FsbFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXG5cbiAgLy8gSGFuZGxlIHJlc3BvbnNlXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkIHBsZWFzZSB0cnkgYWdhaW5gKVxuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGRhdGFcbn1cbiJdLCJuYW1lcyI6WyJxcyIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwicXVlcnlTdHJpbmciLCJyZXF1ZXN0VXJsIiwicmVzcG9uc2UiLCJkYXRhIiwibW9kZSIsImhlYWRlcnMiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJvayIsImVycm9yIiwic3RhdHVzVGV4dCIsIkVycm9yIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api.js\n"));

/***/ })

});