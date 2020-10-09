const itemsOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemsOfCategories.length} категории.`);

itemsOfCategories.forEach(i => {
  const headingUl = i.querySelector('h2');
  const amountOfEl = i.querySelector('ul');

  console.log(`Категория: ${headingUl.textContent}`);
  console.log(`Количество элементов: ${amountOfEl.children.length}`);
});
