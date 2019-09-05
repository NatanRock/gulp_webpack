// accordion
document.querySelectorAll('.accordion-item').forEach(function (elem, i) {
    // add attr data-index
    // elem.setAttribute('data-index', i);

    // add first child class active
    elem.parentNode.firstElementChild.classList.add('active');

    elem.addEventListener('click', function () {
        elem.parentNode.querySelector('.accordion-item.active').classList.remove('active');
        elem.classList.add('active');
    });
});
