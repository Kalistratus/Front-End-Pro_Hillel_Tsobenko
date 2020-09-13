const buttons = document.querySelectorAll("button");
const squares = document.querySelectorAll(".square");

function clickOnSquare(e) {
  const square = e.target;
  if (square.dataset.id !== "count") return;
  let count = +square.innerText;
  count++;
  square.innerText = count;
}

for (const square of squares) {
  square.addEventListener("click", clickOnSquare)
}

function clickButton(e) {
  const button = e.target;
  let count = +button.parentElement.lastElementChild.innerText;

  if (button.dataset.id === "plus-btn") count++;
  else if (button.dataset.id === "minus-btn") count--;
  else return;

  button.parentElement.lastElementChild.innerText = count;
}

for (const btn of buttons) {
  btn.addEventListener("click", clickButton);
}