let num = document.getElementsByClassName("num"),
btns = document.querySelectorAll('.show');

function myCustomEvent(elems, event, f){
    for(let i = 0; i < elems.length; i++){
        elems[i].addEventListener(event, f[i])
    }
}

let calc = [
    function () {
        let res = Number(num[0].value) + Number(num[1].value);
        message.innerHTML = res;
    },
    function () {
        let res = Number(num[0].value) - Number(num[1].value);
        message.innerHTML = res;
    },
    function () {
        let res = Number(num[0].value) / Number(num[1].value);
        message.innerHTML = res;
    },
    function () {
        let res = Number(num[0].value) * Number(num[1].value);
        message.innerHTML = res;
    }
]

myCustomEvent(btns, 'click', calc);

guard.addEventListener("keypress", function (e) {
    console.log(!String.fromCharCode(e.charCode).match(/^[0-9]$/))
    if (!String.fromCharCode(e.charCode).match(/^\d+$/)){
        e.preventDefault();
    }
}, true);

