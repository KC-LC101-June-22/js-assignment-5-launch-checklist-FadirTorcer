// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        /* pilotName" id="pilotName"/></label>
                </div>
                <div class="formField">
                    <label>Co-pilot Name <input type="text" name="copilotName"/></label>
                </div>
                <div class="formField">
                    <label>Fuel Level (L) <input type="text" name="fuelLevel"/></label> 
                </div>
                <div class="formField">
                    <label>Cargo Mass (kg) <input type="text" name="cargoMass */
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      
      if (usernameInput.value === "" || teamName.value === "") {
        alert("All fields are required!");
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
       
   })
   
});