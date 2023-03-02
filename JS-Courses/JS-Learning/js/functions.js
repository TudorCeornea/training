/*****

CODE OUTPUT

\'  Single quote
\"  Double quote
\\  Backslash
\n  Newline
\r  Carriage return
\t  Tab
\b  Backspace
\f  Form feed

*****/

var remainder;

remainder = 20 % 6;

console.log(remainder); // used to see if a number is even or odd

////-----
var a = 6;
var b = 8;
var c = 5;
var d = 20;

a += 4;
b -= 6;
c *= 5;
d /= 4;

console.log(a, b, c, d);

////-----
var myString = 'I am a "double quoted" string';
console.log(myString);

////-----
var myString = 'I am a "double quoted" string';
console.log(myString);

////-----
var ourStr = "I come first, ";
ourStr += "and I come second";
console.log(ourStr);

////-----
var firstNameLength;
var firstName = "Tudor";
firstNameLength = firstName.length;
console.log(firstNameLength);

////-----
var firstLetterOfFirstName = "";
var firstName = "Serban";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

////-----
var firstName = "Tudor";
var anteLetter = firstName[firstName.length - 1];
console.log(anteLetter);

////-----
//function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//
//    var result = '';
//
//    result = 'The ' + myAdjective + myNoun + myVerb + 'very' + myAdverb;
//
//    return result;
//
//}
//
//console.log(wordBlanks('dog ', 'big ', 'ran ', ' quickly'));
//
//

// ----- ARRAYS ----- //

////-----
var myData = [19, 20, 21];
myData[1] = 10;
console.log(myData);

////-----
var myArray = ["Tudor", 34];
var resultArray = myArray[0] + " are " + myArray[1] + " ani";
console.log(resultArray);

////-----
var multipleArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [[7, 8, 9], 10, 11],
];
var multipleData = multipleArrays[2][0][2];
console.log(multipleData);

////----- PUSH adauga la sfarsitul array-ului
var ourArray = ["Hai", "motanul", "meu"];
ourArray.push(["este", "fericit"]);
console.log(ourArray);

////----- POP elimina de la sfarsitul array-ului
var ourArray2 = ["Senu", "the", "cat"];
var removeFromOurArray2 = ourArray2.pop();
console.log(removeFromOurArray2);

////----- SHIFT elimina de la inceputul array-ului
var ourArray3 = ["Hai", "the", "cat"];
var removeFromOurArray3 = ourArray3.shift();
console.log(removeFromOurArray3);

////----- UNSHIFT adauga la inceputul array-ului
var ourArray4 = ["Simpson", "the", "cat"];
ourArray4.shift();
ourArray4.unshift("Hai");
console.log(ourArray4);

// ----- FUNCTIONS ----- //

////-----
function functionOne() {
  console.log("Hello World");
}
functionOne();

////-----
function functionTwo(a, b) {
  console.log(a - b);
}
functionTwo(10, 5);

////-----
function functionThree() {
  var myVarThree = 8;
  console.log(myVarThree);
}
functionThree();

////-----
var outerWear = "Sweater";

function myOutfit() {
  var outerWear = "Jeans";
  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

////-----
function functionFive(number) {
  return number - 7;
}

console.log(functionFive(12));

////-----
var multiply = 3;

function functionSix() {
  multiply *= 3;
  return multiply;
}
console.log(functionSix());

////-----
var changed = 4;

function functionsSeven(number) {
  return (number * 3) / 6;
}

changed = functionsSeven(7);
console.log(changed);

////-----
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// ----- BOOLEAN ----- //

function welcomeToBoolean() {
  return false / true;
}

// ----- IF Statements ----- //

function trueOrFalse(wasItTrue) {
  if (wasItTrue) {
    return "Yes, that was true";
  }
  return "No, it was not true";
}

console.log(trueOrFalse(true));

////-----
function testEqual(val) {
  if (val == 10) {
    return "Yes, it's equal";
  }
  return "No, it's not equal";
}

console.log(testEqual(10));

////-----
function testStrict(val) {
  if (val === 8) {
    return "It's very equal";
  }
  return "No way it's equal";
}

console.log(testStrict("8"));

////-----
function compareEquality(a, b) {
  if (a == b) {
    return "They're both equal";
  }
  return "They're not equal";
}

console.log(compareEquality(6, "6"));

////-----
function testNotEqual(val) {
  if (val != 7) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(8));

////-----
function testStrictNotEqual(val) {
  if (val !== 8) {
    return "Not equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual("8"));

////-----
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));

////-----
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(20));

////-----
function testLogicalAnd(val) {
  if (val <= 30 && val >= 20) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(25));

////-----
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

console.log(testLogicalOr(15));

// ----- ELSE Statements ----- //

function testElse(val) {
  var result = "";

  if (val < 10) {
    result = "Less than 10";
  } else {
    result = "Equals or greater than 10";
  }

  return result;
}

console.log(testElse(11));

////-----
function testElseIf(val) {
  if (val < 5) {
    return "Smaller than 5";
  } else if (val > 10) {
    return "Bigger than 10";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(8));

////-----
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(20));

////-----
var names = [
  "Hole-in-one",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 4));

// ----- SWITCH ----- //

////-----
function caseInSwitch(val) {
  var answer;
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "No match";
  }
  return answer;
}

console.log(caseInSwitch(5));

////-----
function sequentialSizes(val) {
  var answer;
  switch (val) {
    case 1:
    case 2:
      answer = "First Two";
      break;
    case 3:
    case 4:
      answer = "Second Two";
      break;
    case 5:
    case 6:
      answer = "Last Two";
      break;
  }
  return answer;
}

