/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts_style/Cake.ts":
/*!******************************!*\
  !*** ./src/ts_style/Cake.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Cake = /** @class */ (function () {\r\n    function Cake(name) {\r\n        this.name = name;\r\n        this.layers = [];\r\n    }\r\n    Cake.prototype.getName = function () {\r\n        return this.name;\r\n    };\r\n    Cake.prototype.getRecipe = function () {\r\n        var recipe = [];\r\n        this.layers.map(function (layer, i) {\r\n            recipe.push(i + 1 + \": \" + layer.getFlavor());\r\n        });\r\n        return \"=== \" + this.name + \" ===\\n\" + recipe.join(', \\n') + \"\\n\";\r\n    };\r\n    Cake.prototype.addLayer = function (layer) {\r\n        this.layers.push(layer);\r\n    };\r\n    Cake.prototype.removeLayer = function () {\r\n        var layer = this.layers.pop();\r\n        if (layer) {\r\n            return layer;\r\n        }\r\n        else {\r\n            throw new Error('No layers');\r\n        }\r\n    };\r\n    return Cake;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cake);\r\n\n\n//# sourceURL=webpack://cakemaker/./src/ts_style/Cake.ts?");

/***/ }),

/***/ "./src/ts_style/Layer.ts":
/*!*******************************!*\
  !*** ./src/ts_style/Layer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Layer = /** @class */ (function () {\r\n    function Layer() {\r\n        this.flavor = 'empty';\r\n        this.filled = false;\r\n    }\r\n    Layer.prototype.getFlavor = function () {\r\n        return this.flavor;\r\n    };\r\n    Layer.prototype.isFilled = function () {\r\n        return this.filled;\r\n    };\r\n    Layer.prototype.fill = function (flavor) {\r\n        if (this.filled)\r\n            return;\r\n        this.flavor = flavor;\r\n        this.filled = true;\r\n    };\r\n    return Layer;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layer);\r\n\n\n//# sourceURL=webpack://cakemaker/./src/ts_style/Layer.ts?");

/***/ }),

/***/ "./src/ts_style/factories/AbstractCakeFactory.ts":
/*!*******************************************************!*\
  !*** ./src/ts_style/factories/AbstractCakeFactory.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cake */ \"./src/ts_style/Cake.ts\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/ts_style/Layer.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\n\r\n\r\nvar AbstractCakeFactory = /** @class */ (function () {\r\n    function AbstractCakeFactory() {\r\n        this.flavors = [];\r\n        this.total = 0;\r\n    }\r\n    AbstractCakeFactory.prototype.getTotal = function () {\r\n        return this.total;\r\n    };\r\n    AbstractCakeFactory.prototype.getFlavors = function () {\r\n        return this.flavors;\r\n    };\r\n    AbstractCakeFactory.prototype.getFlavorById = function (id) {\r\n        return this.flavors[id] || this.flavors[0] || 'empty';\r\n    };\r\n    AbstractCakeFactory.prototype.createCake = function (name, pattern) {\r\n        var _this = this;\r\n        var cake = new _Cake__WEBPACK_IMPORTED_MODULE_0__.default(name);\r\n        pattern.map(function (id) {\r\n            var flavor = _this.getFlavorById(id);\r\n            var layer = new _Layer__WEBPACK_IMPORTED_MODULE_1__.default();\r\n            layer.fill(flavor);\r\n            cake.addLayer(layer);\r\n        });\r\n        this.total++;\r\n        return cake;\r\n    };\r\n    AbstractCakeFactory.prototype.createRandomCake = function (name, size) {\r\n        var max = this.flavors.length;\r\n        var pattern = __spreadArray([], Array(size)).map(function () { return ~~(Math.random() * max); });\r\n        return this.createCake(name, pattern);\r\n    };\r\n    return AbstractCakeFactory;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbstractCakeFactory);\r\n\n\n//# sourceURL=webpack://cakemaker/./src/ts_style/factories/AbstractCakeFactory.ts?");

/***/ }),

