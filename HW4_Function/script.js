// ---1---
// Написать функцию, которая вычисляет площадь круга.

function calcCircleArea(diameter) {
  return Math.PI * ((diameter / 2) ** 2);
}

// Сюда ввести значение диаметра круга
const result = calcCircleArea(30);

console.log(result);



// ---2---
// Написать функцию, которая вычисляет длину окружности.

function calcCircuit(diameter) {
  return 2 * Math.PI * (diameter / 2);
}

// Сюда ввести значение диаметра круга
const result = calcCircuit(60);

console.log(result);



// ---3---
// Написать функцию, которая вычисляет среднее арифметическое двух чисел.

function calcAverage(a, b) {
  return (a + b) / 2;
}

// Сюда ввести два любых числа
const result = calcAverage(10, 20);

console.log(result);



// ---4---
// Написать функцию calc(x, y, action), которая получает 3 аргумента:
// числа x и y, а также строку action. В переменной action может быть: +, -, *, /, %, ^. 
// Вывести результат математического действия, указанного в переменной action.

function calc(x, y, action) {

  switch (action) {
    case '+':
      return x + y;
      break;
    case '-':
      return x - y;
      break;
    case '*':
      return x * y;
      break;
    case '/':
      return x / y;
      break;
    case '%':
      return x % y;
      break;
    case '^':
      return x ^ y;
      break;
    default:
      console.log('Incorrect symbol!');
  }

}

const total = calc(10, 5, "+");
console.log(total);