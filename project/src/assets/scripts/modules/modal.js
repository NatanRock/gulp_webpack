// < modal
document.querySelectorAll('.modal').forEach(function (elem) {
    elem.querySelector('.modal-background').addEventListener('click', function () {
        this.parentNode.classList.remove('modal-show');
        // document.querySelector('body').classList.remove('no-scroll');
    });
    elem.querySelector('.modal-close').addEventListener('click', function () {
        this.parentNode.parentNode.classList.remove('modal-show');
        // document.querySelector('body').classList.remove('no-scroll');
    });
});