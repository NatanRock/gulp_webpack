// *** jquery ***
//scroll line in top window
$('body').append(`
<div class="scroll-line"></div>
<style>
.scroll-line {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: red;
    z-index: 999;
}
</style>`);

$(window).on('scroll', function () {
    // < scroll-line
    let windowTop = $(window).scrollTop(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height();
    let scrolled = (windowTop / (documentHeight - windowHeight)) * 100;
    $('.scroll-line').css('width', (scrolled + '%'));
    // scroll-line />
});


