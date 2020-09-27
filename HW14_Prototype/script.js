// Юнит - один солдат армии
function Unit(type, health, maxHealth, maxDistance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistance = maxDistance;
}

// функция принимает один параметр - дистанцию, которую нужно пройти юниту. Функция должна проверить способен ли юнит пройти указанную дистанцию.
Unit.prototype.isReadyToMove = function (distance) {
  return distance <= this.maxDistance;
}

// функция, проверяющая способен ли юнит сражаться. Юнит способен сражаться если его текущее здоровье составляет хотя бы половину от максимально возможного.
Unit.prototype.isReadyToFight = function () {
  return this.health >= this.maxHealth / 2;
}

// функция, которая проверяет был ли ранен юнит. Если был, то восстанавливает здоровье до максимального.
Unit.prototype.restore = function () {
  return this.health = this.health < this.maxHealth ? this.maxHealth : this.health;
}

// функция возвращает копию юнита.
Unit.prototype.clone = function () {
  return new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
}


// Армия - набор юнитов
function Army(defaultUnits) {
  this.units = [];
  if (defaultUnits) this.combineUnits(defaultUnits);
}


// функция принимает один параметр - дистанцию, которую нужно проти армии. Армия способна пройти дистанцию если все юниты способны пройти дистанцию.
Army.prototype.isReadyToMove = function (distance) {
  return this.units.every(unit => unit.isReadyToMove(distance));
}

// функция, проверяющая способна ли армия сражаться. Армия способна сражаться если все юниты способны сражаться.
Army.prototype.isReadyToFight = function () {
  return this.units.every(unit => unit.isReadyToFight());
}

// проверка здоровья всех юнитов. Функция восстанавливает здоровье всех раненых юнитов.
Army.prototype.restore = function () {
  for (const unit of this.units) unit.restore();
}

// функция принимает один параметр - дистанцию, которую нужно пройти армии. Возвращает массив юнитов, которые способны пройти эту дистанцию.
Army.prototype.getReadyToMoveUnits = function (distance) {
  return this.units.filter(unit => unit.isReadyToMove(distance));
}

// функция принимает массив юнитов как параметр. Добавляет всех юнитов из этого массива к массиву собственных юнитов.
Army.prototype.combineUnits = function (newUnits) {
  return this.units = this.units.concat(newUnits);
}

// принимает порядковый номер юнита, которого нужно скопировать. Возвращает копию юнита.
Army.prototype.cloneUnit = function (n) {
  const unit = this.units[n - 1];
  return unit !== undefined ? unit.clone() : undefined;
}


// Массив дефолтных юнитов
const defaultUnits = [
  new Unit("soldier", 70, 100, 5000),
  new Unit("soldier", 60, 100, 4000),
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