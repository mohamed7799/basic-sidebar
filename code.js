"use strict"
//variables

let toggle = document.getElementById("toggle");
let side = document.getElementById("side");
let close = document.getElementById("side__close");

toggle.addEventListener("click", () => {

    side.classList.toggle("show");
})

close.addEventListener("click", () => {
    side.classList.remove("show");
})