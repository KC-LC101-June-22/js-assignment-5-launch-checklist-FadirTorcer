// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
   let checkList = document.getElementById("faultyItems");
   let gasTank = document.getElementById("fuelStatus");
   let manifest = document.getElementById("cargoStatus");
   let firstPilot = document.getElementById("pilotStatus");
   let secondPilot = document.getElementById("copilotStatus");
   let launchReadiness = document.getElementById("launchStatus");

   firstPilot.innerHTML = `Pilot ${pilot} is ready for launch`;
   secondPilot.innerHTML = `Co-pilot ${copilot} is ready for launch`;

   if (fuelLevel < 10000) {
    checkList.style.visibility = "visible";
    gasTank.innerHTML = "Fuel level too low for launch";
    launchReadiness.innerHTML = "Shuttle Not Ready for Launch";
    launchReadiness.style.color = "rgb(199, 37, 78)";
   } else if (cargoLevel > 10000) {
    checkList.style.visibility = "visible";
    manifest.innerHTML = "Cargo mass too heavy for launch";
    launchReadiness.innerHTML = "Shuttle Not Ready for Launch";
    launchReadiness.style.color = "rgb(199, 37, 78)";
   } else {
    checkList.style.visibility = "visible";
    launchReadiness.innerHTML = "Shuttle is Ready for Launch";
    launchReadiness.style.color = "rgb(65, 159, 106)";
   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
