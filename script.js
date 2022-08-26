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
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        pilotNameValue = pilotName.value;
        copilotNameValue = copilotName.value;
        fuelLevelValue = fuelLevel.value;
        cargoMassValue = cargoMass.value;

        if (validateInput(pilotNameValue) === "Empty" || validateInput(copilotNameValue) === "Empty") {
            alert("Make sure to enter valid informaiton for each field!");
        } 
        formSubmission(document, list, pilotNameValue, copilotNameValue, fuelLevelValue, cargoMassValue);
    });
   
});