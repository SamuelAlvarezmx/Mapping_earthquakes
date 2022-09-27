// add console log to check if the code is working

console.log('working');

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-streets-v11",
    accessToken: API_KEY
  });



let dark = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY
});
// create a base layer that holds both maps.

let baseMaps = {

  Street: streets,

  Dark: dark
};


// create the map object with a center and zoom level

let map = L.map('mapid', {
    
    center: [30,30],
    
    zoom: 2,

    layers: [streets]
  });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// passing our map layers into layers control and add the layers control to the map

L.control.layers(baseMaps).addTo(map);
//accessing the airport GeoJson URL

let airportData = 'https://raw.githubusercontent.com/SamuelAlvarezmx/Mapping_earthquakes/main/majorAirports.json'
// Grabbing our Geo JSON data.

d3.json(airportData).then(function(data){

  console.log(data);

  //creating a GeoJson layer with the retreived data.

  L.geoJSON(data).addTo(map);
});