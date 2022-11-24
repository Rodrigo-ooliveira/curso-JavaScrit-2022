
/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/



function soma(operador1, operador2) {
    return [operador1 + operador2 , operador1 * operador2, operador1 - operador2, operador1 / operador2]
}
 console.log(soma(5, 10))
 

function teste1(a, b) {
    return a + b
}
console.log(teste1(2, 10))

function teste2(x, y) {
    x = 2
    y = 5
    return [x ** 2, y / 2]
}
console.log(teste2())

function teste3(c, d) {
    return [c + d, d - c,]
} 
console.log(teste3(50, 6))

