// modules
// import module from './modules/module.js';
import log from './modules/log.js';

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const mainWrapper = document.querySelector('.main-wrapper');
const mainContent = document.querySelector('.main-content');

// //on clicl function
// document.querySelector('selector').addEventListener('click', function(){
//     // do function
// });

// add class
// document.querySelector('selector').classList.add('foo')

// remove class
// document.querySelector('selector').classList.remove('foo')

// toggle class
// document.querySelector('selector').classList.toggle('foo')

// css styles in js
// document.querySelector('.selector').style.paddingTop = '200px'

document.addEventListener('DOMContentLoaded', function () {
    log('document ready');
    // enter code here



});

window.onload = function () {
    log('window loaded');
    // enter code here



    loadAndResize();
};

window.addEventListener('resize', function () {
    log('window resize');



    loadAndResize();
});

function loadAndResize() {

    mainContent.style.cssText =
        'padding-top: ' + header.offsetHeight +'px;' +
        'min-height: calc(100vh - ' + (header.offsetHeight + footer.offsetHeight) + 'px);';

}

// // check when user out page
// window.onbeforeunload = function () {
//     return 'message text';
// };