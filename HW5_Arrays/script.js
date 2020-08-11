// ----- forEach -----
const cities = ["Киев", "Харьков", "Одесса", "Днепр", "Донецк"];

function show(element) {
  return element;
}

function getForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") console.log(callback(array[i]));
  }
}

getForEach(cities, show);
// ----- end forEach -----

// ----- map -----
const celsius = [-24.8, 0, 15, 36.7, 68, 100];
const fahrenheit = [];

function convertTemp(element) {
  Math.floor(element);
  return element * 1.8 + 32;
}

function getMap(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") fahrenheit.push(callback(array[i]));
  }
  return fahrenheit;
}

let res = getMap(celsius, convertTemp);
console.log(res);
// ----- end map-----

// ----- filter -----
const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const newData = [];

function calc(element) {
  if (element % 2 === 0 && element % 3 === 0) return element;
}

function getFiler(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) newData.push(callback(array[i]));
  }
  return newData;
}

getFiler(data, calc);
console.log(newData);
// ----- end filter-----

// ----- some -----
const data = [3, 7, 16, 24, 1, 32, -85, 69, 100];
let res = false;

function showNegativeNumbers(element) {
  if (element < 0) return element;
}

function getSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      res = true;
      break;
    }
  }
}

getSome(data, showNegativeNumbers);
console.log(res);
// ----- end some-----

// ----- every -----
const data = [3, 28, 64, 814, "46", 5, 133];
let res = true;

function showOnlyNumbers(element) {
  if (typeof element === "number") return element;
}

function getSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      res = false;
      break;
    }
  }
}

getSome(data, showOnlyNumbers);
console.log(res);
// ----- end every-----