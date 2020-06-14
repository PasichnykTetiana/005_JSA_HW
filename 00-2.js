let plus = document.getElementById("plus"),
    minus = document.getElementById("minus"),
    divis = document.getElementById("divis"),
    multi = document.getElementById("multi"),
    message = document.getElementById("message"),
    guard = document.getElementById("guard"),
    num = document.getElementsByClassName("num");


{
    plus.addEventListener("click",
        function () {
            let res = Number(num[0].value) + Number(num[1].value);
            message.innerHTML = res;
        });
}
{
    minus.addEventListener("click",
        function () {
            let res = Number(num[0].value) - Number(num[1].value);
            message.innerHTML = res;
        });
}
{
    divis.addEventListener("click",
        function () {
            let res = Number(num[0].value) / Number(num[1].value);
            message.innerHTML = res;
        });
}
{
    multi.addEventListener("click",
        function () {
            let res = Number(num[0].value) * Number(num[1].value);
            message.innerHTML = res;
        });
}
guard.addEventListener("keypress", function (e) {
    console.log(!String.fromCharCode(e.charCode).match(/^[0-9]$/))
    if (!String.fromCharCode(e.charCode).match(/^\d+$/)){
        e.preventDefault();
    }
}, true);