console.log(sequentialSizes(5));

////-----
function testSize(num) {
  var answer;
  switch (num) {
    case 5:
      answer = "Tiny";
      break;
    case 10:
      answer = "Small";
      break;
    case 15:
      answer = "Medium";
      break;
    case 20:
      answer = "Large";
      break;
    default:
      answer = "Not defined";
  }
  return answer;
}

console.log(testSize(8));

////-----
function isLess(a, b) {
  return a < b;
}

console.log(isLess(100, 15));

////-----
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

console.log(cc(6));

// ----- OBJECTS ----- //

var myCat = {
  name: "Hai",
  color: "Red",
  legs: 4,
  tails: 1,
  friends: ["just me"],
  "how many ears": 2,
};

console.log(myCat.color);
console.log(myCat["how many ears"]);

////-----
var testObj = {
  12: "Montana",
  16: "Namath",
  18: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

////-----
var myDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["Tudor", "Serban"],
};

myDog.friends[0] = "Calin";
console.log(myDog.friends);

////-----
var myPets = {
  name: ["Senu", "Hai", "Betty"],
  number: 3,
  ears: 6,
  owners: 2,
};

myPets.name.push("Tony");
myPets["what are they"] = "animals";
delete myPets.ears;
console.log(myPets);

////-----
function phoneticLookup(val) {
  var result;

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("delta"));

////-----
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not found";
  }
}

console.log(checkObj("bed"));

////-----
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seats": "crums",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

////-----
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var myTree = myPlants[1].list[2];
console.log(myTree);

////-----
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

updateRecords(1245, "album", "Test");
console.log(updateRecords(5439, "artist", "ABBA"));

// ----- LOOPS ----- //

var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);

////-----
var ourArray = [];
for (var i = 0; i < 6; i++) {
  ourArray.push(i);
}

console.log(ourArray);

////-----
var ourArray = [];
for (var i = 1; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray);

////-----
var ourArray = [];
for (var i = 9; i > 0; i -= 2) {
  ourArray.push(i);
}

console.log(ourArray);

////-----
var myArr = [2, 3, 4, 5, 6];
var ourTotal = 0;

for (var i = 0; i < myArr.length; i++) {
  ourTotal += myArr[i];
}

console.log(ourTotal);

////-----
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(product);

////-----
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);

////-----
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    Likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    Likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    astName: "Vos",
    number: "unknown",
    Likes: ["'JavaScript", "Gaming", "Foxes"],
  },
];

function lookup(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

console.log(lookup("Akira", "likes"));

// ----- Math functions ----- //

function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

////-----
function randomeWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomeWholeNum());

////-----
function ourRange(ourMax, ourMin) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);
}

console.log(ourRange(9, 5));

// ----- ParseInit ----- //

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("10"));

////-----
function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10110"));

// ----- Ternary Operator ----- //

////-----
function checkEquality(a, b) {
  return a === b;
}
console.log(checkEquality(1, 2));

////-----
function checkSign(n) {
  return n > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10));

////-----
function checkScope() {
  "use strict";

  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
}
checkScope();

////-----
const s = [5, 6, 7];
function editInPlace() {
  "use strict";

  s[0] = 2;
}
editInPlace();
console.log(s);

// ----- Arrow Function ----- //

// var magic = function () {
//   return new Date();
// };

// This anonymnous function can be transformed into an arrow function like this
const magic = () => new Date();

////-----

// var myConcat = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };
// console.log(myConcat([1, 2], [3, 4, 5]));

// This anonymnous function can be transformed into an arrow function like this
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

////-----
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));

////-----
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2);
console.log(arr1);

////----- Assigning things form an Object to a variable

var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// var a = voxel.x;
// var b = voxel.y;
// var c = voxel.z;

const { x: m, y: n, z: v } = voxel;

const AVG_TEMP = { today: 9, tomorrow: 12 };

function getTempOfTmr(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = AVG_TEMP;

  return tempOfTomorrow;
}
console.log(getTempOfTmr(AVG_TEMP));

////-----
const LOCAL_FORECAST = {
  today: { min: 1, max: 9 },
  tomorrow: { min: 3, max: 14 },
};

function getMaxOfTomorrow(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTomorrow(LOCAL_FORECAST));

////-----
const [x, z, , y] = [1, 2, 3, 4, 5, 6];
console.log(x, z, y);

// ----- Template Literal ----- //

const person = { name: "Tudor Ceornea", age: 34 };

const message = `Hello, my name is ${person.name}! and I am ${person.age} years old`;
console.log(message);

////-----
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

////-----
const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("Tudor", 34, "masculine"));

////-----
const bicycle = {
  gear: 2,
  // setGear: function (newGear) {
  //   "use strict";
  //   this.gear = newGear;
  // }, We can do a shorter version.
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);

// ----- Class Syntax ----- //

// This is the old way to create an object
// var SpaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };

class SpaceShuttle {
  constructor(targetPlanet, nameShuttle) {
    this.targetPlanet = targetPlanet;
    this.nameShuttle = nameShuttle;
  }
}

let zeus1 = new SpaceShuttle("Jupiter", "Soyuz");
let zeus2 = new SpaceShuttle("Moon", "Apollo");
console.log(zeus1);
console.log(zeus2);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// ----- Get and Set - Getter and Setters ----- //

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

////-----

// import { capitalizeString } from "./string_function";
// const cap = capitalzieString("Hello world!");
// console.log(cap);

function print() {
  var square1 = number * number;
  console.log(square1);

  var number = 50;

  var square2 = number * number;
  console.log(square2);
}

print();
