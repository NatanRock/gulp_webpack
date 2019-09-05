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