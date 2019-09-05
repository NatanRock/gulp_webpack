// ajax send form
document.querySelectorAll('.form').forEach(function (elem, i) {
    elem.addEventListener('submit', function (e) {
        e.preventDefault();

        var data = new FormData(this),
            xhr = new XMLHttpRequest(),
            th = this;

        if (validForm(th)) {
            xhr.addEventListener('load', function () {
                console.log('form send!');
                th.classList.add('sended');
                setTimeout(function () {
                    th.classList.remove('sended');
                    th.reset();
                }, 3000);
            });
            xhr.open('POST', 'php/mail.php', true); // php/mail.php (path to script.php)
            xhr.send(data);
        }
    });
});

function validForm(elem) {
    var inputs = elem.querySelectorAll('input[data-required]'),
        validForm = true;

    inputs.forEach(function (elem, i) {
        if (elem.value == '') {
            elem.parentNode.classList.add('error');

            validForm = false;
        } else {
            elem.parentNode.classList.remove('error');
        }
    });

    return validForm;
}

/* html template

<form class="form form-call-back">
    <input type="hidden" name="project_name" value="Site Name">
    <input type="hidden" name="from_email" value="mysite@mysite.site">
    <input type="hidden" name="to_email" value="alx.pedchenko@gmail.com">
    <input type="hidden" name="form_subject" value="Form Subject">
    <input type="hidden" name="submit-page" value="home">

    <label data-error-message="Пожалуйста, введите ваше Имя">
        <input type="text" name="name" placeholder="* ваше Имя" data-required>
    </label>

    <label data-error-message="Пожалуйста, введите ваш Телефон">
        <input type="tel" name="phone" placeholder="* ваш Телефон" data-required>
    </label>

    <label>
        <input type="email" name="email" placeholder="ваш E-mail">
    </label>

    <button class="button button-fill" type="submit">Отправить</button>

    <div class="form-success">
        <p>Спасибо! <br> Форма успешно отправлена.</p>
    </div>
</form>

*/