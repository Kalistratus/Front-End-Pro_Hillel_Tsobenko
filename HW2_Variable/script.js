//  ---1---
// При загрузке страницы задается два вопроса: 
// "Как тебя зовут?" "Какого ты года рождения?" 
// И с помощью алерта выводится сообщение с именем и возрастом. 
// Например, если пользователь ответил "Юра" и "1989" то выводится "Юра 28"


let name = prompt('Как тебя зовут?', 'Иван');
let yearOfBirth = +prompt('Какого ты года рождения?', '1982');

// Вычисляем текущий год
let today = new Date();
let year = today.getFullYear();

let age;

if (Number.isNaN(yearOfBirth) || yearOfBirth > year || yearOfBirth < (year - 120)) {
	// 120 - максимально допустимый возраст человека
	alert('Вы некорректно ввели год рождения!');
} else {
	age = year - yearOfBirth;
	alert(name + ' ' + age);
}



//  ---2---
// Ввести с клавиатуры 3 переменные (a, b, c). 
// Привести их все в число. Выполнить операцию суммирования всех переменных. 
// Указать какие переменные являются чётными.

//  ---3---
// Определить среднее арифметическое трех чисел


let a = +prompt('Введите с клавиатуры любую переменную', '1');
let b = +prompt('Введите с клавиатуры ещё одну любую переменную', '2');
let c = +prompt('Введите с клавиатуры последнюю любую переменную', '3');

let sum = a + b + c;
let average = sum / 3;

let resultA = a % 2 ? a : a + ' (число чётное)';
let resultB = b % 2 ? b : b + ' (число чётное)';
let resultC = c % 2 ? c : c + ' (число чётное)';


if (Number.isNaN(sum)) {
	alert('Вы некорректно ввели одну или несколько переменных. Попробуйте снова.');
} else {
	alert('Сумма: ' + sum + '\n' + 'состоит из: \n' + resultA + '\n' + resultB + '\n' + resultC);
	alert('Среднее арифметическое: ' + average);
}



//  ---4---
// Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел


let number = prompt('Введите любое пятизначное число', '12345');

// Вычисляем кол-во сиимволов в строке с числом
let numberLenght = number.length;

let fifthDigit = number % 10;
number = number / 10;
number = Math.floor(number);

let fourthDigit = number % 10;
number = number / 10;
number = Math.floor(number);

let thirdDigit = number % 10;
number = number / 10;
number = Math.floor(number);

let secondDigit = number % 10;
number = number / 10;
number = Math.floor(number);

let firstDigit = number % 10;
number = number / 10;
number = Math.floor(number);

if (numberLenght === 5 && !Number.isNaN(number)) {
	alert(firstDigit + ' ' + secondDigit + ' ' + thirdDigit + ' ' + fourthDigit + ' ' + fifthDigit);
} else {
	alert('Вы ввели НЕ пятизначное число. Попробуйте снова.');
}



//  ---5---
// Даны два различных числа. Определить какое из них больше, а какое меньше.


let firstNumber = +prompt('Введите любое число', '123');
let secondNumber = +prompt('Введите ещё одно любое число', '45');
let sum = firstNumber + secondNumber;

if (Number.isNaN(sum)) {
	alert('Вы неверно ввели одно или оба числа. Попробуйте снова.');
} else if (firstNumber > secondNumber) {
	alert(firstNumber + ' > ' + secondNumber);
} else if (firstNumber < secondNumber) {
	alert(firstNumber + ' < ' + secondNumber);
} else {
	alert(firstNumber + ' = ' + secondNumber);
}



//  ---6---
// Дано число. Определить, заканчивается оно четной цифрой или нечетной. Вывести последнюю цифру.


let number = +prompt('Введите любое число', '135');

let lastDigit =  number % 10;

let even = number % 2 ? number + ' (число нечётное)' : number + ' (число чётное)';

if (Number.isNaN(number)) {
	alert('Вы некорректно ввели число. Попробуйте снова.');
} else {
	alert(even + '\n' + 'Последняя цифра числа: ' + +lastDigit);
}



//  ---7---
// Напишите скрипт, который будет спрашивать у пользователя имя и возраст...


let name = prompt('Укажите ваше имя', 'Иван');
let age = +prompt('Укажите ваш возраст', '25');
let alcohol = confirm('Алкоголь употребляем?');

if (Number.isNaN(age) || age < 0 || age > 120) {
	alert('Вы уверены, что верно ввели свой возраст? Попробуйте ещё раз.');
} else if (alcohol === true && age > 40) {
	alert(name + ', не злоупотребляйте');
} else if (alcohol === true && age < 18) {
	alert(name + ', ты что?! Маме расскажу!');
} else if (alcohol === true && age >= 18 && age <= 40) {
	alert(name + ', только водку с пивом не мешай...');
} else {
	alert(name + ', Так держать!');
}