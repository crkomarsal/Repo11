// Create a temps array here

myPetsArray = ["Dog", "Cat"];

// End of temps array

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];

  // Only change code below this line

  // Only change code above this line

  myNewPets.push("Bird", "Fish");

  firstPet = myNewPets.shift();
  lastPet = myNewPets.pop();

  myNewPets.unshift("Lion");

  

  
  return myNewPets;
}

console.log(myArrayFunction(myPetsArray)); // Change this line

module.exports = myArrayFunction;