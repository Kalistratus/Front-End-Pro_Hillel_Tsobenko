// 1. Вывод различной информации в консоль:
let info = 'hillel'
console.log(info);

// ...или, например, вывод нескольких аргументов (через запятые) в одну строку:
console.log('hillel', '- это крупнейшая компьютерная школа в Украине с',2012 , 'года.');


// 2. Трассировка стека:
function hillel() {
  console.trace('Мой отчет');
}

hillel();


// 3. Группировка ссобщений в консоли:
console.group('Список занятий');

	console.group('Июль');
		console.log('Начало');
		console.log('Объекты, массивы, условия');
		console.log('jQuery, Ajax, Json');
	console.groupEnd();

	console.group('Август');
		console.log('Node.js');
		console.log('Git');
		console.log('Typescript');
	console.groupEnd();

console.groupEnd();


// 4. Таймер:
console.time('Таймер');
for (let i = 0; i <= 100000; i++) {
}
console.timeEnd('Таймер');


// 5. Сообщение об ошибке в консоле:
console.error('Ошибка!');