var next = "\n====> NEXT <====\n";

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(c);

console.log(next);

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

console.log(studlyCapVar, properCamelCase, 9000);

console.log(next);

let catName = "Oliver";
let catSound = "Meow!";

console.log(catName + " says " + catSound);

console.log(next);

const FCC = "Stuff";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

console.log(next);

const remainder = 11 % 3;

console.log(remainder);

console.log(next);

let d = 3;
let e = 17;
let f = 12;

d = d += 12;
e = e += 9;
f = f += 7;

console.log(d, e, f);

console.log(next);

let g = 11;
let h = 9;
let i = 3;

g = g -= 6;
h = h -= 15;
i = i -= 1;

console.log(g, h, i);

console.log(next);

let j = 5;
let k = 12;
let l = 4.6;

j = j *= 5;
k = k *= 3;
l = l *= 10;

console.log(j, k, l);

console.log(next);

let m = 48;
let n = 108;
let o = 33;

m = m /= 12;
n = n /= 4;
o = o /= 11;

console.log(m, n, o);

console.log(next);

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr);

console.log(next);

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myStr2);

console.log(next);

const myStr3 = 'FirstLine\n\t\\SecondLine\nThirdLine';

console.log(myStr3);

console.log(next);

const myStr4 = "This is the end." + " The end of our story.";

console.log(myStr4);

console.log(next);

let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";

console.log(myStr5);

console.log(next);

const myName = "Jack Sawyer";
const myStr6 = "My name is " + myName + " and I am well!";

console.log(myStr6);

console.log(next);

const someAdjective = "badass!";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

console.log(myStr7);

console.log(next);

let lastNameLength = 0;
const lastName = "Jack Sawyer";

lastNameLength = lastName.length;
firstLetterOfLastName = lastName[3];
const thirdLetterOfLastName = lastName[2];
const lastLetterOfLastName = lastName[lastName.length - 1];
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(lastNameLength,
  firstLetterOfLastName,
  thirdLetterOfLastName,
  lastLetterOfLastName,
  secondToLastLetterOfLastName);

console.log(next);

let myStr8 = "Jello World";
myStr8 = "Hello World";

console.log(myStr8);

console.log(next);

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " is not very " + myAdjective + " but " + myVerb + " quite " + myAdverb + " in the park.";

console.log(wordBlanks);

console.log(next);

const myArray = ["Smoked ham", 1, "gouda cheese", 2, "mustard", 3, "pickles", 4, "mayo", 5, "bread", 6, "lettuce", 7, "tomato", 8];

console.log(myArray);

console.log(next);

const myArray2 = [["Rockets", 34], ["Cougars", 34]];

console.log(myArray2);

console.log(next);

const myArray3 = [50, 60, 70];
const myData = myArray3[0];

console.log(myData);

console.log(next);

const myArray4 = [18, 64, 99];
console.log(myArray4);
myArray4[0] = 45;
console.log(myArray4);
myArray4[1] = 27;
console.log(myArray4);
myArray4[2] = 72;
console.log(myArray4);

console.log(next);

const myArray5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14],];
const myData2 = myArray5[2][1];

console.log(myData2);

console.log(next);

const myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog", 3]);
console.log(myArray6);

console.log(next);

const myArray7 = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray7.pop();
console.log(removedFromMyArray);

console.log(next);


const myArray8 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray8.shift();
console.log(removedFromMyArray2);

console.log(next);

const myArray9 = [["John", 23], ["dog", 3]];
console.log(myArray9);
myArray9.shift();
console.log(myArray9);
myArray9.unshift(["Paul", 35]);
console.log(myArray9);

console.log(next);

const myList = [["Chocolate Bar", 15], ["Onions", 8], ["Tbone steaks", 2], ["Lemon", 5], ["Whiskey", 1]];
console.log(myList);

console.log(next);

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction()
reusableFunction()
reusableFunction()

console.log(next);

function functionWithArgs(par1, par2) {
  console.log(par1 + par2);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

console.log(next);

function timesFive(num) {
  return num * 5;
}
const answer = timesFive(5);
console.log(answer);

console.log(next);

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

console.log(next);

function myLocalScope() {
  // Only change code below this line
  const myVar = "This one is";
  console.log(myVar, 'inside myLocalScope.');
}
myLocalScope();
const myVar = "This one is";
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar, 'outside myLocalScope.');

console.log(next);

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit();

console.log(outerWear);

console.log(next);

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();

console.log(sum * 7);

console.log(next);

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed);

console.log(next);

function nextInLine(arr, item) {
  arr.push(item);
  const removed = arr.shift();
  return removed;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log(next);

function welcomeToBooleans() {
  return true;
}

console.log(true);

console.log(next);

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse());

