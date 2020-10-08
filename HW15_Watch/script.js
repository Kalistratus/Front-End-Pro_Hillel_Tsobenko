const wrapper = document.querySelector("#wrapper");

const div = document.createElement("div");
div.className = "clock";
wrapper.appendChild(div);

class Clock {
  constructor() {
    this.intervalId = null;
  }

  formatDateToString() {
    throw new Error("Not implemented!");
  }

  render() {
    const dateFormatted = this.formatDateToString();
    const colors = ["blueviolet", "red", "orange", "yellow", "green", "blue", "purple", "deeppink", "lightseagreen", "magenta", "midnightblue", " navy"];

    // Удаление всех дочерних элементов
    while (div.firstChild) div.removeChild(div.firstChild);

    for (let i = 0; i < dateFormatted.length; i++) {
      const elem = document.createElement("span");
      elem.innerText = dateFormatted[i];
      elem.style.color = colors[i];
      div.appendChild(elem);
    }
  }

  start() {
    this.intervalId = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

class FormatWithSeconds extends Clock {
  formatDateToString() {
    const date = new Date();

    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());
    let seconds = String(date.getSeconds());

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return `${hours}:${minutes}:${seconds}`;
  }
}

class FormatWithoutSeconds extends Clock {
  formatDateToString() {
    const date = new Date();

    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    return `${hours}:${minutes}`;
  }
}

class FormatAmPm extends Clock {
  formatDateToString() {
    const date = new Date();

    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());
    let seconds = String(date.getSeconds());

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let amPm = "AM";
    let hoursAm = hours;

    if (hoursAm > 12) {
      hoursAm -= 12;
      amPm = "PM";
    }

    return `${hoursAm}:${minutes}:${seconds}${amPm}`;
  }
}

// local, short
function createClock(format) {
  switch (format) {
    case "format1":
      return new FormatWithSeconds();
    case "format2":
      return new FormatWithoutSeconds();
    case "format3":
      return new FormatAmPm();
    default:
      return null;
  }
}

let clock = createClock("format1");
if (clock !== null) {
  clock.start();
}


const select = document.querySelector("select");
select.addEventListener("change", (event) => {
  clock.stop();

  clock = createClock(event.target.value);
  if (clock !== null) {
    clock.start();
  }

});







// const wrapper = document.querySelector("#wrapper");


// function firstNumberOfHour() {
//   const hoursFirstNumber = document.createElement("div");
//   hoursFirstNumber.className = "hour-first";

//   return hoursFirstNumber;
// }

// function secondNumberOfHour() {
//   const hoursSecondNumber = document.createElement("div");
//   hoursSecondNumber.className = "hour-second";

//   return hoursSecondNumber;
// }

// function firstNumberOfMinute() {
//   const minutesFirstNumber = document.createElement("div");
//   minutesFirstNumber.className = "minute-first";

//   return minutesFirstNumber;
// }

// function secondNumberOfMinute() {
//   const minutesSecondNumber = document.createElement("div");
//   minutesSecondNumber.className = "minute-second";

//   return minutesSecondNumber;
// }

// function firstNumberOfSecond() {
//   const secondsFirstNumber = document.createElement("div");
//   secondsFirstNumber.className = "second-first";

//   return secondsFirstNumber;
// }

// function secondNumberOfSecond() {
//   const secondsSecondNumber = document.createElement("div");
//   secondsSecondNumber.className = "second-second";

//   return secondsSecondNumber;
// }

// // Разделитель
// function separatorNumbers() {
//   const separatorDiv = document.createElement("div");
//   separatorDiv.className = "separator";
//   separatorDiv.innerText = ":";

//   return separatorDiv;
// }


// function createWatchContainer() {
//   const watchContainer = document.createElement("div");
//   watchContainer.className = "container";

//   const hour1 = firstNumberOfHour();
//   const hour2 = secondNumberOfHour();
//   const minute1 = firstNumberOfMinute();
//   const minute2 = secondNumberOfMinute();
//   const second1 = firstNumberOfSecond();
//   const second2 = secondNumberOfSecond();
//   const separator1 = separatorNumbers();
//   const separator2 = separatorNumbers();

//   watchContainer.appendChild(hour1);
//   watchContainer.appendChild(hour2);
//   watchContainer.appendChild(separator1);
//   watchContainer.appendChild(minute1);
//   watchContainer.appendChild(minute2);
//   watchContainer.appendChild(separator2);
//   watchContainer.appendChild(second1);
//   watchContainer.appendChild(second2);

//   return watchContainer;
// }


// if (wrapper !== null) {
//   const container = createWatchContainer();
//   wrapper.appendChild(container);
// }


// const hour1 = document.querySelector(".hour-first");
// const hour2 = document.querySelector(".hour-second");
// const minute1 = document.querySelector(".minute-first");
// const minute2 = document.querySelector(".minute-second");
// const second1 = document.querySelector(".second-first");
// const second2 = document.querySelector(".second-second");


// function getCurrentTime() {
//   const date = new Date();

//   let hours = String(date.getHours());
//   let minutes = String(date.getMinutes());
//   let seconds = String(date.getSeconds());

//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;

//   // Для вывода времени в консоль достаточно этой функции (getCurrentTime) без последних 6-и строк кода
//   console.log(`${hours}:${minutes}:${seconds}`);

//   hour1.innerText = hours[0];
//   hour2.innerText = hours[1];
//   minute1.innerText = minutes[0];
//   minute2.innerText = minutes[1];
//   second1.innerText = seconds[0];
//   second2.innerText = seconds[1];
// }

// setInterval(getCurrentTime, 1000);








// const wrapper = document.querySelector("#wrapper");
// const select = document.querySelector("select");
// const div = document.createElement("div");
// wrapper.appendChild(div);


// function renderClock(stringClock) {
//   // for (let i = 0; i < stringClock.length; i++) {
//   //   const elem = document.createElement("span");
//   //   elem.innerText = stringClock[i];
//   //   div.appendChild(elem);
//   // }

//   div.innerText = stringClock;
// }

// setInterval(renderClock, 1000);


// function formatDate(clockType) {
//   switch(clockType) {
//     case "format1": return formatWithoutSeconds();
//     case "format2": return formatWithSeconds();
//     case "format3": return formatAmPm();
//     default: return formatWithoutSeconds();
//   }
// }


// function formatWithoutSeconds() {
//   const date = new Date();

//   let hours = String(date.getHours());
//   let minutes = String(date.getMinutes());

//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;

//   console.log(`${hours}:${minutes}`);
//   return `${hours}:${minutes}`;
// }


// function formatWithSeconds() {
//   const date = new Date();

//   let hours = String(date.getHours());
//   let minutes = String(date.getMinutes());
//   let seconds = String(date.getSeconds());

//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;

//   console.log(`${hours}:${minutes}:${seconds}`);
//   return `${hours}:${minutes}:${seconds}`;
// }


// function formatAmPm() {
//   const date = new Date();

//   let hours = String(date.getHours());
//   let minutes = String(date.getMinutes());
//   let seconds = String(date.getSeconds());

//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;

//   let amPm = "AM";
//   let hoursAm = hours;

//   if (hoursAm > 12) {
//     hoursAm -= 12;
//     amPm = "PM";
//   }

//   console.log(`${hoursAm}:${minutes}:${seconds}${amPm}`);
//   return `${hoursAm}:${minutes}:${seconds}${amPm}`;
// }


// select.addEventListener("change", (event) => {
//   renderClock(formatDate(event.target.value));
// });