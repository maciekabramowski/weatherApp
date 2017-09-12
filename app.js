// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
// .options({
//   a:{
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
//   if (errorMessage){
//     console.log(errorMessage);
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });



//0992c7b54041b2e0870f92fa89a62444

const request = require('request');

request({
  url:`https://api.darksky.net/forecast/0992c7b54041b2e0870f92fa89a62444/52.218331,21.0165769?units=ca`,
  json:true
},(error, response, body) => {
  if(!error && response.statusCode === 200){
    console.log(`Current temperature: ${body.currently.temperature}C`);
  }else {
    console.log('Unable to fetch weather.');
  }
});
