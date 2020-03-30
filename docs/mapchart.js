(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapchart"],{

/***/ "./src/components/MapChart.tsx":
/*!*************************************!*\
  !*** ./src/components/MapChart.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highmaps */ \"./node_modules/highcharts/highmaps.js\");\n/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-react-official */ \"./node_modules/highcharts-react-official/dist/highcharts-react.min.js\");\n/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @highcharts/map-collection/custom/world.geo.json */ \"./node_modules/@highcharts/map-collection/custom/world.geo.json\");\nvar _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @highcharts/map-collection/custom/world.geo.json */ \"./node_modules/@highcharts/map-collection/custom/world.geo.json\", 1);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const */ \"./src/components/const.ts\");\n\n\n\n\n\nconst MapChart = ({ title, data, valueSuffix = 'ppl', color = _const__WEBPACK_IMPORTED_MODULE_4__[\"colors\"].dead }) => {\n    const colorAxisType = data.some(({ value }) => !value) ? 'linear' : 'logarithmic';\n    const options = {\n        title: {\n            text: title\n        },\n        colorAxis: {\n            type: colorAxisType,\n            stops: [\n                [0, '#fff'],\n                // [0.5, color+'66'],\n                [1, color]\n            ]\n        },\n        tooltip: {\n            valueSuffix\n        },\n        series: [{\n                type: 'map',\n                mapData: _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_3__,\n                joinBy: 'iso-a2',\n                data\n            }]\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(highcharts_react_official__WEBPACK_IMPORTED_MODULE_2___default.a, { options: options, constructorType: \"mapChart\", highcharts: highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default.a });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapChart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXBDaGFydC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXBDaGFydC50c3g/ZWU5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzL2hpZ2htYXBzJztcbmltcG9ydCBIaWdoY2hhcnRzUmVhY3QgZnJvbSAnaGlnaGNoYXJ0cy1yZWFjdC1vZmZpY2lhbCc7XG5pbXBvcnQgbWFwRGF0YSBmcm9tICdAaGlnaGNoYXJ0cy9tYXAtY29sbGVjdGlvbi9jdXN0b20vd29ybGQuZ2VvLmpzb24nO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi9jb25zdCc7XG5cbnR5cGUgQ291bnRyeURhdGEgPSB7XG4gICdpc28tYTInOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG50eXBlIFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkYXRhOiBDb3VudHJ5RGF0YVtdO1xuICB2YWx1ZVN1ZmZpeD86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbmNvbnN0IE1hcENoYXJ0OiBGQzxQcm9wcz4gPSAoeyB0aXRsZSwgZGF0YSwgdmFsdWVTdWZmaXg9ICdwcGwnLCBjb2xvciA9IGNvbG9ycy5kZWFkIH0pID0+IHtcbiAgY29uc3QgY29sb3JBeGlzVHlwZSA9IGRhdGEuc29tZSgoeyB2YWx1ZSB9KSA9PiAhdmFsdWUpID8gJ2xpbmVhcicgOiAnbG9nYXJpdGhtaWMnO1xuICBjb25zdCBvcHRpb25zOiBIaWdoY2hhcnRzLk9wdGlvbnMgPSB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHRleHQ6IHRpdGxlXG4gICAgfSxcbiAgICBjb2xvckF4aXM6IHtcbiAgICAgIHR5cGU6IGNvbG9yQXhpc1R5cGUsXG4gICAgICBzdG9wczogW1xuICAgICAgICBbMCwgJyNmZmYnXSxcbiAgICAgICAgLy8gWzAuNSwgY29sb3IrJzY2J10sXG4gICAgICAgIFsxLCBjb2xvcl1cbiAgICAgIF1cbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHZhbHVlU3VmZml4XG4gICAgfSxcbiAgICBzZXJpZXM6IFt7XG4gICAgICB0eXBlOiAnbWFwJyxcbiAgICAgIG1hcERhdGEsXG4gICAgICBqb2luQnk6ICdpc28tYTInLFxuICAgICAgZGF0YVxuICAgIH1dXG4gIH07XG5cbiAgcmV0dXJuIDxIaWdoY2hhcnRzUmVhY3RcbiAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgIGNvbnN0cnVjdG9yVHlwZT1cIm1hcENoYXJ0XCJcbiAgICBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfVxuICAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENoYXJ0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MapChart.tsx\n");

/***/ })

}]);