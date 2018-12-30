var queryURL2 = "https://api.nasa.gov/planetary/apod?api_key=4PvAo6XRKPmQI7X7QAYEYvAeYYRERXf8DV4eqGiH";

$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(response.url);
  var imgURL= response.url;
  $('.container').css('background-image', `url(${imgURL})`);
  $('.container').css('background-repeat', 'no-repeat');
  $('.container').css('background-size', 'cover');
  // below vh is viewport height, woohoo!
  $('.container').css('height', '100vh');
  $('.container').css('opacity', '0.7');
})