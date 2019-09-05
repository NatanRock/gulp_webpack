// function
function thousandthSeparator(elem) {
    let $this = document.querySelector(elem)
    let number = $this.innerText;
    number = number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    $this.innerHTML = number;
}

// or forEach
document.querySelectorAll('.numb-separator').forEach(function(elem) {
    let number = elem.innerText;
    number = number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    elem.innerHTML = number;
});