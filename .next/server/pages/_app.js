/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Redux/Slices/StepperSlice.ts":
/*!**************************************!*\
  !*** ./Redux/Slices/StepperSlice.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RemoveParnumbers\": () => (/* binding */ RemoveParnumbers),\n/* harmony export */   \"RemoveSupplier\": () => (/* binding */ RemoveSupplier),\n/* harmony export */   \"RemoveSupplierType\": () => (/* binding */ RemoveSupplierType),\n/* harmony export */   \"SelectPartnumbers\": () => (/* binding */ SelectPartnumbers),\n/* harmony export */   \"SelectSupplier\": () => (/* binding */ SelectSupplier),\n/* harmony export */   \"SetParnumbers\": () => (/* binding */ SetParnumbers),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectSupplierType\": () => (/* binding */ selectSupplierType),\n/* harmony export */   \"setSupplier\": () => (/* binding */ setSupplier),\n/* harmony export */   \"setSupplierType\": () => (/* binding */ setSupplierType),\n/* harmony export */   \"stepperSlice\": () => (/* binding */ stepperSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    partnumbers: [],\n    SupplierType: \"\",\n    Supplier: \"\"\n};\nconst stepperSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"SteperReducer\",\n    initialState,\n    reducers: {\n        SetParnumbers: (state, action)=>{\n            console.log(action.payload);\n            state.partnumbers = action.payload;\n        },\n        RemoveParnumbers: (state)=>{\n            state.partnumbers = [];\n        },\n        setSupplier: (state, action)=>{\n            console.log(action.payload);\n            state.Supplier = action.payload;\n        },\n        RemoveSupplier: (state, action)=>{\n            state.Supplier = action.payload;\n        },\n        setSupplierType: (state, action)=>{\n            console.log(action.payload);\n            state.SupplierType = action.payload;\n        },\n        RemoveSupplierType: (state, action)=>{\n            state.SupplierType = action.payload;\n        }\n    }\n});\nconst SelectPartnumbers = (state)=>state.SteperReducer.partnumbers;\nconst SelectSupplier = (state)=>state.SteperReducer.Supplier;\nconst selectSupplierType = (state)=>state.SteperReducer.SupplierType;\nconst { SetParnumbers , RemoveParnumbers , setSupplier , RemoveSupplier , setSupplierType , RemoveSupplierType ,  } = stepperSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stepperSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWR1eC9TbGljZXMvU3RlcHBlclNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFROUQsTUFBTUMsWUFBWSxHQUFnQjtJQUNoQ0MsV0FBVyxFQUFFLEVBQUU7SUFDZkMsWUFBWSxFQUFFLEVBQUU7SUFDaEJDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7QUFDTSxNQUFNQyxZQUFZLEdBQUdMLDZEQUFXLENBQUM7SUFDdENNLElBQUksRUFBRSxlQUFlO0lBRXJCTCxZQUFZO0lBQ1pNLFFBQVEsRUFBRTtRQUNSQyxhQUFhLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUErQixHQUFLO1lBQ3pEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDRyxPQUFPLENBQUMsQ0FBQztZQUM1QkosS0FBSyxDQUFDUCxXQUFXLEdBQUdRLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO1NBQ3BDO1FBQ0RDLGdCQUFnQixFQUFFLENBQUNMLEtBQUssR0FBSztZQUMzQkEsS0FBSyxDQUFDUCxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBQ0RhLFdBQVcsRUFBRSxDQUFDTixLQUFLLEVBQUVDLE1BQTZCLEdBQUs7WUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDO1lBQzVCSixLQUFLLENBQUNMLFFBQVEsR0FBR00sTUFBTSxDQUFDRyxPQUFPLENBQUM7U0FDakM7UUFDREcsY0FBYyxFQUFFLENBQUNQLEtBQUssRUFBRUMsTUFBNkIsR0FBSztZQUN4REQsS0FBSyxDQUFDTCxRQUFRLEdBQUdNLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO1NBQ2pDO1FBQ0RJLGVBQWUsRUFBRSxDQUFDUixLQUFLLEVBQUVDLE1BQTZCLEdBQUs7WUFDekRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUFDO1lBQzVCSixLQUFLLENBQUNOLFlBQVksR0FBR08sTUFBTSxDQUFDRyxPQUFPLENBQUM7U0FDckM7UUFDREssa0JBQWtCLEVBQUUsQ0FBQ1QsS0FBSyxFQUFFQyxNQUE2QixHQUFLO1lBQzVERCxLQUFLLENBQUNOLFlBQVksR0FBR08sTUFBTSxDQUFDRyxPQUFPLENBQUM7U0FDckM7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVJLE1BQU1NLGlCQUFpQixHQUFHLENBQUNWLEtBQWdCLEdBQ2hEQSxLQUFLLENBQUNXLGFBQWEsQ0FBQ2xCLFdBQVcsQ0FBQztBQUMzQixNQUFNbUIsY0FBYyxHQUFHLENBQUNaLEtBQWdCLEdBQzdDQSxLQUFLLENBQUNXLGFBQWEsQ0FBQ2hCLFFBQVEsQ0FBQztBQUN4QixNQUFNa0Isa0JBQWtCLEdBQUcsQ0FBQ2IsS0FBZ0IsR0FDakRBLEtBQUssQ0FBQ1csYUFBYSxDQUFDakIsWUFBWSxDQUFDO0FBRTVCLE1BQU0sRUFDWEssYUFBYSxHQUNiTSxnQkFBZ0IsR0FDaEJDLFdBQVcsR0FDWEMsY0FBYyxHQUNkQyxlQUFlLEdBQ2ZDLGtCQUFrQixLQUNuQixHQUFHYixZQUFZLENBQUNrQixPQUFPLENBQUM7QUFFekIsaUVBQWVsQixZQUFZLENBQUNtQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBwbGllcnMvLi9SZWR1eC9TbGljZXMvU3RlcHBlclNsaWNlLnRzPzA2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW50ZXJmYWNlIFN0ZXBlclN0YXRlIHtcclxuICBwYXJ0bnVtYmVyczogc3RyaW5nW107XHJcbiAgU3VwcGxpZXJUeXBlOiBzdHJpbmc7XHJcbiAgU3VwcGxpZXI6IHN0cmluZztcclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0ZXBlclN0YXRlID0ge1xyXG4gIHBhcnRudW1iZXJzOiBbXSxcclxuICBTdXBwbGllclR5cGU6IFwiXCIsXHJcbiAgU3VwcGxpZXI6IFwiXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzdGVwcGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJTdGVwZXJSZWR1Y2VyXCIsXHJcblxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgU2V0UGFybnVtYmVyczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgc3RhdGUucGFydG51bWJlcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBSZW1vdmVQYXJudW1iZXJzOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUucGFydG51bWJlcnMgPSBbXTtcclxuICAgIH0sXHJcbiAgICBzZXRTdXBwbGllcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHN0YXRlLlN1cHBsaWVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgUmVtb3ZlU3VwcGxpZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuU3VwcGxpZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRTdXBwbGllclR5cGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBzdGF0ZS5TdXBwbGllclR5cGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBSZW1vdmVTdXBwbGllclR5cGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuU3VwcGxpZXJUeXBlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdFBhcnRudW1iZXJzID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUuU3RlcGVyUmVkdWNlci5wYXJ0bnVtYmVycztcclxuZXhwb3J0IGNvbnN0IFNlbGVjdFN1cHBsaWVyID0gKHN0YXRlOiBSb290U3RhdGUpID0+XHJcbiAgc3RhdGUuU3RlcGVyUmVkdWNlci5TdXBwbGllcjtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFN1cHBsaWVyVHlwZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PlxyXG4gIHN0YXRlLlN0ZXBlclJlZHVjZXIuU3VwcGxpZXJUeXBlO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICBTZXRQYXJudW1iZXJzLFxyXG4gIFJlbW92ZVBhcm51bWJlcnMsXHJcbiAgc2V0U3VwcGxpZXIsXHJcbiAgUmVtb3ZlU3VwcGxpZXIsXHJcbiAgc2V0U3VwcGxpZXJUeXBlLFxyXG4gIFJlbW92ZVN1cHBsaWVyVHlwZSxcclxufSA9IHN0ZXBwZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RlcHBlclNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInBhcnRudW1iZXJzIiwiU3VwcGxpZXJUeXBlIiwiU3VwcGxpZXIiLCJzdGVwcGVyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJTZXRQYXJudW1iZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsIlJlbW92ZVBhcm51bWJlcnMiLCJzZXRTdXBwbGllciIsIlJlbW92ZVN1cHBsaWVyIiwic2V0U3VwcGxpZXJUeXBlIiwiUmVtb3ZlU3VwcGxpZXJUeXBlIiwiU2VsZWN0UGFydG51bWJlcnMiLCJTdGVwZXJSZWR1Y2VyIiwiU2VsZWN0U3VwcGxpZXIiLCJzZWxlY3RTdXBwbGllclR5cGUiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Redux/Slices/StepperSlice.ts\n");

