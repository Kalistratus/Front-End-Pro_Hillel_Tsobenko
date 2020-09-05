const listItems = document.querySelectorAll(".list_item");

let listItem;

function selectedListItem(e) {
  const listItem = e.target;
  if (listItem.className !== "list_item") return;

  backgroundRed(listItem);
};

function backgroundRed(li) {
  if (listItem) {
    listItem.classList.remove('red');
  }

  listItem = li;
  listItem.classList.add('red');
}

for (const listItem of listItems) {
    listItem.addEventListener("click", selectedListItem)
}