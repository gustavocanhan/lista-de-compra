import gerarDiaDaSemana from './gerarDiaDaSemana.js';

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista() {
  if (inputItem.value === '') {
    alert('Por favor, insira um item!');
    return;
  }

  // <li>
  const itemDaLista = document.createElement('li');
  // <div>
  const containerItemDaLista = document.createElement('div');
  containerItemDaLista.classList.add('lista-item-container');
  // <input>
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.id = 'checkbox-' + contador++;
  // <p>
  const nomeItem = document.createElement('p');
  nomeItem.innerText = inputItem.value;

  inputCheckbox.addEventListener('click', function () {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = 'line-through';
    } else {
      nomeItem.style.textDecoration = 'none';
    }
  });

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);

  itemDaLista.appendChild(containerItemDaLista);

  const itemData = document.createElement('p');
  itemData.classList.add('texto-data');
  itemData.innerText = gerarDiaDaSemana();

  itemDaLista.appendChild(itemData);

  return itemDaLista;
}