/***/ "./src/ts_style/factories/GingerCakeFactory.ts":
/*!*****************************************************!*\
  !*** ./src/ts_style/factories/GingerCakeFactory.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCakeFactory */ \"./src/ts_style/factories/AbstractCakeFactory.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar GingerCakeFactory = /** @class */ (function (_super) {\r\n    __extends(GingerCakeFactory, _super);\r\n    function GingerCakeFactory() {\r\n        var _this = _super.call(this) || this;\r\n        _this.flavors = ['eggs', 'milk', 'lemon', 'ginger', 'sugar'];\r\n        return _this;\r\n    }\r\n    return GingerCakeFactory;\r\n}(_AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GingerCakeFactory);\r\n\n\n//# sourceURL=webpack://cakemaker/./src/ts_style/factories/GingerCakeFactory.ts?");

/***/ }),

/***/ "./src/ts_style/factories/StrawberryCakeFactory.ts":
/*!*********************************************************!*\
  !*** ./src/ts_style/factories/StrawberryCakeFactory.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCakeFactory */ \"./src/ts_style/factories/AbstractCakeFactory.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar StrawberryCakeFactory = /** @class */ (function (_super) {\r\n    __extends(StrawberryCakeFactory, _super);\r\n    function StrawberryCakeFactory() {\r\n        var _this = _super.call(this) || this;\r\n        _this.flavors = ['eggs', 'milk', 'chocolate', 'strawberry', 'sugar'];\r\n        return _this;\r\n    }\r\n    return StrawberryCakeFactory;\r\n}(_AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrawberryCakeFactory);\r\n\n\n//# sourceURL=webpack://cakemaker/./src/ts_style/factories/StrawberryCakeFactory.ts?");

/***/ }),

/***/ "./src/ts_style/main.ts":
/*!******************************!*\
  !*** ./src/ts_style/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../print */ \"./src/print.js\");\n/* harmony import */ var _factories_GingerCakeFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/GingerCakeFactory */ \"./src/ts_style/factories/GingerCakeFactory.ts\");\n/* harmony import */ var _factories_StrawberryCakeFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/StrawberryCakeFactory */ \"./src/ts_style/factories/StrawberryCakeFactory.ts\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\r\n    var TIME_FACTOR = 500;\r\n    var MAX_CAKES = 3;\r\n    var asyncBake = function (cakes, factory) {\r\n        var size = ~~(2 + Math.random() * 4);\r\n        var name = \"TsCake N\" + ~~(Math.random() * 1000) + \"S\" + size;\r\n        (0,_print__WEBPACK_IMPORTED_MODULE_0__.default)(\"At[\" + performance.now().toFixed(2) + \"]: \", '#88f');\r\n        (0,_print__WEBPACK_IMPORTED_MODULE_0__.default)(\"Start baking \" + name + \" with size \" + size + \"\\n\");\r\n        return new Promise(function (resolve, reject) {\r\n            if (cakes.length >= MAX_CAKES)\r\n                return reject(new Error('Maximum number of cakes exceed!'));\r\n            setTimeout(function () {\r\n                cakes.push(factory.createRandomCake(name, size));\r\n                (0,_print__WEBPACK_IMPORTED_MODULE_0__.default)(\"End baking \" + name + \"\\n\", '#88f');\r\n                resolve();\r\n            }, size * TIME_FACTOR);\r\n        });\r\n    };\r\n    var cakes = new Array();\r\n    var sfactory = new _factories_StrawberryCakeFactory__WEBPACK_IMPORTED_MODULE_2__.default();\r\n    var gfactory = new _factories_GingerCakeFactory__WEBPACK_IMPORTED_MODULE_1__.default();\r\n    (0,_print__WEBPACK_IMPORTED_MODULE_0__.default)(\"Start baking some ts-cakes\\n\\n\", '#44f');\r\n    asyncBake(cakes, sfactory)\r\n        .then(function () { return asyncBake(cakes, gfactory); })\r\n        .then(function () { return asyncBake(cakes, sfactory); })\r\n        .then(function () { return asyncBake(cakes, gfactory); })\r\n        .catch(function (err) { return console.error(err); })\r\n        .then(function () {\r\n        (0,_print__WEBPACK_IMPORTED_MODULE_0__.default)(\"Stop baking cakes\\n\\n\", '44f');\r\n        (0,_print__WEBPACK_IMPORTED_MODULE_0__.default)(JSON.stringify(cakes, null, 2) + '\\n', '#44f');\r\n        console.log(cakes);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://cakemaker/./src/ts_style/main.ts?");

