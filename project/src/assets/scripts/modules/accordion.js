// accordion
document.querySelectorAll('.accordion').forEach(function (accordion) {
    accordion.querySelectorAll('.accordion-item').forEach(function (item, i) {
        // set first item active class for default open
        if (i == 0) {
            item.classList.add('active');
        }

        // if need tabindex attr
        // item.setAttribute('tabindex', i);

        let itemTitle = item.querySelector('.accordion-title');
        let parent = item.closest('.accordion')

        itemTitle.addEventListener('click', function () {
            if (itemTitle.closest('.accordion-item').classList.contains('active')) {
                item.classList.remove('active');
            } else {
                // for closed non target items
                if (parent.querySelector('.accordion-item.active')) {
                    parent.querySelector('.accordion-item.active').classList.remove('active');
                }
                item.classList.add('active');
            }
        });
    });
});
