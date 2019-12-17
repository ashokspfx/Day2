define("78c7b88e-c176-4694-b95d-1b371279b6e8_0.0.1", ["@microsoft/decorators","@microsoft/sp-core-library","@microsoft/sp-listview-extensibility","@microsoft/sp-dialog","ModalDialogCommandSetStrings"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_listview_extensibility__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__microsoft_sp_listview_extensibility___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_listview_extensibility__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ModalDialogCommandSetStrings__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ModalDialogCommandSetStrings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ModalDialogCommandSetStrings__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LOG_SOURCE = 'ModalDialogCommandSet';
var ModalDialogCommandSet = (function (_super) {
    __extends(ModalDialogCommandSet, _super);
    function ModalDialogCommandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalDialogCommandSet.prototype.onInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_core_library__["Log"].info(LOG_SOURCE, 'Initialized ModalDialogCommandSet');
        return Promise.resolve();
    };
    ModalDialogCommandSet.prototype.onListViewUpdated = function (event) {
        var compareOneCommand = this.tryGetCommand('COMMAND_1');
        if (compareOneCommand) {
            // This command should be hidden unless exactly one row is selected.
            compareOneCommand.visible = event.selectedRows.length === 1;
        }
    };
    ModalDialogCommandSet.prototype.onExecute = function (event) {
        switch (event.itemId) {
            case 'COMMAND_1':
                __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__["Dialog"].alert("Clicked " + this.properties.sampleTextOne);
                break;
            case 'COMMAND_2':
                __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__["Dialog"].prompt("Clicked " + __WEBPACK_IMPORTED_MODULE_4_ModalDialogCommandSetStrings__["Command2"] + ". Enter something to alert:").then(function (value) {
                    __WEBPACK_IMPORTED_MODULE_3__microsoft_sp_dialog__["Dialog"].alert(value);
                });
                break;
            default:
                throw new Error('Unknown command');
        }
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__["override"]
    ], ModalDialogCommandSet.prototype, "onInit", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__["override"]
    ], ModalDialogCommandSet.prototype, "onListViewUpdated", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__["override"]
    ], ModalDialogCommandSet.prototype, "onExecute", null);
    return ModalDialogCommandSet;
}(__WEBPACK_IMPORTED_MODULE_2__microsoft_sp_listview_extensibility__["BaseListViewCommandSet"]));
/* harmony default export */ __webpack_exports__["default"] = (ModalDialogCommandSet);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ])});;
//# sourceMappingURL=modal-dialog-command-set.js.map