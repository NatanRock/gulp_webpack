// wrap the first word in the span
document.querySelectorAll('.selector').forEach(function (el) {
    el.innerHTML = el.innerHTML.replace( /^(.+?\s)/, '<span>$1</span>' );
});