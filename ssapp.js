initMars();

var queryURL = "https://api.nasa.gov/planetary/apod?api_key=4PvAo6XRKPmQI7X7QAYEYvAeYYRERXf8DV4eqGiH";

$.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {
   console.log(response);
   console.log(response.url);
   var imgURL= response.url;
   $('#wrapper').css('background-image', `url(${imgURL})`);
   $('#wrapper').css('background-repeat', 'no-repeat');
   $('#wrapper').css('background-size', 'cover');
   // below vh is viewport height, woohoo!
   $('#wrapper').css('height', '100vh');
   $('#wrapper').css('opacity', '0.7');
 });

// mercury(0), venus(1), earth(2), mars(3), jupiter(4), saturn(5), uranus(6), neptune(7), pluto(8)
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
var images = ["ssimages/mercury.jpg", "ssimages/venus.jpg", "ssimages/earth.jpg", "ssimages/mars.jpg", "ssimages/jupiter.png", "ssimages/saturn.jpg", "ssimages/uranus.jpg", "ssimages/neptune.jpg", "ssimages/pluto.png"];
var imgCaption = ["Mercury is not this colorful in real life. These colors represent all the different heavy metals and minerals on the surface of Mercury. It also highlights all of the craters on its rough surface.", "All of the gaseous clouds on Venus make it a very beautiful planet from our point of view on Earth even though its surface is not so pretty.", "Earth has four main layers: the Crust, Mantle, Outer Core, and Inner Core. We know this since we can study our home planet the most.", "Mars is known for many craters, deep valleys and canyons, and its red color. You can also find satellite images showing evidence of past water erosion.", "Jupiter has stripes because of all of different gasses in its atmosphere. The swirls are caused by all of the storms on this planet, and here you can see the famous Great Red Spot.", "Like Earth, Saturn is also tilted on its axis and has seasons. The seasons on Saturn, though, last 7 years long!", "Many people don't know that Uranus also has rings like Saturn. This image also shows how Uranus is tilted, and rotates, completely sideways.", "Even though Neptune looks bright blue in pictures, it's a very dark planet because it is so far away from the Sun and the light can't reach that far.", "Pluto is smaller than the Moon, in fact it's about half as wide as the United States. Pluto also has a heart-shaped ice glacier larger than Texas. The colors in this image represent the different chemicals on the surface of Pluto."];
// in Earth days
var orbits = ["88", "225", "365", "687", "4,333", "10,759", "30,684", "60,190", "90,465"];
// distance from Sun in million miles
var distance = ["36", "67", "93", "142", "483", "888", "1,784", "2,794", "3,647"];
// of Earth (volume btw)
// mercury(0), venus(1), earth(2), mars(3), jupiter(4), saturn(5), uranus(6), neptune(7), pluto(8)
var size = ["Mercury is 5% the size of Earth.", "Venus is 86% the size of Earth.", "100%, Earth is roughly 260 billion cubic miles.", "Mars is 15% the size of Earth.", "You can fit 1318 Earths inside of Jupiter.", "You can fit 744 Earths inside of Saturn.", "You can fit 67 Earths inside of Uranus.", "You can fit 57 Earths inside of Neptune.", "Pluto is 1% the size of Earth."];
var scienceFact = ["Even though Mercury is a very dense planet, it is still so small that it does not have enough gravity to hold onto an Atmosphere.", "Venus is the hottest planet in the solar system due to its dense atmosphere full of greenhouse gasses.", "Earth has seasons because it rotates on a tilted axis, not due to how close Earth is to the sun. In fact Earth's orbit is almost a circle, and has no impact on the seasons like many people believe.", "Mars has the biggest valleys and canyons than any other planet. Its biggest canyon, Valles Marineris, would stretch from New York City to Los Angeles on Earth (nothing compared to the Grand Canyon!).", "Jupiter spins much faster than Earth and it only takes 10 hours for it to rotate once (one day on Jupiter lasts 10 days). This also makes Jupiter stretch out so that it is wider than it is tall, so it's not a very round planet.", "Even though Saturn is one of the largest planets in the solar system in size, it is one of the lightest because it is mostly made up of gasses such as hydrogen, helium, and methane.", "Uranus is tilted sideways and thus it rotates sideways as well. Scientists think this is because Saturn was hit by something flying in space as large as Earth a long time ago.", "Neptune is a very gaseous and windy planet. Scientists have recorded frozen methane clouds moving as fast as 1,200 miles per hour on Neptune, and Earth's most powerful winds only reach 250 miles per hour.", "Scientists believe that Pluto is about two-thirds rock and one-third ice, which would mean that it contains more water than Earth."];
var funFact = ["Mercury is a very slowly shrinking planet and this causes wrinkles in the surface.", "Venus rotates in the opposite direction as Earth, and therefore the Sun rises in the east and sets in the West on Venus.", "Earth is the only planet in the solar system that has exactly one moon. The moon plays a very important role to life on Earth, starting with ocean tides.", "Mars is often called the Red Planet because the soil color comes from high levels of iron oxide minerals - the same things that give blood and rust their color as well.", "Jupiter is well known for its biggest storm, The Eye of Jupiter. This storm, also called The Great Red Spot, is so big it could completely cover Earth.", "Saturn is the furthest planet from Earth you can see in the night sky without a telescope, although you cannot see the rings without a telescope because they are actually very thin (about half a mile thick!).", "Uranus is mostly made of icy water and ammonia, but scientists believe that beneath the icy surface is a layer of liquid diamond. Diamonds also rain down onto the surface of Uranus.", "Neptune has an irregular shaped orbit around the Sun and is sometimes further away from the Sun than Pluto. Because of this scientists didn't discover Neptune until much later than the other planets.", "In 2006 Pluto was reclassified as a dwarf planet because the International Astronomical Union (IAU) was discovering many new objects in our solar system. They had to come up with definitions for planets and dwarf planets, and Pluto fit the definition for dwarf planet that they all agreed upon."];

