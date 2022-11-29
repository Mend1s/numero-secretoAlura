const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 100)
}

console.log('Número sorteado:', numeroSecreto)