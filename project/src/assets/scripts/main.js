// < *** packages ***
import $ from 'jquery';
// import 'slick-carousel';
// import TweenMax from "gsap/TweenMax";
// import TimelineMax from "gsap/TimelineMax";
// *** packages *** />

// < *** modules ***
// import module from './modules/module.js';
// import log from './modules/log.js';
// *** modules *** />

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const mainWrapper = document.querySelector('.main-wrapper');
const mainContent = document.querySelector('.main-content');

$(document).ready(function () {
    // log('DOM ready');

    // add top scroll line in top window
    $('body').append('<div class="scroll-line"></div>');

    // add button to top
    $('body').append('<div class="to-top"></div>');
    $('.to-top').click(function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
    });


    // < modal

    $('.modal-close').on('click', function () {
        $(this).parent().parent().fadeOut();
    });
    $('.modal-substrate').on('click', function () {
        $(this).parent().fadeOut();
    });
    $('.button-modal').on('click', function (e) {
        e.preventDefault();
        $('.modal.modal-form').fadeIn();
    });

    // modal />



    // < E-mail Ajax Send

    // $("form.form").submit(function () { //Change
    //     var th = $(this);
    //     $.ajax({
    //         type: "POST",
    //         url: "/assets/mail.php", //Change
    //         data: th.serialize()
    //     }).done(function () {
    //         th.addClass('sended');
    //         setTimeout(function () {
    //             th.removeClass('sended');
    //             th.trigger("reset");
    //         }, 3000);
    //     });
    //     return false;
    // });

    // E-mail Ajax Send />

    // bind scroll to anchor links (<a href="#section-id">go to section with animation</a>)
    // $(document).on("click", "a[href^='#']", function (e) {
    //     var id = $(this).attr("href");
    //     if ($(id).length > 0) {
    //         e.preventDefault();
    //         $("html, body").animate({
    //             scrollTop: $(id).offset().top
    //         }, 500); // 500 - 0.5s
    //         // add href attr to browser row
    //         // if supported by the browser we can even update the URL.
    //         // if (window.history && window.history.pushState) {
    //         //     history.pushState("", document.title, id);
    //         // }
    //     }
    // });

    // Replace all SVG images with inline SVG (<img src="./svg-img.svg" alt="">)
    // $('.img').each(function () {
    //     var $img = $(this);
    //     var imgClass = $img.attr('class');
    //     var imgURL = $img.attr('src');
    //     $.get(imgURL, function (data) {
    //         // Get the SVG tag, ignore the rest
    //         var $svg = $(data).find('svg');
    //         // Add replaced image's classes to the new SVG
    //         if (typeof imgClass !== 'undefined') {
    //             $svg = $svg.attr('class', imgClass + ' replaced-svg');
    //         }
    //         // Remove any invalid XML tags as per http://validator.w3.org
    //         $svg = $svg.removeAttr('xmlns:a');
    //         // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    //         if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
    //             $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    //         }
    //         // Replace image with new SVG
    //         $img.replaceWith($svg);
    //     }, 'xml');
    // });

    // wrap the first word in the span
    // $('.class').each(function () {
    //     this.innerHTML = this.innerHTML.replace( /^(.+?\s)/, '<span>$1</span>' );
    // });

    // scroll to container
    // $(".button").click(function () {
    //     $("html, body").animate({
    //         scrollTop: $(".container").offset().top
    //     }, 800);
    // });

});

$(window)
    .on('load', function () {
        // ready when all img is load

        // $('.loader').fadeOut();
    })
    .on('resize', function () {
    })
    .on('scroll', function () {
        // < scroll-line
        let windowTop = $(window).scrollTop(),
            documentHeight = $(document).height(),
            windowHeight = $(window).height();
        let scrolled = (windowTop / (documentHeight - windowHeight)) * 100;
        $('.scroll-line').css('width', (scrolled + '%'));
        // scroll-line />

        // < show button to top
        if ($(this).scrollTop() > $(window).height()) {
            $('.to-top').addClass("show");
        } else {
            $('.to-top').removeClass("show");
        };
        // show button to top />
    });

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    //log('scroll any direction');
    // enter code here

    // scroll direction
    let st = this.scrollY;
    if (st > lastScrollTop) {
        // scroll down

    } else if (st == lastScrollTop) {
        //do nothing
        //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
    } else {
        // scroll up

    }
    lastScrollTop = st;
});


// < parallax function
// window.onscroll = function () {
//     let scrolling = this.scrollY;
//     parallax('section', scrolling);
// }

// function parallax(section, OffsetScroll) {
//     let OffsetSection = ($('.' + section + '').offset().top - 200 - OffsetScroll) * -1;
//     $('.' + section + ' .decor-item').each(function () {
//         let divider = ($(this).attr('data-speed'));

//         if ((OffsetSection > 0) && (OffsetSection < $('.' + section + '').outerHeight() + 200)) {
//             $(this).css({
//                 'transform': 'translateY(' + OffsetSection / divider + '%)' +
//                     ' rotate(' + OffsetSection / (divider * 10) + 'deg)'
//             });
//         }
//     });
// }

// parallax function / >



// <loadAndResize

// $(window)
//     .on('load', function () {
//         // always last
//         loadAndResize();
//     })
//     .on('resize', function () {
//         // always last
//         loadAndResize();
//     });

// let loadAndResize = () => {
//     mainContent.style.cssText =
//         `padding-top: ${header.offsetHeight}px;
//         min-height: calc(100vh - ${footer.offsetHeight}px);`;
// }

// loadAndResize/>


// < *** vanilla js ***

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

// getBoundingClientRect
// console.log(document.querySelector('.item').getBoundingClientRect());

// // check when user out page
// window.onbeforeunload = function () {
//     return 'message text';
// };

// document.addEventListener('DOMContentLoaded', function () {
//     // enter code here
// });

// window.onload = function () {
//     log('window loaded');
// };

// window.addEventListener('resize', function () {
//     log('window resize');
// });

// *** vanilla js *** />