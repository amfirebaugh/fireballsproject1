$(document).ready(function() {

    // Tatooine is selected on the dropdown by default
    var selectedPlanet = "tatooine";
    var planetPopulation;
    var residentQueryURL;
    var planetName;
    var wookieeSound1 = document.createElement("audio");
    wookieeSound1.setAttribute("src", "star-wars-app/sounds/wookieesound1.mp3");
    var wookieeSound2 = document.createElement("audio");
    wookieeSound2.setAttribute("src", "star-wars-app/sounds/wookieesound2.mp3");
    var wookieeSound3 = document.createElement("audio");
    wookieeSound3.setAttribute("src", "star-wars-app/sounds/wookieesound3.mp3");
    var wookieeSound4 = document.createElement("audio");
    wookieeSound4.setAttribute("src", "star-wars-app/sounds/wookieesound4.mp3");
    var wookieeSound5 = document.createElement("audio");
    wookieeSound5.setAttribute("src", "star-wars-app/sounds/wookieesound5.mp3");
    var wookieeSound6 = document.createElement("audio");
    wookieeSound6.setAttribute("src", "star-wars-app/sounds/wookieesound6.mp3");

    // When the selection on the dropdown changes...
    $("select.planet-selection").change(function(){
        // Store the value of the selected planet into a variable
        selectedPlanet = $(this).children("option:selected").val();
    });

    function generatePopulationGraphic(pop) {

        $(".population-graphic").empty();

        if (selectedPlanet === "alderaan") {
            $("#1000000000-population").append("<img src=\"star-wars-app/images/populationdead.png\" style=\"height: 30px; width: 30px;\">");
            $("#1000000000-population").append("<img src=\"star-wars-app/images/populationdead.png\" style=\"height: 30px; width: 30x;\">");
        } else if (pop === "unknown") {
            $("#unknown-population").append("<img src=\"star-wars-app/images/populationunknown.png\" style=\"height: 50px; width: 50px;\">");
        } else {
            for (i = 100000000000; i >= 100; i /= 10) {
                if (pop / i >= 1) {
                    var numberOfIcons = pop / i;
                    for (j = 1; j <= numberOfIcons; j++) {
                        $("#" + i + "-population").append("<img src=\"star-wars-app/images/population" + i + ".png\" style=\"height: 25px; width: 25px;\">");
                       
                    }
                    pop = pop % i;
                }
            }
        }
    }

    // Returns string with first letter upper case, used for terrain and climate fields
    function upperCaseFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
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

            $("#planet-name").text("Name: " + response.results[0].name);
            $("#planet-terrain").text("Terrain: " + upperCaseFirst(response.results[0].terrain));
            $("#planet-climate").text("Climate: " + upperCaseFirst(response.results[0].climate));
            // toString().replace... method puts commas in the numbers
            $("#planet-population").text("Population: " + response.results[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            if (selectedPlanet === "alderaan") {
                $("#planet-population").append("...before the planet was blown up :(");
            }
            
            $("#planet-img").attr("src", "star-wars-app/images/" + selectedPlanet + ".png");

            generatePopulationGraphic(planetPopulation);

            var residentsArray = [];

            for (i = 0; i < response.results[0].residents.length; i++) {

                residentQueryURL = response.results[0].residents[i];

                $.ajax({
                    url: residentQueryURL,
                    method: "GET"
                }).then(function(response) {
                    residentsArray.push(response.name);
                    $("#planet-residents").html(residentsArray.join(", "));
                });
            }
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

            planetName = response.name.toLowerCase();
            $('#planet-selection').val(planetName);
            planetPopulation = response.population;

            $("#planet-name").text("Name: " + response.name);
            $("#planet-terrain").text("Terrain: " + upperCaseFirst(response.terrain));
            $("#planet-climate").text("Climate: " + response.climate);
            // toString().replace... method puts commas in the numbers
            $("#planet-population").text("Population: " + response.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            if (selectedPlanet === "alderaan") {
                $("#planet-population").append("...before the planet was blown up :(");
            }

            $("#planet-img").attr("src", "star-wars-app/images/" + response.name + ".png");

            generatePopulationGraphic(planetPopulation);

            var residentsArray = [];

            for (var i = 0; i < response.residents.length; i++) {

                residentQueryURL = response.residents[i];

                $.ajax({
                    url: residentQueryURL,
                    method: "GET"
                }).then(function(response) {
                    residentsArray.push(response.name);
                    $("#planet-residents").html(residentsArray.join(", "));
                    
                });
            }
        });

    }

    $(document).on("click", "#submit-btn", displayChosenPlanetInfo);
    $(document).on("click", "#random-btn", displayRandomPlanetInfo);

    $(document).on("click", "#wookiee-btn-1", function(){
        wookieeSound1.play();
    });

    $(document).on("click", "#wookiee-btn-2", function(){
        wookieeSound2.play();
    });

    $(document).on("click", "#wookiee-btn-3", function(){
        wookieeSound3.play();
    });

    $(document).on("click", "#wookiee-btn-4", function(){
        wookieeSound4.play();
    });

    $(document).on("click", "#wookiee-btn-5", function(){
        wookieeSound5.play();
    });

    $(document).on("click", "#wookiee-btn-6", function(){
        wookieeSound6.play();
    });

});
