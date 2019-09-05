/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// *** import packages example ***
// import TweenMax from "gsap/TweenMax";
// *** import modules example ***
// import log from './modules/log.js';
var header = document.querySelector('.header');
var footer = document.querySelector('.footer');
var mainWrapper = document.querySelector('.main-wrapper');
var mainContent = document.querySelector('.main-content');
document.addEventListener('DOMContentLoaded', function () {
  // console.log('document ready');
  document.querySelectorAll('table').forEach(function (table) {
    table.querySelectorAll('th').forEach(function (el, i) {
      el.setAttribute('tabindex', i);
    });
    table.querySelectorAll('tbody tr').forEach(function (row) {
      row.querySelectorAll('td').forEach(function (el, i) {
        var tableCell = el;
        var tableCellTitle = tableCell.closest('table').querySelector('th[tabindex="' + i + '"]').innerHTML;
        tableCell.setAttribute('data-title', tableCellTitle);
      });
    });
  });
});

window.onload = function () {
  // console.log('window loaded');
  document.querySelector('.loader').classList.add('fadeOut');
  loadAndResize();
};

window.addEventListener('resize', function () {
  // console.log('window resize');
  loadAndResize();
});

var loadAndResize = function loadAndResize() {
  mainContent.style.cssText = "padding-top: ".concat(header.offsetHeight, "px;");
}; // < *** vanilla js ***

/*
click function
document.querySelector('selector').addEventListener('click', function() {
    // do function
});
*/

/*
//edit classes
document.querySelector('selector')
.classList.add('foo')
.classList.remove('foo')
.classList.toggle('foo')
.classList.contains('foo')
*/

/*
// css styles in js
document.querySelector('.selector')
.style.paddingTop = '200px'
.style.cssText='left: 100%;';
*/
// getBoundingClientRect
// document.querySelector('.selector').getBoundingClientRect();

/*
document.addEventListener('DOMContentLoaded', function () {
   console.log('document loaded');
});
window.onload = function () {
    console.log('window loaded');
};
window.addEventListener('resize', function () {
    console.log('window resize');
});
window.onbeforeunload = function () {
    console.log('check when user out page');
    return 'message text';
};
*/
// *** vanilla js *** />

/***/ })
/******/ ]);