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
    } else if (isNan(testInput)) {
        return "Not a Number";
    } else if (isInteger(testInput)) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   /*
   notReady = document.getElementById(faultyItems);
   gasTank = document.getElementById(fuelStatus);
   manifest = document.getElementById(cargoStatus);
   firstPilot = document.getElementById(pilotStatus);
   secondPilot = document.getElementById(coPilotStatus);
   launchReadiness = document.getElementById(launchStatus);

   firstPilot.innerHTML = `Pilot ${pilot} Ready`;
   secondPilot.innerHTML = `Co-pilot ${copilot} Ready`;

   if (fuelLevel <= 10000) {
    notReady.style.visibility = "visible";
    gasTank.innerHTML = "Fuel level IS NOT high enough for launch";
    launchReadiness.innerHTML = "Shuttle not ready for launch";
    launchReadiness.style.color = "red";
   } else if (cargoLevel >= 10000) {
    notReady.style.visibility = "visible";
    manifest.innerHTML = "Cargo level IS TOO HIGH for launch";
    launchReadiness.innerHTML = "Shuttle not ready for launch";
    launchReadiness.style.color = "red";
   } else {
    notReady.style.visibility = "visible";
    launchReadiness.innerHTML = "Shuttle is ready for launch";
   }
   */
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
