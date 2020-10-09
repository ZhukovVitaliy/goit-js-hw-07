const range = document.querySelector('#font-size-control');
range.addEventListener('input', changeFontSize);
const magic = document.querySelector('#text');

function changeFontSize(event) {
  magic.style.fontSize = event.currentTarget.value + 'px';
}
