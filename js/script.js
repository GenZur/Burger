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

// map 

function initMap() {
  var uluru = {lat: 56.94762389999999, lng: 23.617718999999965};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}