const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia(listaDeCompras) {
  const itensDaLista = listaDeCompras.querySelectorAll('li');
  itensDaLista.length === 0
    ? (mensagemListaVazia.style.display = 'block')
    : (mensagemListaVazia.style.display = 'none');
}

export default verificarListaVazia;
