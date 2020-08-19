function addition() {
  let res = 0;
  return (number) => (res += number);
}

let sum = addition();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));