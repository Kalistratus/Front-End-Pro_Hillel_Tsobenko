const button = document.querySelector('button');

function getInfoAboutBody() {
  const wrapper = document.querySelector('#wrapper');

  // Преобразование в массив
  const totalTags = Array.from(wrapper.children);

  // Два счетчика для числовых и строчных тегов
  let countText = 0;
  let countNumber = 0;

  totalTags.forEach(element => Number.isNaN(+element.innerText) ? countText += 1 : countNumber += 1);

  const p = document.querySelectorAll('#wrapper p').length;
  const span = document.querySelectorAll('#wrapper span').length;

  const result = document.querySelector('#result');
  result.innerText = `Общее кол-во всех тегов: ${totalTags.length} \n Тегов <p>: ${p} \n Тегов <span>: ${span} \n Числовых: ${countNumber} \n Строчных: ${countText}`;
}

if (button !== null) {
  button.addEventListener('click', getInfoAboutBody);
}