let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome === '' || nome.trim() === '') {
        alert('Por favor, insira um nome.');
    }
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    console.log(amigos);
}