var queryURL2 = "https://api.nasa.gov/planetary/apod?api_key=4PvAo6XRKPmQI7X7QAYEYvAeYYRERXf8DV4eqGiH";

$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.url);
  var imgURL= response.url;
  $('body').css('background-image', `url(${imgURL})`);
  $('body').css('background-repeat', 'no-repeat');
  $('body').css('background-size', 'cover');
  $('body').css('background-attachment', 'fixed');

})