const btnPlus = document.querySelectorAll("#plus-btn");
const btnMinus = document.querySelectorAll("#minus-btn");
const squares = document.querySelectorAll(".square");

function clickOnSquare(e) {
  const square = e.target;
  if (square.id !== "count") return;
  let count = +square.innerText;
  count++;
  square.innerText = count;
}

for (const square of squares) {
  square.addEventListener("click", clickOnSquare)
}

function clickBtnPlus(e) {
  const button = e.target;
  if (button.id !== "plus-btn") return;
  let count = +button.parentElement.lastElementChild.innerText;
  count++;
  button.parentElement.lastElementChild.innerText = count;
}

for (const btn of btnPlus) {
  btn.addEventListener("click", clickBtnPlus)
}

function clickBtnMinus(e) {
  const button = e.target;
  if (button.id !== "minus-btn") return;
  let count = +button.parentElement.lastElementChild.innerText;
  count--;
  button.parentElement.lastElementChild.innerText = count;
}

for (const btn of btnMinus) {
  btn.addEventListener("click", clickBtnMinus)
}