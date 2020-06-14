let message = document.getElementById("message"),
    num = document.getElementsByClassName("num");
function plus() {
let sum = Number(num[0].value) + Number(num[1].value);
message.innerHTML = sum;
}
function minus() {
    let minus = Number(num[0].value) - Number(num[1].value);
    message.innerHTML = minus;
}
function division() {
    let divis = Number(num[0].value) / Number(num[1].value);
    message.innerHTML = divis;
}
function multi() {
    let mul = Number(num[0].value) * Number(num[1].value);
    message.innerHTML = mul;
}