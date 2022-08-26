// Write your JavaScript code here!

window.addEventListener("load", function() {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
    // });
    
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

        if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty") {
            alert("Make sure to enter valid informaiton for each field!");
        } 
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    });
   
});