// add console log to check if the code is working

console.log('working');

// We create the tile layer that will be the background of our map.
let light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
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

  Street: light,

  Dark: dark
};


// create the map object with a center and zoom level

let map = L.map('mapid', {
    
    center: [44,-80],
    
    zoom: 2,

    layers: [dark]
  });

// Then we add our 'graymap' tile layer to the map.
light.addTo(map);


// passing our map layers into layers control and add the layers control to the map

L.control.layers(baseMaps).addTo(map);
//accessing the airport GeoJson URL

let torontoData = 'https://raw.githubusercontent.com/SamuelAlvarezmx/Mapping_earthquakes/main/torontoRoutes.json'

// cREATE A STYLE FOR THE LINES

let myStyle = {
  color: '#ffffa1',
  weight: 2
}

// Grabbing our Geo JSON data.

d3.json(torontoData).then(function(data){

  console.log(data);

  //creating a GeoJson layer with the retreived data.

  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer){
      layer.bindPopup('<h3> Airline: ' + feature.properties.airline + 
      '</h3><hr><h3> Destination: ' + feature.properties.dst + '</h3>')
    } 
  }).addTo(map);
});