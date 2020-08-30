const wrapper = document.querySelector("#wrapper");
if (wrapper !== null) {
    const list = createList();
    const form = createForm((value) => {
        const li = createListItem();
        const liSpan = createListItemSpan({ text: value });
        const btnEdit = createListItemBtnEdit({ text: "Edit" });
        const btnDel = createListItemBtnDel({ text: "Del" });
        list.appendChild(li);
        li.appendChild(liSpan);
        li.appendChild(btnEdit);
        li.appendChild(btnDel);
    });

    wrapper.appendChild(form);
    wrapper.appendChild(list);
}

function createForm(onAdd) {
    const container = document.createElement("div");
    container.className = "form";

    const okButton = createButton({
        text: "OK",
        className: "primary",
        disabled: true
    });

    const input = createInput({
        placeholder: "Enter Name"
    });

    const label = createLabel({
        text: "Name: "
    });

    okButton.addEventListener("click", () => {
        if (typeof onAdd === "function") {
            onAdd(input.value);
            input.value = "";
            okButton.disabled = true;
            input.focus();
        }
    });

    input.addEventListener("input", (event) => {
        const value = event.target.value;
        okButton.disabled = value === "";
    });

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(okButton);
    
    return container;
}

function createInput(props) {
    const placeholder = props.placeholder || "";

    const input = document.createElement("input");
    input.placeholder = placeholder;

    return input;
}

function createLabel(props) {
    const text = props.text || "";

    const label = document.createElement("span");
    label.innerHTML = text;

    return label;
}

function createButton(props) {
    const text = props.text || "";
    const className = props.className || "";
    const disabled = props.disabled || false;

    const button = document.createElement("button");

    button.type = "button";
    button.innerHTML = text;
    button.className = className;
    button.disabled = disabled;

    return button;
}

function createList() {
    return document.createElement("ul");
}

function createListItem() {
    return element = document.createElement("li");
}

function createListItemSpan(props) {
    const text = props.text || "";
    const element = document.createElement("span");
    element.className = "user";
    element.innerHTML = text;
    return element;
}

function createListItemBtnEdit(props) {
    const text = props.text || "";
    const buttonEdit = document.createElement("button");
    buttonEdit.type = "button";
    buttonEdit.className = "edit";
    buttonEdit.innerHTML = text;

    buttonEdit.addEventListener("click", () => {
        const newUser = prompt('Введите новое имя');
        if (newUser) {
            buttonEdit.parentNode.firstChild.innerHTML = newUser;
        }
    });

    return buttonEdit;
}

function createListItemBtnDel(props) {
    const text = props.text || "";
    const buttonDel = document.createElement("button");
    buttonDel.type = "button";
    buttonDel.className = "del";
    buttonDel.innerHTML = text;

    buttonDel.addEventListener("click", () => {
        const deleteUser = confirm('Удалить пользователя?');
        if (deleteUser) {
            buttonDel.parentNode.remove();
        }
    });

    return buttonDel;
}

