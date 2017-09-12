const request = require('request');

var getWeather = (lat, lng, callback) => {request({
  url:`https://api.darksky.net/forecast/9c55e54dcd20a71b8f34633b3eb28ba0/${lat},${lng}?units=ca`,
  json:true
},(error, response, body) => {
  if(!error && response.statusCode === 200){
    callback(undefined, `Current temperature: ${body.currently.temperature}C`);
  }else {
    callback('Unable to fetch weather.');
  }
});
};

module.exports.getWeather = getWeather;
