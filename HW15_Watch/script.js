const wrapper = document.querySelector("#wrapper");


function firstNumberOfHour() {
  const hoursFirstNumber = document.createElement("div");
  hoursFirstNumber.className = "hour-first";

  return hoursFirstNumber;
}

function secondNumberOfHour() {
  const hoursSecondNumber = document.createElement("div");
  hoursSecondNumber.className = "hour-second";

  return hoursSecondNumber;
}

function firstNumberOfMinute() {
  const minutesFirstNumber = document.createElement("div");
  minutesFirstNumber.className = "minute-first";

  return minutesFirstNumber;
}

function secondNumberOfMinute() {
  const minutesSecondNumber = document.createElement("div");
  minutesSecondNumber.className = "minute-second";

  return minutesSecondNumber;
}

function firstNumberOfSecond() {
  const secondsFirstNumber = document.createElement("div");
  secondsFirstNumber.className = "second-first";

  return secondsFirstNumber;
}

function secondNumberOfSecond() {
  const secondsSecondNumber = document.createElement("div");
  secondsSecondNumber.className = "second-second";

  return secondsSecondNumber;
}

// Разделитель
function separatorNumbers() {
  const separatorDiv = document.createElement("div");
  separatorDiv.className = "separator";
  separatorDiv.innerText = ":";

  return separatorDiv;
}


function createWatchContainer() {
  const watchContainer = document.createElement("div");
  watchContainer.className = "container";

  const hour1 = firstNumberOfHour();
  const hour2 = secondNumberOfHour();
  const minute1 = firstNumberOfMinute();
  const minute2 = secondNumberOfMinute();
  const second1 = firstNumberOfSecond();
  const second2 = secondNumberOfSecond();
  const separator1 = separatorNumbers();
  const separator2 = separatorNumbers();

  watchContainer.appendChild(hour1);
  watchContainer.appendChild(hour2);
  watchContainer.appendChild(separator1);
  watchContainer.appendChild(minute1);
  watchContainer.appendChild(minute2);
  watchContainer.appendChild(separator2);
  watchContainer.appendChild(second1);
  watchContainer.appendChild(second2);

  return watchContainer;
}


if (wrapper !== null) {
  const container = createWatchContainer();
  wrapper.appendChild(container);
}


const hour1 = document.querySelector(".hour-first");
const hour2 = document.querySelector(".hour-second");
const minute1 = document.querySelector(".minute-first");
const minute2 = document.querySelector(".minute-second");
const second1 = document.querySelector(".second-first");
const second2 = document.querySelector(".second-second");


function getCurrentTime() {
  const date = new Date();

  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());
  let seconds = String(date.getSeconds());

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  hour1.innerText = hours[0];
  hour2.innerText = hours[1];
  minute1.innerText = minutes[0];
  minute2.innerText = minutes[1];
  second1.innerText = seconds[0];
  second2.innerText = seconds[1];
}

setInterval(getCurrentTime, 1000);