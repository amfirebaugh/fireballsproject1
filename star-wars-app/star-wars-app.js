$(document).ready(function() {

    var selectedPlanet = "tatooine";

    $("select.planet-selection").change(function(){
        selectedPlanet = $(this).children("option:selected").val();
    });
    
    // displayPlanetInfo function re-renders the HTML to display the appropriate content
    function displayChosenPlanetInfo() {

        $("#submit-btn").attr("data-name", selectedPlanet);

        var planet = $(this).attr("data-name");
        var queryURL = "https://swapi.co/api/planets/?search=" + planet;

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // var name = response.name;

            $("#planetName").text("Name: " + response.results[0].name);
            $("#planetTerrain").text("Terrain: " + response.results[0].terrain);
            $("#planetClimate").text("Climate: " + response.results[0].climate);
            $("#planetPopulation").text("Population: " + response.results[0].population);

            // $("#planetImg").attr("src", "images/tatooine.jpg");
        });

    }

    function displayRandomPlanetInfo() {

        var random = Math.floor(Math.random() * (61 - 1)) + 1;

        // var planet = $(this).attr("data-name");
        var queryURL = "https://swapi.co/api/planets/" + random;
        console.log(queryURL);

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // var name = response.name;

            $("#planetName").text("Name: " + response.name);
            $("#planetTerrain").text("Terrain: " + response.terrain);
            $("#planetClimate").text("Climate: " + response.climate);
            $("#planetPopulation").text("Population: " + response.population);

            // $("#planetImg").attr("src", "images/tatooine.jpg");
        });

    }

    $(document).on("click", "#submit-btn", displayChosenPlanetInfo);
    $(document).on("click", "#random-btn", displayRandomPlanetInfo);

});