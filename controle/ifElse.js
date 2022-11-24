const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(6)
imprimirResultado(8.2)
imprimirResultado(6.6)
imprimirResultado(6.4)
imprimirResultado('epa') // cuidado !!!