console.log(next);

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

console.log(testEqual());

console.log(next);

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(7);

console.log(testStrict());

console.log(next);

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

console.log(compareEquality());

console.log(next);

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

console.log(next);

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

console.log(next);

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

console.log(next);

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

console.log(next);

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

console.log(next);

function testLessOrEqual(val) {
  if (val <= 12) {
    console.log("Smaller Than or Equal to 12");
  } else if (val <= 24) {
    console.log("Smaller Than or Equal to 24");
  } else {
    console.log("More Than 24");
  }
}

testLessOrEqual(10);

console.log(next);

function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

testLogicalAnd(10);

console.log(next);

function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    console.log("Outside");
  } else {
    console.log("Inside");
  }
}

testLogicalOr(15);

console.log(next);

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  console.log(result);
}

testElse(4);

console.log(next);

function testElseIf(val) {
  if (val > 10) {
    console.log("Greater than 10");
  } else if (val < 5) {
    console.log("Smaller than 5");
  } else {
    console.log("Between 5 and 10");
  }
}
testElseIf(7);

console.log(next);

function orderMyLogic(val) {
  if (val < 5) {
    console.log("Less than 5");
  } else if (val < 10) {
    console.log("Less than 10");
  } else {
    console.log("Greater than or equal to 10");
  }
}

orderMyLogic(7);

console.log(next);

function testSize(num) {
  if (num < 5) {
    console.log("Tiny");
  } else if (num < 10) {
    console.log("Small");
  } else if (num < 15) {
    console.log("Medium");
  } else if (num < 20) {
    console.log("Large");
  } else if (num >= 20) {
    console.log("Huge");
  } else {
    console.log("Change Me");
  }
}

testSize(7);

console.log(next);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    console.log(names[0]);
  } else if (strokes <= par - 2) {
    console.log(names[1]);
  } else if (strokes === par - 1) {
    console.log(names[2]);
  } else if (strokes === par) {
    console.log(names[3]);
  } else if (strokes === par + 1) {
    console.log(names[4]);
  } else if (strokes === par + 2) {
    console.log(names[5]);
  } else if (strokes === par + 3) {
    console.log(names[6]);
  } else {
    console.log(names[6]);
  }
}
golfScore(5, 4);

console.log(next);

function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
  }

  console.log(answer);
}

caseInSwitch(3);

console.log(next);

function switchOfStuff(val) {
  let answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  console.log(answer);
}

switchOfStuff("c");

console.log(next);

function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  console.log(answer);
}

sequentialSizes(2);

console.log(next);

function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed it by that much!";
      break;
    case 7:
      answer = "Ate Nine";
  }

  console.log(answer);
}

chainToSwitch(99);

console.log(next);

function isLess(a, b) {
  return a < b;
}

isLess(10, 15);

console.log(isLess);

console.log(next);

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

console.log(abTest);

console.log(next);

let count = 0;

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

  if (count > 0) {
    console.log(count + " Bet");
  } else {
    console.log(count + " Hold");
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log(next);

const myDog = {
  "name": "Bumpers",
  "legs": 4,
  "tails": 1,
  "friends": ["Emmitt", "Mags"]
};

console.log(myDog);

console.log(next);

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
const shoesValue = testObj.shoes;

console.log(hatValue, shirtValue, shoesValue);

console.log(next);

// Setup
const newObj = {
  "an entree": "lobster",
  "my side": "asparigus",
  "the drink": "martini"
};

const entreeValue = newObj["an entree"];
const sideValue = newObj["my side"];
const drinkValue = newObj["the drink"];

console.log(entreeValue, sideValue, drinkValue);

console.log(next);

const anotherObj = {
  12: "Joe Namath",
  16: "Joe Montana",
  19: "Johnny Unitas"
};

const playerNumber = 16;
const player = anotherObj[playerNumber];
console.log(player);

console.log(next);

// Setup
const myDog2 = {
  "name": "Campers",
  "legs": 4,
  "tails": 1,
  "friends": ["Happy Campers"]
};

// Only change code below this line
myDog2.friends = "Happy Coder"

console.log(myDog2);

console.log(next);

const myDog3 = {
  "name": "Campers",
  "legs": 4,
  "tails": 1,
  "friends": ["Happy Campers"]
};

myDog3.bark = "woof";

console.log(myDog3);

console.log(next);

const myDog4 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog4.tails;

console.log(myDog4);

console.log(next);

function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  console.log(result);
}

phoneticLookup("charlie");

console.log(next);

