// ----- forEach -----
const cities = ["Киев", "Харьков", "Одесса", "Днепр", "Донецк"];

function show(element) {
  return element;
}

function getForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const position = i + 1;
    const city = callback(array[i]);

    // Проверка, что в качестве аргумента - строка
    typeof city === "string"
      ? console.log(
          `${city} - город № ${position} по численности населения в Украине`
        )
      : console.log(undefined);
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
    const newTemp = callback(array[i]);

    // Проверка, что в качестве аргумента - число
    typeof array[i] === "number"
      ? fahrenheit.push(newTemp)
      : fahrenheit.push(undefined);
  }
  console.log(fahrenheit);
}

getMap(celsius, convertTemp);
// ----- end map-----

// ----- filter -----
const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const newData = [];

function res(element) {
  return element % 2 === 0 && element % 3 === 0;
}

function getFiler(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) && typeof array[i] === "number") {
      newData.push(array[i]);
    }
  }
  console.log(newData);
}

getFiler(data, res);
// ----- end filter-----

// ----- some -----
const data = [3, -7, 16, 24, 1, 32, -85, 69, 100];
const newData = [];

function showNegativeNumbers(element) {
  return element <= 0;
}

function getSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) && typeof array[i] === "number") {
      newData.push(array[i]);
    }
  }

  newData.length !== 0 ? console.log(true) : console.log(false);
}

getSome(data, showNegativeNumbers);
// ----- end some-----

// ----- every -----
const data = [3, 28, 64, 814, "46", 5, 133];
const newData = [];

function showOnlyNumbers(element) {
  return typeof element === "number";
}

function getSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newData.push(array[i]);
    }
  }

  data.length === newData.length ? console.log(true) : console.log(false);
}

getSome(data, showOnlyNumbers);
// ----- end every-----
