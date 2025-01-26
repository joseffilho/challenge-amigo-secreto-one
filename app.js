let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome === '' || nome.trim() === '') {
        alert('Por favor, insira um nome.');
    }
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    atualizaEMostraLista();
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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }
    let sortearAmigo = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = sortearAmigo;
}