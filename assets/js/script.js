// const maintitle = document.querySelector(".title");
// let curntvalue = 0;
// const btnadd = document.querySelector(".addone");
// const btnsave = document.querySelector(".save");
// const btnreset = document.querySelector("reset");
// btnadd.addEventListener("click", function () {
//     maintitle.innerHTML = +maintitle.innerHTML + 1;
// })
const value = document.getElementById('value');
let counter = 0;
function addone() {
    counter = counter + 1;
    document.getElementById('counter').innerHTML = counter;
}
function reset() {
    counter = 0;
    value.innerHTML = 0
    document.getElementById('counter').innerHTML = counter;
}
function save() {
    if (value.innerHTML == 0) {
        value.innerHTML = counter;
    } else {
        value.innerHTML = value.innerHTML + "," + counter;
    }
}

