document.querySelector('body').insertAdjacentHTML('beforeend', '<button class="to-top">to top</button>');

let topButton = document.querySelector('.to-top');

topButton.addEventListener('click', () => {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': 0
    });
});

window.addEventListener('scroll', (e) => {
    let windowHeight = e.currentTarget.innerHeight;
    let offsetTop = e.currentTarget.scrollY;

    if (offsetTop > windowHeight) {
        topButton.classList.add('show');
    } else {
        topButton.classList.remove('show');
    }

});