/***/ }),

/***/ "./src/es6_style/Cake.js":
/*!*******************************!*\
  !*** ./src/es6_style/Cake.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cake)\n/* harmony export */ });\nclass Cake {\r\n\r\n  constructor(name) {\r\n    this._name = name\r\n    this._layers = []\r\n  }\r\n\r\n  get name() {\r\n    return this._name\r\n  }\r\n\r\n  set name(name) {\r\n    this._name = name\r\n  }\r\n\r\n  // ??? can we create getter without field ???\r\n  get recipe() {\r\n    const recipe = [] // ??? can we remove this temp array ???\r\n    this._layers.map((layer, i) =>\r\n      recipe.push(`${i + 1}: ${layer.flavor}`)\r\n    )\r\n    return `=== ${this._name} ===\\n${recipe.join(', \\n')}\\n`\r\n  }\r\n\r\n  addLayer(layer) {\r\n    this._layers.push(layer)\r\n  }\r\n\r\n  removeLayer() {\r\n    return this._layers.pop()\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://cakemaker/./src/es6_style/Cake.js?");

/***/ }),

/***/ "./src/es6_style/Layer.js":
/*!********************************!*\
  !*** ./src/es6_style/Layer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layer)\n/* harmony export */ });\nclass Layer {\r\n\r\n  constructor() {\r\n    this._flavor = 'empty'\r\n    this._isFilled = false\r\n  }\r\n\r\n  get flavor() {\r\n    return this._flavor\r\n  }\r\n\r\n  get isFilled() {\r\n    return this._isFilled\r\n  }\r\n\r\n  fill(flavor) {\r\n    if (this._isFilled) return\r\n    this._flavor = flavor\r\n    this._isFilled = true\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://cakemaker/./src/es6_style/Layer.js?");

/***/ }),

/***/ "./src/es6_style/factories/AbstractCakeFactory.js":
/*!********************************************************!*\
  !*** ./src/es6_style/factories/AbstractCakeFactory.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AbstractCakeFactory)\n/* harmony export */ });\n/* harmony import */ var _Cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cake */ \"./src/es6_style/Cake.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/es6_style/Layer.js\");\n\r\n\r\n\r\nclass AbstractCakeFactory {\r\n\r\n  constructor() {\r\n    this._flavors = []\r\n    this._total = 0\r\n  }\r\n\r\n  get total() {\r\n    return this._total\r\n  }\r\n\r\n  get flavors() {\r\n    return this._flavors\r\n  }\r\n\r\n  getFlavorById(id) {\r\n    return this._flavors[id] || this._flavors[0] || null\r\n  }\r\n\r\n  createCake(name, pattern) {\r\n    const cake = new _Cake__WEBPACK_IMPORTED_MODULE_0__.default(name)\r\n    pattern.map(id => {\r\n      const flavor = this.getFlavorById(id)\r\n      const layer = new _Layer__WEBPACK_IMPORTED_MODULE_1__.default()\r\n      layer.fill(flavor)\r\n      cake.addLayer(layer)\r\n    })\r\n    this._total++\r\n    return cake\r\n  }\r\n\r\n  createRandomCake(name, size) {\r\n    const max = this._flavors.length\r\n    const pattern = [...new Array(size)].map(() => ~~(Math.random() * max))\r\n    return this.createCake(name, pattern)\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://cakemaker/./src/es6_style/factories/AbstractCakeFactory.js?");

/***/ }),

/***/ "./src/es6_style/factories/GingerCakeFactory.js":
/*!******************************************************!*\
  !*** ./src/es6_style/factories/GingerCakeFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GingerCakeFactory)\n/* harmony export */ });\n/* harmony import */ var _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCakeFactory */ \"./src/es6_style/factories/AbstractCakeFactory.js\");\n\r\n\r\nclass GingerCakeFactory extends _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default {\r\n\r\n  constructor() {\r\n    super()\r\n    this._flavors = ['eggs', 'milk', 'lemon', 'ginger', 'sugar']\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://cakemaker/./src/es6_style/factories/GingerCakeFactory.js?");

