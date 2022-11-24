// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))


function teste1 (a, b){
    let resultado = Math.pow(a, b)
    return resultado
}
console.log(teste1(5, 3))