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


function reset() {
    timer = 60;
    timers.innerHTML = 60;
    click = 0;
    time.textContent = click;
    cards.forEach((card) => {
      if (card.classList.contains("flip")) {
        card.classList.remove("flip");
        time.textContent = "0";
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
        card.style.visibility = "visible";
      }
    });
  }

  play.addEventListener("click", function () {
    overlay.style.visibility = "hidden";
    resetBoard();
    reset();
  });
  play2.addEventListener("click", function () {
    overlay2.style.visibility = "hidden";
    resetBoard();
    reset();
    clock = true;
  });

  function flipCard() {
    if (disply) return;
    if (lockBoard) return;
    if (this === firstCard) return;
  
    this.classList.add("flip");
    click++;
    time.textContent = click;
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
  
      return;
    }
  
    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  
    isMatch ? disableCards() : unflipCards();
  }
  
  function disableCards() {
    disply = true;
    setTimeout(() => {
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
    }, 1500);
  
    number++;
  
    if (number === 6) {
      clock = false;
      overlay2.style.visibility = "visible";
    }
    setTimeout(() => {
      disply = false;
      resetBoard();
    }, 1600);
  }