/***/ }),

/***/ "./src/es6_style/factories/StrawberryCakeFactory.js":
/*!**********************************************************!*\
  !*** ./src/es6_style/factories/StrawberryCakeFactory.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StrawberryCakeFactory)\n/* harmony export */ });\n/* harmony import */ var _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCakeFactory */ \"./src/es6_style/factories/AbstractCakeFactory.js\");\n\r\n\r\nclass StrawberryCakeFactory extends _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default {\r\n\r\n  constructor() {\r\n    super()\r\n    this._flavors = ['eggs', 'milk', 'chocolate', 'strawberry', 'sugar']\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://cakemaker/./src/es6_style/factories/StrawberryCakeFactory.js?");

/***/ }),

/***/ "./src/es6_style/main.js":
/*!*******************************!*\
  !*** ./src/es6_style/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_StrawberryCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/StrawberryCakeFactory */ \"./src/es6_style/factories/StrawberryCakeFactory.js\");\n/* harmony import */ var _factories_GingerCakeFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/GingerCakeFactory */ \"./src/es6_style/factories/GingerCakeFactory.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../print */ \"./src/print.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n\r\n  const TIME_FACTOR = 500\r\n  const MAX_CAKES = 3\r\n\r\n  const asyncBake = (cakes, factory) => {\r\n    const size = ~~(2 + Math.random() * 4)\r\n    const name = `ClassCake N${~~(Math.random() * 1000)}S${size}`\r\n\r\n    ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)(`At[${performance.now().toFixed(2)}]: `, '#8f8')\r\n    ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)(`Start baking ${name} with size ${size}\\n`)\r\n\r\n    return new Promise((resolve, reject) => {\r\n      if (cakes.length >= MAX_CAKES)\r\n        return reject(new Error('Maximum number of cakes exceed!'))\r\n      setTimeout(() => {\r\n        cakes.push(factory.createRandomCake(name, size))\r\n        ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)(`End baking ${name}\\n`, '#8f8')\r\n        resolve()\r\n      }, size * TIME_FACTOR)\r\n\r\n    })\r\n  }\r\n\r\n  const sfactory = new _factories_StrawberryCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default()\r\n  const gfactory = new _factories_GingerCakeFactory__WEBPACK_IMPORTED_MODULE_1__.default()\r\n\r\n  const cakes = []\r\n\r\n  ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)(`Start baking some class-cakes\\n\\n`, '#4f4')\r\n\r\n  asyncBake(cakes, sfactory)\r\n    .then(() => asyncBake(cakes, gfactory))\r\n    .then(() => asyncBake(cakes, sfactory))\r\n    .then(() => asyncBake(cakes, gfactory))\r\n    .catch(err => console.error(err))\r\n    // just print\r\n    .then(() => {\r\n      ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)(`Stop baking cakes\\n\\n`, '#4f4')\r\n      ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)(JSON.stringify(cakes, '', 2) + '\\n', '#4f4')\r\n      console.log(cakes)\r\n    })\r\n\r\n});\n\n//# sourceURL=webpack://cakemaker/./src/es6_style/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prototype_style_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype_style/main */ \"./src/prototype_style/main.js\");\n/* harmony import */ var _es6_style_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es6_style/main */ \"./src/es6_style/main.js\");\n/* harmony import */ var _ts_style_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts_style/main */ \"./src/ts_style/main.ts\");\n\r\n\r\n\r\n\r\n\r\n(0,_prototype_style_main__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n;(0,_es6_style_main__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n;(0,_ts_style_main__WEBPACK_IMPORTED_MODULE_2__.default)()\n\n//# sourceURL=webpack://cakemaker/./src/index.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ print)\n/* harmony export */ });\nlet printer = null\r\nwindow.onload = function () {\r\n  printer = document.getElementById('printer')\r\n}\r\n\r\nconst CLEAR = 'CLS'\r\nconst NEWLINE = 'NL'\r\n\r\n/**\r\n * \r\n * @param {String} message Message to print\r\n * @param {String} color Color in CSS format\r\n */\r\n\r\nfunction print(message, color = '#ddd') {\r\n  if (!printer) {\r\n    setTimeout(function () {\r\n      print(message, color)\r\n    }, 50) //lol\r\n    return\r\n  }\r\n  if (message === CLEAR) {\r\n    printer.innerHTML = ''\r\n  } else if (message === NEWLINE) {\r\n    printer.innerHTML += '\\n'\r\n  } else {\r\n    console.info('printer at [', performance.now().toFixed(2), '] says:\\n', message)\r\n    printer.innerHTML += `<span style=\"color:${color}\">${message}</span>` // almost React lol\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://cakemaker/./src/print.js?");

