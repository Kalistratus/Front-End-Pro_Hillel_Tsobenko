const squares = document.querySelectorAll(".square");

function changeColor(e) {
  const square = e.target;
  if (!square.classList.contains("square")) return;

  const colors = ["blue", "green", "yellow"];
  const indexOfColor = colors.indexOf(square.classList[1]);

  if (indexOfColor === colors.length - 1) {
    square.classList.remove(colors[colors.length - 1]);
    square.classList.add(colors[0]);
  } else {
    square.classList.remove(colors[indexOfColor]);
    square.classList.add(colors[indexOfColor + 1]);
  }
}

for (const square of squares) {
  square.addEventListener("click", changeColor)
}