"use strict";

const btn = document.getElementById("btn");
const p = document.querySelector(".joke");
const img = document.querySelector(".img");

btn.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      p.textContent = data.value;
      img.src = data.icon_url;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
