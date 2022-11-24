function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1, 3, 9, 35, 75))
console.log(soma('a', 'b', 'Teste'))