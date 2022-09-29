const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=56f7db0d9566302c4d2c6ed4ffc5a880&query=Rio de Janeiro&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVvdGFuYWthIiwiYSI6ImNsOG1jenU3OTBkZHMzb2xnMzUzcXNodG8ifQ.staMKF_5txrt8Uu0grL5vQ&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