/***/ }),

/***/ "./src/prototype_style/Cake.js":
/*!*************************************!*\
  !*** ./src/prototype_style/Cake.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cake)\n/* harmony export */ });\nfunction Cake(name) {\r\n  this._name = name\r\n  this._layers = []\r\n}\r\n\r\nCake.prototype.getName = function () {\r\n  return this._name\r\n}\r\n\r\nCake.prototype.getRecipe = function () {\r\n  var recipe = []\r\n  this._layers.map(function (layer, i) {\r\n    recipe.push((i + 1) + ': ' + layer.getFlavor())\r\n  })\r\n  return '=== ' + this._name + ' ===\\n' + recipe.join(', \\n') + '\\n'\r\n}\r\n\r\nCake.prototype.addLayer = function (layer) {\r\n  this._layers.push(layer)\r\n}\r\n\r\nCake.prototype.removeLayer = function () {\r\n  return this._layers.pop()\r\n}\r\n\n\n//# sourceURL=webpack://cakemaker/./src/prototype_style/Cake.js?");

/***/ }),

/***/ "./src/prototype_style/Layer.js":
/*!**************************************!*\
  !*** ./src/prototype_style/Layer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layer)\n/* harmony export */ });\nfunction Layer() {\r\n  this._flavor = 'empty'\r\n  this._isFilled = false\r\n}\r\n\r\nLayer.prototype.getFlavor = function () {\r\n  return this._flavor\r\n}\r\n\r\nLayer.prototype.isFilled = function () {\r\n  return this._isFilled\r\n}\r\n\r\nLayer.prototype.fill = function (flavor) {\r\n  if (!this._isFilled) {\r\n    this._flavor = flavor\r\n    this._isFilled = true\r\n  }\r\n}\n\n//# sourceURL=webpack://cakemaker/./src/prototype_style/Layer.js?");

/***/ }),

/***/ "./src/prototype_style/factories/AbstractCakeFactory.js":
/*!**************************************************************!*\
  !*** ./src/prototype_style/factories/AbstractCakeFactory.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AbstractCakeFactory)\n/* harmony export */ });\n/* harmony import */ var _Cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cake */ \"./src/prototype_style/Cake.js\");\n/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ \"./src/prototype_style/Layer.js\");\n\r\n\r\n\r\nfunction AbstractCakeFactory() {\r\n  this._flavors = []\r\n  this._total = 0\r\n}\r\n\r\nAbstractCakeFactory.prototype.getTotal = function () {\r\n  return this._total\r\n}\r\n\r\nAbstractCakeFactory.prototype.getFlavors = function () {\r\n  return this._flavors\r\n}\r\n\r\nAbstractCakeFactory.prototype.createCake = function (name, pattern) {\r\n  var cake = new _Cake__WEBPACK_IMPORTED_MODULE_0__.default(name)\r\n  pattern.map(function (id) {\r\n    var flavor = this._flavors[id] || this._flavors[0]\r\n    var layer = new _Layer__WEBPACK_IMPORTED_MODULE_1__.default()\r\n    layer.fill(flavor)\r\n    cake.addLayer(layer)\r\n  }, this)\r\n  this._total++\r\n  return cake\r\n}\r\n\r\nAbstractCakeFactory.prototype.createRandomCake = function (name, size) {\r\n  var randomPattern = []\r\n  for (var i = 0, max = this._flavors.length; i < size; i++) {\r\n    randomPattern[i] = Math.floor(Math.random() * max)\r\n  }\r\n  return this.createCake(name, randomPattern)\r\n}\n\n//# sourceURL=webpack://cakemaker/./src/prototype_style/factories/AbstractCakeFactory.js?");

