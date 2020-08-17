// ----- 1 -----
function isSymbolPresentInString(str, symbol) {
  if (typeof str === "string") {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === symbol) return true;
    }
    return false;
  }
  return undefined;
}

let res = isSymbolPresentInString("abc", "a");
console.log(res);
res = isSymbolPresentInString("abc", "e");
console.log(res);
// ----- end 1 -----

// ----- 2 -----
function getSymbolIndex(str, symbol) {
  if (typeof str === "string") {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === symbol) return i;
    }
    return -1;
  }
  return undefined;
}

let res = getSymbolIndex("hello lol", "h");
console.log(res);
res = getSymbolIndex("hello lol", "l");
console.log(res);
res = getSymbolIndex("hello lol", "v");
console.log(res);
// ----- end 2 -----

// ----- 3 -----
function getNumberOfEven(n) {
  const arr = String(n).split("");

  let count = 0;

  for (const key in arr) {
    if (arr[key] % 2 === 0) count++;
  }
  return count;
}

let res = getNumberOfEven(223344);
console.log(res);
res = getNumberOfEven(111);
console.log(res);
// ----- end 3 -----