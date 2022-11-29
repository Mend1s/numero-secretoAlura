const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número sorteado:', numeroSecreto)

const elementoMenor = document.getElementById('menor-valor')
elementoMenor.innerHTML = menorValor

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorValor