// ----- forEach -----
const cities = ["Киев", "Харьков", "Одесса", 'Днепр', 'Донецк'];

// callback
function show(element, index) {
  let position = index + 1;
  console.log(`${element} - город № ${position} по численности населения в Украине`);
}

function getForEach(array, callback) {
  array.forEach(show);
}

getForEach(cities, show);
// ----- end forEach -----

// ----- map -----
const celsius = [-24.8, 0, 15, 36.7, 68, 100];
let fahrenheit;

// callback
function convertTemp(element) {
  Math.floor(element);
  return element * 1.8 + 32;
}

function getMap(array, callback) {
  fahrenheit = array.map(convertTemp);
  console.log(fahrenheit);

  // сравнение значений °С = °F на одной строке
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    let b = fahrenheit[i];
    console.log(`${a}°С = ${b}°F`);
  }
}

getMap(celsius, convertTemp);
// ----- end map-----

// ----- filter -----
const competitors = ["Женя", "Яна", "Семён", "Мария", "Виталий", "Вероника"];
let winners;

// callback
function showTopFree(element, index) {
  if (index < 3) {
    return element;
  }
}

function getFiler(array, callback) {
  winners = array.filter(showTopFree);
  console.log(winners);

  for (let i = 0; i < winners.length; i++) {
    let a = array[i];

    let place;

    switch (i) {
      case 0:
        place = "первое";
        break;
      case 1:
        place = "второе";
        break;
      case 2:
        place = "третье";
        break;
      default:
        place = undefined;
    }

    console.log(`${a} - занял ${place} место`);
  }
}

getFiler(competitors, showTopFree);
// ----- end filter-----

// ----- some -----
const data = [3, -7, 16, 24, 0, -32, 85, 69, -100];
let newData;

function showNegativeNumbers(element) {
  return element < 0;
}

function getSome(array, callback) {
  newData = array.some(showNegativeNumbers);
}

getSome(data, showNegativeNumbers);
console.log(newData);
// ----- end some-----

// ----- every -----
const data = [3, 28, 64, 814, '46', 5, 133];
let newData;

function showNumbers(element) {
  return typeof element === 'number';
}

function getEvery(array, callback) {
  newData = array.every(showNumbers);
  console.log(newData);
}

getEvery(data, function (element) {
  return typeof element === 'number';
});
// ----- end every-----