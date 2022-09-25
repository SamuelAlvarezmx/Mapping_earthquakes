// add console log to check if the code is working

console.log('working');

// create the map object with a center and zoom level

let map = L.map('mapid', {
    
    center: [40.7, -94.5],
    
    zoom: 4});
// get data from cities.js

let cityData = cities;

// loop though the cities array and create one marker for each city

cityData.forEach(city=> {console.log(city)

    L.circleMarker(city['location'], {

        radius: city['population']/200000,
        color: 'orange',
        weight: 4
    })

    .bindPopup('<h2>'+city['city']+','+city.state+'</h2><hr><h3>Population' + " " + city['population']+'</h3>').addTo(map)

});
// another way to use the mapbox data is the following

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
  });

// add marker to the map for los angeles, california

//let marker = L.marker([34.0522,-118.2437]).addTo(map); it makes a pinpoint in the map

// to make it to a circle




// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);