// sun
var imageSun = "ssimages/sun.jpg";
var imageSunCap = "On this picture you can see a few solar flares which are bursts of high-energy that can cause disturbances with radios and power lines on Earth.";
// orbit around milky way
var orbitSun = "The Sun, in fact our entire Solar System, revolves around the center of the Milky Way Galaxy. It takes 230 million years for us to revolve one time around.";
// distance to closest star
var distanceSun = "The closest star to the Sun, Proxima Centauri, is 4.24 light years away, which is roughly 25 trillion miles away.";
// number of Earth's
var sizeSun = "1.3 million";
var scienceFactSun = "The Sun's core is about 27 million degrees Fahrenheit, and the surface is roughly 10,000 degrees Fahrenheit. This is extremely hot, but the Sun just a yellow dwarf star, and there are much hotter stars in the universe.";
var funFactSun = "The Sun goes through phases, sort of like seasons, roughly every 11 years. When these phases change the Sun's activity changes and can effect things on Earth powered by electricity.";

// mercury(0), venus(1), earth(2), mars(3), jupiter(4), saturn(5), uranus(6), neptune(7), pluto(8)

$("#sun").on("click", function(event) {
    event.preventDefault();
    console.log(imageSun);
    // result image section for the Sun:
    $("#result-image").html(`<img class="ssResImg" src="${imageSun}">
    <p id="imgSunCap">${imageSunCap}</p>
    `);
    // result info section for the Sun:
    $("#result-info").html(`
    <p id="sunDistance">Distance: ${distanceSun}</p>
    <p id="sunOrbit">Orbit: ${orbitSun}</p>
    <p id="sunSize">Size: You can fit ${sizeSun} Earth's into the Sun!</p>
    <p id="sunSciFact">Science Fact: ${scienceFactSun}</p>
    <p id="sunFunFact">Fun Fact: ${funFactSun}</p>
    `);
});

$(".planet").on("click", function(event) {
    event.preventDefault();
    var planetName = event.target.id;
    for (var j = 0; j < planets.length; j++) {
        if (planets[j] === planetName) {
            console.log(planets[j]);
            // result image section for planets:
            $("#result-image").html(`<img class="ssResImg" src="${images[j]}">
            <p id="imgCap">${imgCaption[j]}</p>
            `);
            // result info section for planets:
            $("#result-info").html(`
            <h5>Distance: </h5><p id="planDistance">${planets[j]} is ${distance[j]} million miles away from the Sun.</p>
            <h5>Orbit: </h5><p id="planOrbit">It takes ${planets[j]} ${orbits[j]} days to orbit around the Sun. This is how long a year is on ${planets[j]}.</p>
            <h5>Size: </h5><p id="planSize">${size[j]}</p>
            <h5>Science Fact: </h5><p id="planSciFact">${scienceFact[j]}</p>
            <h5>Fun Fact: </h5><p id="planFunFact">${funFact[j]}</p>
            `);
        }
    }
});


/* 
   Note: date is automatically formatted as YYYY-MM-DD using the form's input type 'date'
   The calendar dropdown is functional and errors will show as a pop-over. No hidden div needed.
   Note: date validation is being done in the html via min and max attributes
*/

// globals
var dt, yyyy, mm, dd, maxDate;

/* 
    get current day in YYYY-MM-DD for use as max value in form validation.  Else, 
    someone can put a date as far into future as they wish :(
*/

// get today's date
dt = new Date();

// get year portion of Date
yyyy = dt.getFullYear();

// get month portion of Date, returns 0 - 11, any month < 10 is a single digit, append 0
mm = (dt.getMonth() + 1);
if (mm < 10) {
    mm = `0${mm}`;
}
// get date portion of Date, any date < 10 is a single digit, append 0
dd = dt.getDate();
if (dd < 10) {
    dd = `0${dd}`;
}

maxDate = `${yyyy}-${mm}-${dd}`;
//console.log('maxdate is now', maxDate);

// set min and max date attributes in form for validation.  Used 12/31 as starting place.
var enteredDate = document.querySelector('#date');
enteredDate.setAttribute('min','2012-12-31');
enteredDate.setAttribute('max', maxDate);

// listen for date-form submit
// I just liked the 12th (index 11) image of the object, it usually provides a photo in color and is usually a more interesting photo than index 0
document.querySelector('#date-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("PLEASE CLICK");
    // Ajax call
    console.log('valid date format', enteredDate.value);
    console.log('make your ajax call')
    var nasaDate = enteredDate.value;
    console.log(nasaDate);
    console.log(typeof(nasaDate));
    // Ajax Call should go here...
    var queryURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + nasaDate + "&api_key=4PvAo6XRKPmQI7X7QAYEYvAeYYRERXf8DV4eqGiH";
    console.log(queryURL2); // correct and working

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(response.photos);
        console.log(response.photos[0].img_src);
        $("#marsImage").html(`
        <img id="resMarsImg" src="${response.photos[11].img_src}" alt="mars-rover-image">
        <h5>Date: </h5><p>${nasaDate}</p>
        `);
        
    });
    // clear date input after submission
    enteredDate.value = '';
});

function initMars() {
    var queryURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-3-14&api_key=4PvAo6XRKPmQI7X7QAYEYvAeYYRERXf8DV4eqGiH";

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(response.photos);
        $("#marsImage").html(`
        <img id="resMarsImg" src="${response.photos[11].img_src}" alt="mars-rover-image">
        <h5>Date: </h5><p>2015-3-14 (Pi Day!)</p>
        `);
    });
}
