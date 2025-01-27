let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome === '' || nome.trim() === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();
        atualizaEMostraLista();
    }
}

let lista;
function atualizaEMostraLista() {
    lista = document.getElementById('listaAmigos');
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
    } else {
        let sortearAmigo = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = 'O amigo secreto sorteado é: ' + sortearAmigo;
        lista.innerHTML = '';
    }
}
    