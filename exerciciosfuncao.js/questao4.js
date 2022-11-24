/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores*/
function teste1(x, y) {
    console.log('Resultado: ' + Math.floor(x / y))
    console.log(`Resto: ${x % y}`) 
}
teste1(32, 6)

function divisao (dividendo, divisor) {
    console.log('Resultado: ' + Math.floor(dividendo / divisor))
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(35, 8)

function teste2(x, y) {
    console.log('teste: ' + (x + y))
}
teste2(34, 26)

function teste3 (x, y, z) {
    return x + y + z
}
teste3(22, 46, 78)