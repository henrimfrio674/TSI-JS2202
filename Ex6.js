const novoTitulo = document.createElement('h2');

novoTitulo.id = 'tesk-title';
novoTitulo.appendChild(document.createTextNode("Nova Lista"));

console.log(novoTitulo);

const tituloAtual = document.getElementById('tesk-title');

let divMaeDoTitulo = document.getElementsByClassName('card-action');

divMaeDoTitulo.replaceChild(novoTitulo,tituloAtual);