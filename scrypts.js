"use strict";

let container = document.querySelector(".container");
let head = container.querySelector(".container-head");
let btnNext = container.querySelector(".btn_next");
let quiz = container.querySelector(".container-quiz");
let intro = quiz.querySelector(".quiz_intro");
let miniQuizButton = intro.querySelector(".quiz_btn-intro");
let questions = quiz.querySelector(".quiz_questions");
let q1Block = questions.querySelector(".quiz_question1");
let q2Block = questions.querySelector(".quiz_question2");
let q3Block = questions.querySelector(".quiz_question3");
let q1SubmitButton = document.querySelector(".q1next");
let q2SubmitButton = document.querySelector(".q2next");
let q3SubmitButton = document.querySelector(".q3next");
let blackScreen = document.querySelector(".blackscreen");
let blackButton = blackScreen.querySelector(".btnblack");
let q1Note = questions.querySelector(".question1_quiz-note");
let q2Note = questions.querySelector(".question2_quiz-note");
let q3Note = questions.querySelector(".question3_quiz-note");
let endScreen = document.querySelector(".endscreen");

const a1 = document.querySelector("#Answer1");
const a2 = document.querySelector("#Answer2");
const a3 = document.querySelector("#Answer3");
const a4 = document.querySelector("#Answer4");
const a5 = document.querySelector("#Answer5");
const a6 = document.querySelector("#Answer6");
const a7 = document.querySelector("#Answer7");
const a8 = document.querySelector("#Answer8");
const a9 = document.querySelector("#Answer9");

btnNext.addEventListener("click", function () {
  head.classList.add("hidden");
  container.classList.remove("container_head-img");
  quiz.classList.remove("hidden");
  container.classList.add("container_quiz-img");
});

miniQuizButton.addEventListener("click", function () {
  intro.classList.add("hidden");
  questions.classList.remove("hidden");
});

a2.addEventListener("change", function () {
  if (a2.checked) {
    q1Note.classList.remove("hidden");
  } else if (!a2.checked) {
    q1Note.classList.add("hidden");
  }
});

a1.addEventListener("change", function () {
  if (a1.checked) {
    alert("мимо...");
    a1.checked = false;
  }
});

a3.addEventListener("change", function () {
  if (a3.checked) {
    alert("мимо...");
    a3.checked = false;
  }
});

q1SubmitButton.addEventListener("click", () => {
  q1Block.classList.add("hidden");
  q2Block.classList.remove("hidden");
});

a6.addEventListener("change", function () {
  if (a6.checked) {
    q2Note.classList.remove("hidden");
  } else if (!a6.checked) {
    q2Note.classList.add("hidden");
  }
});

a4.addEventListener("change", function () {
  if (a4.checked) {
    alert("мимо...");
    a4.checked = false;
  }
});

a5.addEventListener("change", function () {
  if (a5.checked) {
    alert("мимо...");
    a5.checked = false;
  }
});

q2SubmitButton.addEventListener("click", () => {
  q2Block.classList.add("hidden");
  q3Block.classList.remove("hidden");
});

a7.addEventListener("change", function () {
  if (a7.checked) {
    q3Note.classList.remove("hidden");
  } else if (!a7.checked) {
    q3Note.classList.add("hidden");
  }
});

a9.addEventListener("change", function () {
  if (a9.checked) {
    q3Note.classList.remove("hidden");
  } else if (!a9.checked) {
    q3Note.classList.add("hidden");
  }
});

a8.addEventListener("change", function () {
  if (a8.checked) {
    alert("БАБАХ");
    a8.checked = false;
    quiz.classList.add("hidden");
    blackScreen.classList.remove("hidden");
  }
});

q3SubmitButton.addEventListener("click", () => {
  quiz.classList.add("hidden");
  endScreen.classList.remove("hidden");
});

blackButton.addEventListener("click", () => {
  blackScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
});
