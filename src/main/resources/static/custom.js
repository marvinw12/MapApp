let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.844167, lng: -72.741389},
    zoom: 10
  });
}