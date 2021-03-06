// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch(); // lines 9 through 15, and 20 commented out until myFetch portion of assignment Z

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);

      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets);
      //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    }); //also part of commented out code before reaching myFetch()

  // get the form
  // add a listener to when the form submit
  //  form.addEventListener('submit', function(event) {z
  // if it's not, preventDefault
  // get the value for each of the input field
  // let pilotInput = this.document.querySelector("input[name=pilotName]"); // object
  // const pilotValue = pilotInput.value // extracting data from object; key is value

  let list = document.getElementById("faultyItems");
  // formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pilotValue = document.querySelector("input[name=pilotName]"); // returns a DOM node (object)
    let copilotValue = document.querySelector("input[name=copilotName]");
    let fuelLevelValue = document.querySelector("input[name=fuelLevel]");
    let cargoLevelValue = document.querySelector("input[name=cargoMass]");
    formSubmission(
      document,
      list,
      pilotValue.value,
      copilotValue.value,
      fuelLevelValue.value,
      cargoLevelValue.value
    );
  });
});
