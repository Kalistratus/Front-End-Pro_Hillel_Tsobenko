//Объект №1
const a = {
  Ukraine: "Kyiv",
  Russia: "Moscow",
  Germany: "Berlin",
  France: "Paris"
};

//Объект №2
const b = {
  Lada: "X-ray",
  BMW: "X5",
  Lamborghini: "Aventador",
  Renault: "Duster",
  Skoda: "Superb"
};

//Объект №3
const c = {
  Russia: "Moscow",
  Germany: "Berlin",
  France: "Paris",
  Ukraine: "Kyiv"
};

// ----- 1 -----
function copy(target, origin) {
  for (const key in origin) {
    const value = origin[key];
    target[key] = value;
  }
  return target;
}

let res = copy(a, b);
console.log(res);
// ----- end 1 -----

// ----- 2 -----
function compare(target, origin) {
  if (Object.keys(target).length !== Object.keys(origin).length) {
    return false;
  } else {
    for (const key in target) {
      if (target[key] !== origin[key]) return false;
    }
    return true;
  }
}

const res = compare(a, c);
console.log(res);
// ----- end 2 -----

// ------ 3 -----------
const str = "aaabbc";

function calc(element) {
  const arr = [];

  for (let key of element) {
    arr.push(key);
  }

  const result = {};

  arr.forEach(function (element) {
    result[element] === undefined ? (result[element] = 1) : result[element]++;
  });
  return result;
}

const res = calc(str);
console.log(res);
// ------ end ---------