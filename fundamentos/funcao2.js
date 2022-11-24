// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) { // no JS é possível armazenar uma funçao em uma variavel 
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
 const soma = (a, b) => {
    return a + b
 } 


 console.log(soma(15.5, 3))

//retorno implícito
const subtracao = (a, b) => a - b // (a, b) = parametros, a - b = retorno da funcao
console.log(subtracao(19, 12))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