function checkObj(obj, checkProp) {

  if (obj.hasOwnProperty(checkProp)) {
    console.log(obj[checkProp]);
  } else {
    console.log("Not Found");
  }
}

console.log(next);

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Foo Fighters",
    "title": "The Colour and the Shape",
    "release_year": 1998,
    "formats": [
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  }
];

console.log(next);

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

console.log(next);

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  }, {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

console.log(next);

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
    records[id]["tracks"] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id]["tracks"].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Dancing Queen");
updateRecords(recordCollection, 5439, "tracks", "Knowing Me, Knowing You");
updateRecords(recordCollection, 5439, "tracks", "Take A Chance On Me");
updateRecords(recordCollection, 5439, "tracks", "Mamma Mia");
updateRecords(recordCollection, 5439, "tracks", "Lay All Your Love On Me");
updateRecords(recordCollection, 5439, "tracks", "Super Trouper");
updateRecords(recordCollection, 5439, "tracks", "I Have a Dream");
updateRecords(recordCollection, 5439, "tracks", "The Winner Takes It All");
updateRecords(recordCollection, 5439, "tracks", "Money, Money, Money");
updateRecords(recordCollection, 5439, "tracks", "S.O.S.");

updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
updateRecords(recordCollection, 1245, "tracks", "Riptide");
updateRecords(recordCollection, 1245, "tracks", "Hyperactive");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 1245, "tracks", "Trick Bag");
updateRecords(recordCollection, 1245, "tracks", "Get It Through Your Heart");
updateRecords(recordCollection, 1245, "tracks", "I Didn't Mean To Turn You On");
updateRecords(recordCollection, 1245, "tracks", "Flesh Wound");
updateRecords(recordCollection, 1245, "tracks", "Discipline of Love");
updateRecords(recordCollection, 1245, "tracks", "Riptide (Reprise)");

updateRecords(recordCollection, 2548, "tracks", "Let It Rock");
updateRecords(recordCollection, 2548, "tracks", "You Give Love a Bad Name");
updateRecords(recordCollection, 2548, "tracks", "Livin' on a Prayer");
updateRecords(recordCollection, 2548, "tracks", "Social Disease");
updateRecords(recordCollection, 2548, "tracks", "Wanted Dead or Alive");
updateRecords(recordCollection, 2548, "tracks", "Raise Your Hands");
updateRecords(recordCollection, 2548, "tracks", "Without Love");
updateRecords(recordCollection, 2548, "tracks", "I'd Die for You");
updateRecords(recordCollection, 2548, "tracks", "Never Say Goodbye");

updateRecords(recordCollection, 2468, "tracks", "1999");
updateRecords(recordCollection, 2468, "tracks", "Little Red Corvette");
updateRecords(recordCollection, 2468, "tracks", "Delirious");
updateRecords(recordCollection, 2468, "tracks", "Let's Pretend We're Married");
updateRecords(recordCollection, 2468, "tracks", "D. M. S. R.");
updateRecords(recordCollection, 2468, "tracks", "Automatic");
updateRecords(recordCollection, 2468, "tracks", "Something In The Water (Does Not Compute)");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2468, "tracks", "Lady Cab Driver");
updateRecords(recordCollection, 2468, "tracks", "All the Critics Love U in New York");
updateRecords(recordCollection, 2468, "tracks", "International Lover");

console.log(recordCollection);

console.log(next);

const thisArray = [];

let x = 5;
while (x >= 0) {
  thisArray.push(x);
  x--;
}

console.log(thisArray);
console.log(x);

console.log(next);


const thisArray2 = [];


for (let i = 1; i <= 5; i++) {
  thisArray2.push(i);
}

console.log(thisArray2);
console.log(i);

console.log(next);

// Setup
const thisArray3 = [];
for (let ii = 1; ii <= 9; ii += 2) {
  thisArray3.push(ii);
}

console.log(thisArray3);

console.log(next);

// Setup
const thisArray4 = [];
for (let iii = 9; iii >= 1; iii -= 2) {
  thisArray4.push(iii);
}

console.log(thisArray4);

console.log(next);

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const thisArray5 = [2, 3, 4, 5, 6];

let total = 0;
for (let i = thisArray5.length - 1; i >= 0; i--) {
  total += thisArray5[i];
}

console.log(thisArray5);

console.log(next);

function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  console.log(product);
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(next);

const thisArray6 = [];
let iv = 1;

do {
  thisArray6.push(i);
  iv++;
}
while (iv < 5) {
}

console.log(thisArray6);

console.log(next);

function sum1(arr, n) {

  if (n <= 0) {
    return 0;
  } else {
    return sum1(arr, n - 1) + arr[n - 1];
  }
}

console.log(arr);

console.log(next);

