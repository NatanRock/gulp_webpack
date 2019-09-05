// *** import packages example ***
// import TweenMax from "gsap/TweenMax";

// *** import modules example ***
// import log from './modules/log.js';

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const mainWrapper = document.querySelector('.main-wrapper');
const mainContent = document.querySelector('.main-content');

document.addEventListener('DOMContentLoaded', function () {
    // console.log('document ready');

document.querySelectorAll('table').forEach(function (table) {

  table.querySelectorAll('th').forEach(function (el, i) {
    el.setAttribute('tabindex', i);
  });

  table.querySelectorAll('tbody tr').forEach(function (row) {
    row.querySelectorAll('td').forEach(function (el, i) {
      let tableCell = el;
      let tableCellTitle = tableCell.closest('table').querySelector('th[tabindex="'+i+'"]').innerHTML;
    
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

let loadAndResize = () => {
    mainContent.style.cssText = `padding-top: ${header.offsetHeight}px;`;
}



// < *** vanilla js ***

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