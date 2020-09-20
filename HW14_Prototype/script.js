// Юнит - один солдат армии
function Unit(type, health, maxHealth, maxDistance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistance = maxDistance;
}

// функция принимает один параметр - дистанцию, которую нужно пройти юниту. Функция должна проверить способен ли юнит пройти указанную дистанцию.
Unit.prototype.isReadyToMove = function (distance) {
  if (distance >= this.maxDistance) {
    console.log(`Юнит может пройти дистанцию = ${distance}`);
  } else {
    console.log(`Юнит не может пройти дистанцию = ${distance}`);
  }
}

// функция, проверяющая способен ли юнит сражаться. Юнит способен сражаться если его текущее здоровье составляет хотя бы половину от максимально возможного.
Unit.prototype.isReadyToFight = function () {
  if (this.health >= this.maxHealth / 2) {
    console.log(`Юнит способен сражаться: здоровье = ${this.health / this.maxHealth * 100}%`);
  } else {
    console.log(`Юнит не способен сражаться: здоровье = ${this.health / this.maxHealth * 100}%`);
  }
}

// функция, которая проверяет был ли ранен юнит. Если был, то восстанавливает здоровье до максимального.
Unit.prototype.restore = function () {
  const oldHealth = this.health;

  if (this.health < this.maxHealth) {
    this.health = this.maxHealth;
    console.log(`Old health: ${oldHealth}; new health: ${this.maxHealth}`);
  }
  console.log(this);
}

// функция возвращает копию юнита.
Unit.prototype.clone = function () {
  const unit = new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
  console.log(unit);
  return unit;
}


// Армия - набор юнитов
function Army(defaultUnits) {
  this.units = [];
  if (defaultUnits) this.combineUnits(defaultUnits);
}


// функция принимает один параметр - дистанцию, которую нужно проти армии. Армия способна пройти дистанцию если все юниты способны пройти дистанцию.
Army.prototype.isReadyToMove = function (distance) {
  const arr = [];

  this.units.forEach(element => arr.push(element.maxDistance));
  const isDistance = arr.every(element => distance <= element);

  if (isDistance) console.log(`Армия может пройти дистанцию = ${distance}`);
  else console.log(`Армия не может пройти дистанцию = ${distance}`);
}

// функция, проверяющая способна ли армия сражаться. Армия способна сражаться если все юниты способны сражаться.
Army.prototype.isReadyToFight = function () {
  const arr = [];

  this.units.forEach(element => arr.push(element.health));
  const isHealth = arr.every(element => element === 100);

  if (isHealth) console.log("Армия может сражаться");
  else console.log("Армия не может сражаться");
}

// проверка здоровья всех юнитов. Функция восстанавливает здоровье всех раненых юнитов.
Army.prototype.restore = function () {

  for (const element of this.units) {
    if (element.health < element.maxHealth) element.health = element.maxHealth;
  }
  console.log(army);
}

// функция принимает один параметр - дистанцию, которую нужно пройти армии. Возвращает массив юнитов, которые способны пройти эту дистанцию.
Army.prototype.getReadyToMoveUnits = function (distance) {
  const arr = [];

  for (const element of this.units) {
    if (distance <= element.maxDistance) arr.push(element);
  }

  console.log(arr);
}

// функция принимает массив юнитов как параметр. Добавляет всех юнитов из этого массива к массиву собственных юнитов.
Army.prototype.combineUnits = function (newUnits) {
  this.units = this.units.concat(newUnits);
}

// принимает порядковый номер юнита, которого нужно скопировать. Возвращает копию юнита.
Army.prototype.cloneUnit = function (n) {
  const newUser = this.units[n - 1];
  console.log(newUser);
  return newUser;
}


// Массив дефолтных юнитов
const defaultUnits = [
  new Unit("soldier", 70, 100, 5000),
  new Unit("soldier", 70, 100, 4000),
  new Unit("captain", 85, 100, 6000),
  new Unit("general", 100, 100, 11000)
]

// Созданные юниты
const unit1 = new Unit("soldier", 75, 100, 4500);
const unit2 = new Unit("soldier", 45, 100, 5000);
const unit3 = new Unit("soldier", 70, 100, 4000);
const unit4 = new Unit("captain", 90, 100, 8500);
const unit5 = new Unit("major", 95, 100, 9500);
const unit6 = new Unit("general", 100, 100, 12000);


// Создаем дефолтную армию
const army = new Army(defaultUnits);
console.log(army);
console.log("**********************");

// Добавляем в армию созданных юнитов
army.combineUnits([unit1, unit2, unit3, unit4, unit5, unit6]);