/***/ }),

/***/ "./Redux/store.ts":
/*!************************!*\
  !*** ./Redux/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Slices_StepperSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slices/StepperSlice */ \"./Redux/Slices/StepperSlice.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        SteperReducer: _Slices_StepperSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWR1eC9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ0E7QUFFbEQsTUFBTUUsS0FBSyxHQUFHRixnRUFBYyxDQUFDO0lBQzNCRyxPQUFPLEVBQUU7UUFDUEYsYUFBYTtLQUNkO0NBQ0YsQ0FBQztBQU9GLGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBwbGllcnMvLi9SZWR1eC9zdG9yZS50cz8yNjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IFN0ZXBlclJlZHVjZXIgZnJvbSBcIi4vU2xpY2VzL1N0ZXBwZXJTbGljZVwiO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgU3RlcGVyUmVkdWNlcixcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIEluZmVyIHRoZSBgUm9vdFN0YXRlYCBhbmQgYEFwcERpc3BhdGNoYCB0eXBlcyBmcm9tIHRoZSBzdG9yZSBpdHNlbGZcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG4vLyBJbmZlcnJlZCB0eXBlOiB7cG9zdHM6IFBvc3RzU3RhdGUsIGNvbW1lbnRzOiBDb21tZW50c1N0YXRlLCB1c2VyczogVXNlcnNTdGF0ZX1cclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiU3RlcGVyUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Redux/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Redux/store */ \"./Redux/store.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _Redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\dev\\\\vatler lett\\\\13.suppliers-next-tailwindcss-python fastapi(2022.10)\\\\Front end\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\dev\\\\vatler lett\\\\13.suppliers-next-tailwindcss-python fastapi(2022.10)\\\\Front end\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRUk7QUFDSTtBQUV2QyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsaURBQVE7UUFBQ0QsS0FBSyxFQUFFQSxvREFBSztrQkFDcEIsNEVBQUNHLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDbkIsQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1cHBsaWVycy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL1JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsic3RvcmUiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();