
/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um*/

function triangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    }else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isoceles'
    }else {
        return 'Escaleno'
    }
}

console.log(triangulo(2, 2, 2))
console.log(triangulo(2, 5, 2))
console.log(triangulo(3, 2, 5))

function quadrado (lado1, lado2, lado3, lado4) {
    if (lado1 == lado2 && lado2 == lado3 && lado4 == lado1) {
        return ('quadrado')
    } else if (lado1 == lado2 && lado3 == lado4) {
        return ('Retângulo')
    } else if (lado1 != lado2 && lado3 != lado4 ) {
        return ('ERRO!!!')
    } 
}
console.log(quadrado(2, 2, 2, 2))
console.log(quadrado(2, 2, 4, 4))
console.log(quadrado(5, 5, 5, 5))
console.log(quadrado(3, 3, 5, 5))
console.log(quadrado(2, 3, 4, 5))