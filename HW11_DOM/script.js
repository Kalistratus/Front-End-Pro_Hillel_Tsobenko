const wrapper = document.querySelector("#wrapper");

if (wrapper !== null) {
    const list = createUserListContainer();
    const form = createForm((value) => {
        const card = createUserCard({
            text: value
        });
        list.appendChild(card);
    });

    const names = ["John", "Pete", "Amy"];

    for (const user of names) {
        const card = createUserCard({
            text: user
        });
        list.appendChild(card);
    }

    wrapper.appendChild(form);
    wrapper.appendChild(list);

}


function createForm(onAdd) {
    const container = document.createElement("div");
    container.className = "form";

    const okButton = createButton({
        text: "Add",
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


function createLabel(props) {
    const text = props.text || "";

    const label = document.createElement("span");
    label.innerHTML = text;

    return label;
}


function createInput(props) {
    const placeholder = props.placeholder || "";

    const input = document.createElement("input");
    input.placeholder = placeholder;

    return input;
}


function createButton(props) {
    const text = props.text || "";
    const disabled = props.disabled || false;

    const button = document.createElement("button");

    button.type = "button";
    button.innerHTML = text;
    button.disabled = disabled;

    return button;
}


function createUserListContainer() {
    const list = document.createElement("div");
    list.className = "list_container";

    return list;
}


function createUserCardContainer() {
    const card = document.createElement("div");
    card.className = "card_item";

    return card;
}


function createUserCardName() {
    const element = document.createElement("div");
    element.className = "username";

    return element;
}


function createUserCardBtnEdit() {
    const buttonEdit = document.createElement("button");
    buttonEdit.type = "button";
    buttonEdit.className = "edit";
    buttonEdit.innerHTML = "Edit";

    buttonEdit.addEventListener("click", () => {
        const newUser = prompt('Введите новое имя');
        if (newUser) {
            buttonEdit.parentNode.firstChild.innerHTML = newUser;
        }
    });

    return buttonEdit;
}


function createUserCardBtnDel() {
    const buttonDel = document.createElement("button");
    buttonDel.type = "button";
    buttonDel.className = "del";
    buttonDel.innerHTML = "Del";

    buttonDel.addEventListener("click", () => {
        const deleteUser = confirm('Удалить пользователя?');
        if (deleteUser) {
            buttonDel.parentNode.remove();
        }
    });

    return buttonDel;
}


function createUserCard(props) {
    const card = createUserCardContainer();

    const user = createUserCardName(props);
    const text = props.text || "";
    user.innerHTML = text;
    card.appendChild(user);

    const btn1 = createUserCardBtnEdit();
    card.appendChild(btn1);

    const btn2 = createUserCardBtnDel();
    card.appendChild(btn2);

    return card;
}