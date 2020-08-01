// ---1---
// Вывести на страницу в одну строку через запятую числа от 10 до 20

const a = 10;
const b = 20;
let result = a + ", ";

for (let i = a; i <= b; i++) {
  if (i > a && i < b) {
    result += i + ", ";
  } else if (i === b) {
    result += i;
  }
}

alert(result);



// ---2---
// Вывести квадраты чисел от 10 до 20

const a = 10;
const b = 20;
let result;

for (let i = a; i <= b; i++) {
  result = i ** 2;
  console.log(`Квадрат числа ${i}: ${result}`);
}



// ---3---
// Вывести таблицу умножения на 7

const value = 7;
let result;

for (let i = 1; i <= 10; i++) {
  result = value * i;
  console.log(`${value} * ${i} = ${result}`);
}



// ---4---
// Найти сумму всех целых чисел от 1 до 15

const a = 1;
const b = 15;
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i <= b) {
    sum += i;
  }
}

console.log(`Сумма всех целых чисел: ${sum}`);



// ---5---
// Найти произведение всех целых чисел от 15 до 35

const a = 15;
const b = 35;
let result = 1;

for (let i = a; i <= b; i++) {
  if (i <= b) {
    result *= i;
  }
}

console.log(`Произведение всех целых чисел: ${BigInt(result)}`);



// ---6---
// Найти среднее арифметическое всех целых чисел от 1 до 500

const a = 1;
const b = 500;
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i <= b) {
    sum += i;
  }
}

let count = b - a + 1;
let middle = sum / count;
console.log(`Среднее арифметическое: ${middle}`);



// ---7---
// Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80

const a = 30;
const b = 80;
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(`Сумма чётных чисел диапазона: ${sum}`);



// ---8---
// Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3

const a = 100;
const b = 200;
let multiple = 3;

for (let i = a; i <= b; i++) {
  if (i !== 0 && i % multiple === 0) {
    console.log(i);
  }
}



// ---9---
// Дано натуральное число. Найти и вывести на страницу все его делители.
// Определить количество его четных делителей
// Найти сумму его четных делителей

let number = +prompt("Введите любое число");
console.log(`Вы ввели число: ${number}`);

let amount;
let amountEven;

// Сумма четных делителей изначально равна 0
let sum = 0;

//Находим все делители
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    amount = number / i;
    console.log(`Делитель ${i} : ${amount} шт.`);
  } else {
    continue;
  }
}

console.log("......................................");

//Находим четные делители
for (let i = 1; i <= number; i++) {
  if (i % 2 === 0 && number % i === 0) {
    amountEven = number / i;
    console.log(`Делитель ${i} : ${amountEven} шт.`);
  } else {
    continue;
  }

  //Суммируем четные делители
  sum += i;
}

console.log(`Сумма четных делителей: ${sum}`);



// ---10---
// Напечатать полную таблицу умножения от 1 до 10

let result;

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
  console.log(".............");
}



// ---11---
// Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10.
// Пользователь должен угадать число.
// Игра продолжается до тех пор, пока пользователь не угадает число. Пользователь может остановить игру в любой момент.

const number = Math.round(Math.random() * 10);

while (true) {
  let userNumber = prompt("Угадайте число от 0 до 10:");

  if (number === +userNumber) {
    alert(`Вы угадали. Действительно, это число ${userNumber}`);
    break;
  } else if (userNumber === null) {
    alert("Игра отменена пользователем");
    break;
  }
}
