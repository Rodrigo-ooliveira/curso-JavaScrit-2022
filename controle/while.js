function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let aleatorio = 0

while (aleatorio != -1) {
    aleatorio = getInteiroAleatorioEntre(-1, 10)
    console.log((`Opção escolhida foi ${aleatorio}, `))
}

console.log('Até a próxima')