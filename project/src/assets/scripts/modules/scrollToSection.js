// scroll to section
document.querySelectorAll('a[data-scroll-item]').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.nav-toggle').classList.remove('active');
        document.querySelector('.nav-wrap').classList.remove('active');

        var scrollNumb = this.getAttribute('data-scroll-item');

        scrollIt(document.querySelector('section[data-scroll-section="' + scrollNumb + '"]'));
    });
});

function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop - document.querySelector('.header').offsetHeight
    });
}

// *** jqery version ***
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