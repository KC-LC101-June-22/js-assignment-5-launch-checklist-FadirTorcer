// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let planetInfo = document.getElementById("missionTarget");
    planetInfo.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
  
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Make sure to enter a value for each field!");
    } else if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") {
        alert("Pilot names must be strings!")
    } else if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Fuel levels and cargo masses must be numbers!")
    }
    
   let gasTank = document.getElementById("fuelStatus");
   let manifest = document.getElementById("cargoStatus");
   let firstPilot = document.getElementById("pilotStatus");
   let secondPilot = document.getElementById("copilotStatus");
   let launchReadiness = document.getElementById("launchStatus");

   firstPilot.innerHTML = `Pilot ${pilot} is ready for launch`;
   secondPilot.innerHTML = `Co-pilot ${copilot} is ready for launch`;

   if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    gasTank.innerHTML = "Fuel level too low for launch";
    launchReadiness.innerHTML = "Shuttle Not Ready for Launch";
    launchReadiness.style.color = "rgb(199, 37, 78)";
   } else if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    manifest.innerHTML = "Cargo mass too heavy for launch";
    launchReadiness.innerHTML = "Shuttle Not Ready for Launch";
    launchReadiness.style.color = "rgb(199, 37, 78)";
   } else {
    list.style.visibility = "visible";
    launchReadiness.innerHTML = "Shuttle is Ready for Launch";
    launchReadiness.style.color = "rgb(65, 159, 106)";
   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
