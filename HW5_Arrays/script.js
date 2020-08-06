// forEach
const cities = ['Киев', 'Харьков', 'Одесса'];

function show(element) {
  console.log(`- ${element}`);
}

console.log('Список городов-миллионников Украины:');
cities.forEach(show);
// end


// map
const celsius = [-24.8, 0, 15, 36.7, 68, 100];

function convertTemp(element) {
  Math.floor(element);
  return element * 1.8 + 32;
}

const fahrenheit = celsius.map(convertTemp);

console.log('В градусах Цельсия:');
console.log(celsius);
console.log('По Фаренгейту:');
console.log(fahrenheit);
// end


// filter
const competitors = ["Женя", "Яна", "Семён", "Мария", "Виталий", 'Вероника'];

const winners = competitors.filter(function (element, index) {
  return index < 3;
});

console.log('Участники соревнований:');
console.log(competitors);
console.log('Тройка победителей:');
console.log(winners);
// end


// some
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Проверяем, есть ли в данном массиве числа, которые делятся без остатка на 2 и 3
const newData = data.some(function (element) {
  return element % 2 === 0 && element % 3 === 0;
});

console.log(newData);
// end


// every
const data = [3, 28, 64, 814, '46', 5, 133];

//Провеяем, все ли элементы массива являются числами
const numbers = data.every(function (element) {
  return typeof element === 'number';
});

console.log(data);
console.log(numbers);
// end