// Setup
const contacts = [
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
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        console.log(contacts[x][prop]);
      } else {
        console.log("No such property");
      }
    }
  }
  console.log("No such contact");

}

lookUpProfile("Akira", "likes");

console.log(next);

function randomFraction() {
  return (Math.random());
}
console.log(randomFraction);

console.log(next);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum);

console.log(next);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange);

console.log(next);

function convertToInteger(str) {
  return parseInt(str)
}
convertToInteger("56");

console.log(next);

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

console.log(next);

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

console.log(next);

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10);

console.log(next);

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

console.log(next);

function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum ? [] : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
};

console.log(next);

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

palindrome("eye",);

console.log(next);

const convertArabicToRoman = function (num) {
  const rules = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "XXX": 30,
    "XX": 20,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }

  let res = "";
  const romans = Object.keys(rules);

  for (let i = 0; i < romans.length; ++i) {
    const val = rules[romans[i]];

    while (num >= val) {
      num -= val;
      res += romans[i];
    }
  }
  return res;
};

console.log(next);

const convertToRoman = function (num) {
  const rules = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "XXX": 30,
    "XX": 20,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }

  let res = "";
  const romans = Object.keys(rules);

  for (let i = 0; i < romans.length; ++i) {
    const val = rules[romans[i]];

    while (num >= val) {
      num -= val;
      res += romans[i];
    }
  }
  console.log(res);
}

console.log(next);

function rot13(str) {

  var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];

  var alphabets13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', " ", "-", "_", ".", "&", "?", "!", "@", "#", "/"];

  var resultStr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (str[i] === alphabets[j]) {
        resultStr.push(alphabets13[j]);
      }
    }
  }
  return resultStr.join("");
};

console.log(next);

function telephoneCheck(str) {

  return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}

telephoneCheck("555-555-5555");

console.log(next);

function checkCashRegister(price, cash, cid) {
  const cidCopy = JSON.parse(JSON.stringify(cid)); // JSON limitation might be slow, but for some reason even the faster solutions, like .slice(0) and the other ones, might not work without affecting the original array
  const revCid = cidCopy.reverse();

  const currencyVal = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }

  // sum up what we have in cash-in-drawer
  const cidSum = cid.reduce((acc, val) => {
    if (!isNaN(acc + val[1])) {
      return acc + val[1];
    }
  }, 0);

  // convert units in order to work aroung floating point number limitations
  function convertDollarToCent(val) {
    if (!Array.isArray(val) && typeof val === "object") {
      const currencyValCopy = { ...val };

      for (let dollar in currencyValCopy) {
        currencyValCopy[dollar] *= 100;
      }
      return currencyValCopy;
    }
    if (Array.isArray(val)) {
      const currencyValCopy = [...val];

      currencyValCopy.forEach(dollar => {
        return dollar[1] *= 100;
      });
      return currencyValCopy;
    }
    else {
      return val * 100;
    }
  }
  const centPrice = convertDollarToCent(price);
  const centCash = convertDollarToCent(cash);
  const centUnit = convertDollarToCent(currencyVal);
  const centRevCid = convertDollarToCent(revCid);
  const centCidSum = convertDollarToCent(cidSum);
  let change = centCash - centPrice;

  let changeObj = {}

  function calculateChange() {
    for (let unit in centUnit) { // loop through each Currency Unit
      centRevCid.forEach(amount => {  // loop through each amount
        if (amount[1] >= centUnit[unit] && amount[0] === unit) { // check what I have in cash-in-drawer
          while (change - centUnit[unit] >= 0 && amount[1]) {
            // calculate the change and convert it into an object
            if (Object.keys(changeObj).length === 0 && changeObj.constructor === Object) {
              changeObj[unit] = centUnit[unit];
            } else {
              if (changeObj.hasOwnProperty(unit)) {
                changeObj[unit] += centUnit[unit];
              }
              if (!changeObj.hasOwnProperty(unit)) {
                changeObj[unit] = centUnit[unit];
              }
            }

            change -= centUnit[unit];
            amount[1] -= centUnit[unit];
          }
        }
      });
    }

    let changeArr = Object.entries(changeObj); // convert changeObj into an Array
    // convert the change-unit back from Cent into Dollar
    changeArr.forEach(cent => {
      return cent[1] /= 100;
    });

    return changeArr;
  }

  let sumChangeArr = calculateChange()
    .reduce((acc, val) => {
      if (!isNaN(acc + val[1])) {
        return acc + val[1] * 100;
      }
    }, 0);

  if (change < 0 || centCidSum - change < 0 || change > sumChangeArr) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (centCidSum === sumChangeArr) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change: calculateChange() };
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));