"use strict";
const cards = document.querySelectorAll(".memory-card");
const time = document.querySelector(".time");
const reload = document.querySelector(".reload");
const timers = document.querySelector(".calculate");
const overlay = document.querySelector(".hide");
const overlay2 = document.querySelector(".hide2");
const play = document.querySelector(".play");
const play2 = document.querySelector(".play2");
let hasFlippedCard = false;
let lockBoard = false;
let disply = false;
let firstCard, secondCard;
let clock = true;
let number = 0;
let click = 0;
let timer = 60;
setInterval(() => {
  if (clock) {
    timer--;
    if (timer === 0) {
      timers.innerHTML = 0;
      overlay.style.visibility = "visible";
    } else if (timer >= 1) {
      timers.innerHTML = timer;
    }
  }
}, 1000);