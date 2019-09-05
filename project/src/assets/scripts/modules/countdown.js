// initializeClock('.countdown');

// countdown
function initializeClock(elem) {
    var clock = document.querySelector('' + elem + '');
    var daysSpan = clock.querySelector('.countdown-days');
    var hoursSpan = clock.querySelector('.countdown-hours');
    var minutesSpan = clock.querySelector('.countdown-minutes');
    var secondsSpan = clock.querySelector('.countdown-seconds');
    var over = clock.querySelector('.countdown-message');
    var endtime = clock.getAttribute('data-countdown-date');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clock.classList.add('is-over');
            over.classList.add('visible');

            daysSpan.innerHTML = '0';
            hoursSpan.innerHTML = '0';
            minutesSpan.innerHTML = '0';
            secondsSpan.innerHTML = '0';

            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

/* html template

<!-- data-countdown-date="month(august) day(04) year(2022) hours(17):minutes(22):seconds(00)" -->
<!-- data-countdown-date="july 29 2019 13:18:00" -->
<div class="countdown" data-countdown-date="august 31 2019 23:59:59">
    <div class="countdown-number">
        <span class="countdown-days countdown-time"></span>
        <span class="countdown-text">Дней</span>
    </div>
    <div class="countdown-number">
        <span class="countdown-hours countdown-time"></span>
        <span class="countdown-text">Часов</span>
    </div>
    <div class="countdown-number">
        <span class="countdown-minutes countdown-time"></span>
        <span class="countdown-text">Минут</span>
    </div>
    <div class="countdown-number">
        <span class="countdown-seconds countdown-time"></span>
        <span class="countdown-text">Секунд</span>
    </div>
    <div class="countdown-message">
        <p>done !</p>
    </div>
</div>

*/