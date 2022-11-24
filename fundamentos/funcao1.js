// Funcao sem retorno; função bloco de codigo nomeado, para você chamar esse bloco quando quiser
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(3)
imprimirSoma(28.2, 15, 4, 5, 6)
imprimirSoma()

//Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(11))
console.log(soma())