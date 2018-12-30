$(document).ready(function() {

    // Tatooine is selected on the dropdown by default
    var selectedPlanet = "tatooine";
    var planetPopulation;

    // When the selection on the dropdown changes...
    $("select.planet-selection").change(function(){
        // Store the value of the selected planet into a variable
        selectedPlanet = $(this).children("option:selected").val();
    });

    function generatePopulationGraphic(pop) {
        $("#planetPopulationGraphic").empty();
        console.log(pop);
        // if (pop === "unknown") {
        //     $("#planetPopulationGraphic").append("<img src=\"images/populationunknown.png\" style=\"height: 50px; width: 50px;\">");
        // } else 
        if (pop <= 1000000) {
            var numberOfIcons = pop / 100000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#planetPopulationGraphic").append("<img src=\"images/populationblue.png\" style=\"height: 50px; width: 50px;\">");
            }
        } else if (pop > 1000000 && pop <= 1000000000) {
            var numberOfIcons = pop / 100000000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#planetPopulationGraphic").append("<img src=\"images/populationgreen.png\" style=\"height: 50px; width: 50px;\">");
            }
        } else if (pop === "unknown") {
            $("#planetPopulationGraphic").append("<img src=\"images/populationunknown.png\">");
        }
    }
    
    // displayPlanetInfo function re-renders the HTML to display the appropriate content
    function displayChosenPlanetInfo() {

        $("#submit-btn").attr("data-name", selectedPlanet);

        var planet = $(this).attr("data-name");
        var queryURL = "https://swapi.co/api/planets/?search=" + planet;

        // Creates an AJAX call for the specific planet being chosen
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // var name = response.name;
            planetPopulation = response.results[0].population;

            $("#planetName").text("Name: " + response.results[0].name);
            $("#planetTerrain").text("Terrain: " + response.results[0].terrain);
            $("#planetClimate").text("Climate: " + response.results[0].climate);
            $("#planetPopulation").text("Population: " + response.results[0].population);

            // $("#planetImg").attr("src", "images/tatooine.jpg");
            generatePopulationGraphic(planetPopulation);
        });

    }

    function displayRandomPlanetInfo() {

        var random = Math.floor(Math.random() * (61 - 1)) + 1;

        // var planet = $(this).attr("data-name");
        var queryURL = "https://swapi.co/api/planets/" + random;
        console.log(queryURL);

        // Creating an AJAX call for the planet chosen at random
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
