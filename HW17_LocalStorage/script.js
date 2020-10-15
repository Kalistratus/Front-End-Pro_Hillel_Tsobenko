const wrapper = document.querySelector("#wrapper");
const input = document.querySelector("#wrapper input");
const button = document.querySelector("#wrapper button");

function parseUsers(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error("Something went wrong");
    return null;
  }
}

const usersArray = parseUsers(localStorage.getItem("users")) || [];
usersArray.forEach(item => createUserItem(item));


function createDeleteButton() {
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerText = "delete";

  deleteButton.addEventListener("click", (event) => {
    const currentUserItem = event.target.parentElement;

    const usersArray = parseUsers(localStorage.getItem("users"));

    usersArray.splice(usersArray.indexOf(event.target.parentElement.firstElementChild.innerText), 1);
    localStorage.setItem("users", JSON.stringify(usersArray));

    currentUserItem.remove();
  })

  return deleteButton;
}


function createUserItem(value) {
  const div = document.createElement("div");
  div.className = "user-item";
  wrapper.appendChild(div);

  const span = document.createElement("span");
  span.innerText = value;
  div.appendChild(span);

  const deleteButton = createDeleteButton();
  div.appendChild(deleteButton);
}


button.addEventListener("click", () => {
  if (input.value === "") return;

  usersArray.push(input.value);
  localStorage.setItem("users", JSON.stringify(usersArray));

  createUserItem(input.value);

  input.value = "";
});