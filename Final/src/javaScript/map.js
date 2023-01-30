let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.456, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;