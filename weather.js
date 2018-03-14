let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  // YOUR CODE GOES HERE

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.
  $('.card-text').text("It is " + Math.round(data.main.temp) + " degrees outside");
  $('.card-title').text(data.name);
  $('.card-img-top').attr('src', "http://openweathermap.org/img/w/"+data.weather[0].icon+".png");

}


let getWeather = function(info) {
  console.log("info")
  let div = jQuery("#weather");
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = '1946a956bdd8b2584cb680353b960daa'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'


  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let handlePosition = function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);


}

let link = jQuery("#get_forecast")
link.on("click", handlePosition);




////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////
