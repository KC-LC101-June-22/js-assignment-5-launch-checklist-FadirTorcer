// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let target = pickPlanet(listedPlanets);
        addDestinationInfo(document, target.name, target.diameter, target.star, target.distance, target.moons, target.image);
    });
     
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let list = document.getElementById("faultyItems");
        let inputPilot = document.querySelector("input[name=pilotName]");
        let inputCopilot = document.querySelector("input[name=copilotName]");
        let inputFuel = document.querySelector("input[name=fuelLevel]");
        let inputCargo = document.querySelector("input[name=cargoMass]");

        pilotName = inputPilot.value;
        copilotName = inputCopilot.value;
        fuelLevel = inputFuel.value;
        cargoMass = inputCargo.value;

        if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
            alert("Make sure to enter a value for each field!");
        } else if (validateInput(pilotName) !== "Not a Number" || validateInput(copilotName) !== "Not a Number") {
            alert("Pilot names must be strings!")
        } else if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoMass) !== "Is a Number") {
            alert("Fuel levels and cargo masses must be numbers!")
        }
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    });
   
});