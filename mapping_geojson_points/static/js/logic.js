// add console log to check if the code is working

console.log('working');

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// create the map object with a center and zoom level

let map = L.map('mapid', {
    
    center: [37.5, -122.5],
    
    zoom: 10});



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

// grabbing our GeojSON data.

//L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our Geo JSON data.

L.geoJSON(sanFranAirport, {

  // we turn each feature into a marker on the map.

  pointToLayer: function(feature,latlng){
    console.log(feature);
    return L.marker(latlng)
    .bindPopup('<h2>' + feature.properties.city+'</h2>');
  }
}


).addTo(map);

//grabbing our geoJSON data.

L.geoJSON(sanFranAirport, {

  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup();
  }
}).addTo(map)