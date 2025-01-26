let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome === '' || nome.trim() === '') {
        alert('Por favor, insira um nome.');
    }
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    adicionaLista();
}

function atualizaEMostraLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        let criaItemLi = document.createElement('li');
        criaItemLi.innerHTML = amigo;
        lista.appendChild(criaItemLi);
    });
}