/***/ }),

/***/ "./src/prototype_style/factories/GingerCakeFactory.js":
/*!************************************************************!*\
  !*** ./src/prototype_style/factories/GingerCakeFactory.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GingerCakeFactory)\n/* harmony export */ });\n/* harmony import */ var _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCakeFactory */ \"./src/prototype_style/factories/AbstractCakeFactory.js\");\n\r\n\r\nfunction GingerCakeFactory() {\r\n  _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default.call(this)\r\n  this._flavors = ['eggs', 'milk', 'lemon', 'ginger', 'sugar']\r\n}\r\nGingerCakeFactory.prototype = Object.create(_AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default.prototype)\r\nGingerCakeFactory.prototype.constructor = GingerCakeFactory\r\n\r\n\n\n//# sourceURL=webpack://cakemaker/./src/prototype_style/factories/GingerCakeFactory.js?");

/***/ }),

/***/ "./src/prototype_style/factories/StrawberryCakeFactory.js":
/*!****************************************************************!*\
  !*** ./src/prototype_style/factories/StrawberryCakeFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StrawberryCakeFactory)\n/* harmony export */ });\n/* harmony import */ var _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCakeFactory */ \"./src/prototype_style/factories/AbstractCakeFactory.js\");\n\r\n\r\nfunction StrawberryCakeFactory() {\r\n  _AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default.call(this)\r\n  this._flavors = ['eggs', 'milk', 'chocolate', 'strawberry', 'sugar']\r\n}\r\nStrawberryCakeFactory.prototype = Object.create(_AbstractCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default.prototype)\r\nStrawberryCakeFactory.prototype.constructor = StrawberryCakeFactory\r\n\n\n//# sourceURL=webpack://cakemaker/./src/prototype_style/factories/StrawberryCakeFactory.js?");

/***/ }),

/***/ "./src/prototype_style/main.js":
/*!*************************************!*\
  !*** ./src/prototype_style/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_StrawberryCakeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/StrawberryCakeFactory */ \"./src/prototype_style/factories/StrawberryCakeFactory.js\");\n/* harmony import */ var _factories_GingerCakeFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/GingerCakeFactory */ \"./src/prototype_style/factories/GingerCakeFactory.js\");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../print */ \"./src/print.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n\r\n  const TIME_FACTOR = 500\r\n\r\n  function asyncBake(cakes, factory, cb) {\r\n    var size = Math.floor(2 + Math.random() * 4)\r\n    var name = 'ProtoCake N' + Math.floor(Math.random() * 1000) + 'S' + size\r\n    ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)('At [' + performance.now().toFixed(2) + ']: ', '#f88')\r\n    ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)('Start baking ' + name + ' with size ' + size + '\\n')\r\n    setTimeout(function () {\r\n      cakes.push(factory.createRandomCake(name, size))\r\n      ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)('End baking ' + name + '\\n', '#f88')\r\n      cb()\r\n    }, size * TIME_FACTOR)\r\n  }\r\n\r\n\r\n  var sfactory = new _factories_StrawberryCakeFactory__WEBPACK_IMPORTED_MODULE_0__.default()\r\n  var gfactory = new _factories_GingerCakeFactory__WEBPACK_IMPORTED_MODULE_1__.default()\r\n\r\n  var cakes = []\r\n\r\n  ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)('Start baking some proto-cakes\\n\\n', '#f44')\r\n\r\n  asyncBake(cakes, sfactory, function () {\r\n    asyncBake(cakes, gfactory, function () {\r\n      asyncBake(cakes, sfactory, function () {\r\n        asyncBake(cakes, gfactory, function () {\r\n          ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)('Stop baking cakes \\n\\n', '#f44')\r\n          ;(0,_print__WEBPACK_IMPORTED_MODULE_2__.default)(JSON.stringify(cakes, '', 2) + '\\n', '#f44')\r\n          console.log(cakes)\r\n        })\r\n      })\r\n    })\r\n  })\r\n\r\n}\n\n//# sourceURL=webpack://cakemaker/./src/prototype_style/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;