const squares = document.querySelectorAll(".square");

function changeColor(e) {
  const square = e.target;
  if (!square.classList.contains("square")) return;

  let colors = ["blue", "green", "yellow"];

  if (square.classList.contains(colors[0])) {
    square.classList.add(colors[1]);
    square.classList.remove(colors[0]);
  } else if (square.classList.contains(colors[1])) {
    square.classList.add(colors[2]);
    square.classList.remove(colors[1]);
  } else {
    square.classList.add(colors[0]);
    square.classList.remove(colors[2]);
  }
}

for (const square of squares) {
  square.addEventListener("click", changeColor)
}