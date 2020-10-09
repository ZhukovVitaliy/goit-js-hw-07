const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const containerEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const el = document.createElement('li');
  el.textContent = ingredient;

  return el;
});

containerEl.append(...elements);
