// Slider 

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 1920;
const step = 960;
let currentRight = 0;

next.addEventListener("click", function() {
    if (currentRight < maxRight) {
      currentRight += step;
      items.style.right = currentRight + "px";
    }
  });
  
prev.addEventListener("click", function() {
    if (currentRight > minRight) {
      currentRight -= step;
      items.style.right = currentRight + "px";
    }
  });