const wrapper = document.querySelector(".wrapper");

function createInputEmail() {
  const email = document.createElement("input");
  email.type = "text";
  email.name = "email";
  email.placeholder = "Enter email";
  
  return email;
}

function createInputPassword() {
  const password = document.createElement("input");
  password.type = "password";
  password.name = "password";
  password.placeholder = "Password";
  
  return password;
}

function createSubmit() {
  const button = document.createElement("button");
  button.type = "submit";
  button.innerHTML = "SUBMIT";
  button.disabled = true;
  
  return button
}

function createForm() {
  const form = document.createElement("form");
  form.name = "form";

  const mail = createInputEmail();
  const pass = createInputPassword();
  const button = createSubmit();

  form.appendChild(mail);
  form.appendChild(pass);
  form.appendChild(button);

  return form;
}


if (wrapper !== null) {
  const form = createForm();
  wrapper.appendChild(form);
}


const form = document.querySelector("form");
const email = document.querySelector("form input[type = \"text\"]");
const password = document.querySelector("form input[type = \"password\"]");
const button = document.querySelector("button");


password.addEventListener("blur", () => {
  const trueValueNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const trueValueSymbols = ["@", "$", "#", "!", "?", "&"];

  // Проверка на наличие числа
  const isNumber = Array.from(password.value).some((element) => {
    for (const currentNumber of trueValueNumbers) {
      if (+element === currentNumber) return true;
    }
  });

  // Проверка на наличие символа
  const isSymbol = Array.from(password.value).some((element) => {
    for (const currentSymbol of trueValueSymbols) {
      if (element === currentSymbol) return true;
    }
  });

  if (password.value.length < 8 || isNumber === false || isSymbol === false) {
    password.classList.add("input-warning");
    button.disabled = true;
  } else {
    password.classList.remove("input-warning");
  }
});


email.addEventListener("blur", () => {
  const trueEmailSymbols = ["@", "."];

  // Проверка на наличие символов в почте
  const isEmailSymbol = trueEmailSymbols.every((element) => {
    for (const currentSymbol of Array.from(email.value)) {
      if (element === currentSymbol) return true;
    }
  })

  if (isEmailSymbol === false) {
    email.classList.add("input-warning");
    button.disabled = true;
  } else {
    email.classList.remove("input-warning");
    button.disabled = false;
  }
});


function isInput(element) {
  return element instanceof HTMLInputElement;
}


form.addEventListener("submit", event => {
  event.preventDefault();

  const result = Array.from(form.elements)
    .filter(element => isInput(element))
    .reduce((acc, element) => {
      const name = element.name;
      const value = element.value;

      acc[name] = value;
      return acc;

    }, {});

  console.log(result);

  email.value = "";
  password.value = "";
});