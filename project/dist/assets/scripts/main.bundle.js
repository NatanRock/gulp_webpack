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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ajaxSendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_ajaxSendForm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_ajaxSendForm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_toTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_toTop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_toTop__WEBPACK_IMPORTED_MODULE_2__);
// *** import packages example ***
// import TweenMax from "gsap/TweenMax";
// *** import modules example ***
// import log from './modules/log.js';



var header = document.querySelector('.header');
var footer = document.querySelector('.footer');
var mainWrapper = document.querySelector('.main-wrapper');
var mainContent = document.querySelector('.main-content');
document.addEventListener('DOMContentLoaded', function () {});

window.onload = function (e) {
  // console.log(e.currentTarget;
  document.querySelector('.loader').classList.add('fadeOut');
  loadAndResize();
};

window.addEventListener('resize', function (e) {
  // console.log(e.currentTarget;
  loadAndResize();
});
window.addEventListener('scroll', function (e) {// console.log(e.currentTarget);
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// accordion
document.querySelectorAll('.accordion').forEach(function (accordion) {
  accordion.querySelectorAll('.accordion-item').forEach(function (item, i) {
    // set first item active class for default open
    if (i == 0) {
      item.classList.add('active');
    } // if need tabindex attr
    // item.setAttribute('tabindex', i);


    var itemTitle = item.querySelector('.accordion-title');
    var parent = item.closest('.accordion');
    itemTitle.addEventListener('click', function () {
      if (itemTitle.closest('.accordion-item').classList.contains('active')) {
        item.classList.remove('active');
      } else {
        // for closed non target items
        if (parent.querySelector('.accordion-item.active')) {
          parent.querySelector('.accordion-item.active').classList.remove('active');
        }

        item.classList.add('active');
      }
    });
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// ajax send form
document.querySelectorAll('.form').forEach(function (elem, i) {
  elem.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(this),
        xhr = new XMLHttpRequest(),
        th = this;

    if (validForm(th)) {
      xhr.addEventListener('load', function () {
        console.log('form send!');
        th.classList.add('sended');
        setTimeout(function () {
          th.classList.remove('sended');
          th.reset();
        }, 3000);
      });
      xhr.open('POST', 'assets/mail.php', true); // php/mail.php (path to script.php)

      xhr.send(data);
    }
  });
});

function validForm(elem) {
  var inputs = elem.querySelectorAll('input[data-required]'),
      validForm = true;
  inputs.forEach(function (elem, i) {
    if (elem.value.length < 3) {
      elem.parentNode.classList.add('error');
      setTimeout(function () {
        elem.parentNode.classList.remove('error');
      }, 3000);
      validForm = false;
    } else {
      elem.parentNode.classList.remove('error');
    }
  });
  return validForm;
}
/* html template

<form class="form form-call-back">
    <input type="hidden" name="project_name" value="Site Name">
    <input type="hidden" name="from_email" value="mysite@mysite.site">
    <input type="hidden" name="to_email" value="alx.pedchenko@gmail.com">
    <input type="hidden" name="form_subject" value="Form Subject">
    <input type="hidden" name="submit-page" value="home">

    <label data-error-message="Пожалуйста, введите ваше Имя">
        <input type="text" name="name" placeholder="* ваше Имя" data-required>
    </label>

    <label data-error-message="Пожалуйста, введите ваш Телефон">
        <input type="tel" name="phone" placeholder="* ваш Телефон" data-required>
    </label>

    <label>
        <input type="email" name="email" placeholder="ваш E-mail">
    </label>

    <button class="button button-fill" type="submit">Отправить</button>

    <div class="form-success">
        <p>Спасибо! <br> Форма успешно отправлена.</p>
    </div>
</form>

*/

/***/ }),
/* 3 */
/***/ (function(module, exports) {

document.querySelector('body').insertAdjacentHTML('beforeend', '<button class="to-top">to top</button>');
var topButton = document.querySelector('.to-top');
topButton.addEventListener('click', function () {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 0
  });
});
window.addEventListener('scroll', function (e) {
  var windowHeight = e.currentTarget.innerHeight;
  var offsetTop = e.currentTarget.scrollY;

  if (offsetTop > windowHeight) {
    topButton.classList.add('show');
  } else {
    topButton.classList.remove('show');
  }
});

/***/ })
/******/ ]);