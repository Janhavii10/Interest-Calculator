const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const year = document.getElementById("year");
const display = document.getElementById("display");


function calcSI() {
    let p = Number(amount.value);
    let r = Number(rate.value);
    let y = Number(year.value);
    let si = (r * y * p) / 100;
    display.innerHTML = si;
}

function calcCI() {
    let p = Number(amount.value);
    let r = Number(rate.value);
    let y = Number(year.value);
    let total = p * (Math.pow((1 + r / 100), y));
    let ci = total - p;
    display.innerHTML = ci;
}

function reset() {
    display.innerHTML = "Amount";
    amount.value = "";
    rate.value = "";
    year.value = "";
}