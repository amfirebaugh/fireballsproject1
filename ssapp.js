console.log("Hello world");

// NASA Images
var title = "mars"
var queryURL1 = "images-api.nasa.gov/search?q=" + title;

$.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.links.href);
  });