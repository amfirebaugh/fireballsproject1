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

        $(".population-graphic").empty();

        if (pop === "unknown") {
            $("#unknown-population").append("<img src=\"images/populationunknown.png\" style=\"height: 50px; width: 50px;\">");
        } else if (pop <= 1000) {
            var numberOfIcons = pop / 100;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#black-population").append("<img src=\"images/populationblack.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 1000 && pop <= 10000) {
            var numberOfIcons = pop / 1000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#grey-population").append("<img src=\"images/populationgrey.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 10000 && pop <= 100000) {
            var numberOfIcons = pop / 10000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#pink-population").append("<img src=\"images/populationpink.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 100000 && pop <= 1000000) {
            var numberOfIcons = pop / 100000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#purple-population").append("<img src=\"images/populationpurple.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 1000000 && pop <= 10000000) {
            var numberOfIcons = pop / 1000000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#indigo-population").append("<img src=\"images/populationindigo.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 10000000 && pop <= 100000000) {
            var numberOfIcons = pop / 10000000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#blue-population").append("<img src=\"images/populationblue.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 100000000 && pop <= 1000000000) {
            var numberOfIcons = pop / 100000000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#green-population").append("<img src=\"images/populationgreen.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 1000000000 && pop <= 10000000000) {
            var numberOfIcons = pop / 1000000000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#yellow-population").append("<img src=\"images/populationyellow.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 10000000000 && pop <= 100000000000) {
            var numberOfIcons = pop / 10000000000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#orange-population").append("<img src=\"images/populationorange.png\" style=\"height: 25px; width: 25px;\">");
            }
        } else if (pop > 100000000000 && pop <= 1000000000000) {
            var numberOfIcons = pop / 100000000000;
            for (i = 1; i <= numberOfIcons; i++) {
                $("#red-population").append("<img src=\"images/populationred.png\" style=\"height: 25px; width: 25px;\">");
            }
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
            // toString().replace... method puts commas in the numbers
            $("#planetPopulation").text("Population: " + response.results[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            
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
            planetPopulation = response.population;

            $("#planetName").text("Name: " + response.name);
            $("#planetTerrain").text("Terrain: " + response.terrain);
            $("#planetClimate").text("Climate: " + response.climate);
            // Put commas in the numbers
            $("#planetPopulation").text("Population: " + response.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

            // $("#planetImg").attr("src", "images/tatooine.jpg");
            generatePopulationGraphic(planetPopulation);
        });

    }

    $(document).on("click", "#submit-btn", displayChosenPlanetInfo);
    $(document).on("click", "#random-btn", displayRandomPlanetInfo);

});
