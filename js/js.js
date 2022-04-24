const myDog = {
  // Only change code below this line
  name: "Dog",
  legs: 4,
  tails: 2,
  friends: ["Cat", "Dog"],

  // Only change code above this line
};
////////////////////////////////
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"]; // Change this line
////////////////////////////

// Setup
const myDoog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line
delete myDoog.tails;
//////////////////////////////////////

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
//////////////////////////////////

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }

  // Only change code above this line
}
//////////////////////////////////////////
