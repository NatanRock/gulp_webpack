// *** jquery ***
$('[data-tooltip]').on('mouseenter', function () {
    let tooltipText = $(this).attr('data-tooltip');
    $(this)
        .css({ position: 'relative' })
        .append(`<span class="tooltip-msg">${tooltipText}</span>`)
        .find('.tooltip-msg').fadeIn(100);

    let tooltip = $(this).find('.tooltip-msg');
    if ((tooltip.offset().left + tooltip.outerWidth() < window.innerWidth - 20)) {
    } else {
        tooltip.css({
            'top': 'calc(100% + 10px)',
            'left': '0'
        });
    }
}).on('mouseleave', function () {
    let th = $(this);

    th.find('.tooltip-msg').fadeOut(100);
    setTimeout(() => {
        th
            .removeAttr('style')
            .find('.tooltip-msg').remove();
    }, 100);
});


/*
sass
*[data-tooltip]
    +tr
    border-bottom: 1px dashed rgba(#000000, 0.4)
    &:hover
        border-bottom-color: transparent
.tooltip-msg
    pointer-events: none
    display: none
    position: absolute
    top: 0
    left: calc(100% + 10px)
    width: 220px
    padding: 10px 15px
    background: #222222
    color: #ffffff
    font-size: 12px
    z-index: 1
    border-radius: 5px

html
<span data-tooltip="tooltip some msg">element</span>

добавить data-tooltip-position="top rgiht left bottom"
*/
