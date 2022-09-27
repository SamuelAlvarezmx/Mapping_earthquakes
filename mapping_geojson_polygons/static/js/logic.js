// add console log to check if the code is working

console.log('working');

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });



let satelliteStreets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY
});
// create a base layer that holds both maps.

let baseMaps = {

  Streets: streets,

  'Satellite Streets': satelliteStreets
};


// create the map object with a center and zoom level

let map = L.map('mapid', {
    
    center: [43.7,-79.3],
    
    zoom: 11,

    layers: [satelliteStreets]
  });

// passing our map layers into layers control and add the layers control to the map

L.control.layers(baseMaps).addTo(map);
//accessing the toronto hoods GeoJson URL

let torontoHoods = 'https://raw.githubusercontent.com/SamuelAlvarezmx/Mapping_earthquakes/main/torontoNeighborhoods.json'

// Grabbing our Geo JSON data.

d3.json(torontoHoods).then(function(data){

  console.log(data);

  //creating a GeoJson layer with the retreived data.

  L.geoJSON(data).addTo(map);
});