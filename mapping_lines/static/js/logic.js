// add console log to check if the code is working

console.log('working');

// create the map object with a center and zoom level

let map = L.map('mapid', {
    
    center: [37.6213, -122.379],
    
    zoom: 5});
// get data from cities.js

let cityData = cities;


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-streets-v11",
    accessToken: API_KEY
  });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// coordinates for each point to be used in the line

let line = [  
[33.9416, -118.4085],
[37.6213, -122.3790],
[40.7899, -111.9791],
[47.4502, -122.3088]
  ];

L.polyline(line, {

    color: 'yellow'
}).addTo(map);