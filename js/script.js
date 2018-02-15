// Slider 

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 2880;
const step = 960;
let currentRight = 0;

prev.addEventListener("click", function() {
    if (currentRight < maxRight) {
      currentRight += step;
      items.style.right = currentRight + "px";
    }
  });
  
next.addEventListener("click", function() {
    if (currentRight > minRight) {
      currentRight -= step;
      items.style.right = currentRight + "px";
    }
  });