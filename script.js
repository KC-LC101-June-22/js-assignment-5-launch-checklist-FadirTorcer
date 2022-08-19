// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        /*      <div class="formField">
                    <label>Fuel Level (L) <input type="text" name="fuelLevel"/></label> 
                </div>
                <div class="formField">
                    <label>Cargo Mass (kg) <input type="text" name="cargoMass */
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        pilotNameValue = pilotName.value;
        copilotNameValue = copilotName.value;
        fuelLevelValue = fuelLevel.value;
        cargoMassValue = cargoMass.value;

        if (usernameInput.value === "" || teamName.value === "") {
            alert("Make sure to enter valid invormaiton for each field!");
            // stop the form submission
            event.preventDefault();
        } 

    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
   });

   formSubmission(form, listedPlanets, pilotNameValue, copilotNameValue, fuelLevelValue, cargoMassValue);
   
});