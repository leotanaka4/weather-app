const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=56f7db0d9566302c4d2c6ed4ffc5a880&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        description: response.body.current.weather_descriptions[0],
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
