// *** jquery ***
// parallax function
window.onscroll = function () {
    let scrolling = this.scrollY;
    parallax('parentClassDecors', scrolling);
}

function parallax(section, OffsetScroll) {
    let OffsetSection = ($('.' + section + '').offset().top - 200 - OffsetScroll) * -1;
    $('.' + section + ' .decor-item').each(function () {
        let divider = ($(this).attr('data-parallax-speed'));

        if ((OffsetSection > 0) && (OffsetSection < $('.' + section + '').outerHeight() + 200)) {
            $(this).css({
                'transform': 'translateY(' + OffsetSection / divider + '%)' +
                    ' rotate(' + OffsetSection / (divider * 10) + 'deg)'
            });
        }
    });
}

/*

html template
<section class="parentClassDecors">
    <div class="decor">
        <div class="decor-item" data-parallax-speed="1.2">
            <img src="img-path" alt="">
        </div>
        <div class="decor-item" data-parallax-speed="1.4">
            <img src="img-path" alt="">
        </div>
    </div>
</section>

*/
