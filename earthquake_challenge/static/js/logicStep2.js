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

  'Streets': streets,

  'Satellite Streets': satelliteStreets
};


// create the map object with a center and zoom level

let map = L.map('mapid', {
    
    center: [39.5,-98.5],
    
    zoom: 3,

    layers: [streets]
  });

// passing our map layers into layers control and add the layers control to the map

L.control.layers(baseMaps).addTo(map);
//accessing the toronto hoods GeoJson URL

let earthquakes = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'

// Grabbing our Geo JSON data.

d3.json(earthquakes).then(function(data){

  console.log(data);
  //This function returns the the style data for each of the earthquakes we plot
// on the map. we pass the magnitude of the erthquake into the function
// to calculate the radius
  function styleInfo(feature){
    return{
      opacity:1,
      fillOpacity: 1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.

function getRadius(magnitude){
  if (magnitude === 0){
    return 1;
  }

  return magnitude * 4;

}
  //creating a GeoJson layer with the retreived data.

  L.geoJSON(data,{

    pointToLayer: function(feature, latlng){
      console.log(data);
      
      return L.circleMarker(latlng);
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo
  }).addTo(map)

});
