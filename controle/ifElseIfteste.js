Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(400, 500)) {
        console.log('Muda')
    } else if(nota.entre(600, 750)) {
        console.log('Crescimento')
    } else if(nota.entre(751, 950)) {
        console.log('Vegetativo') 
    } else if(nota.entre(951, 1200)) {
        console.log('Floração')
    } else {
        console.log('Nota invalida')
    }

}

imprimirResultado(100)
imprimirResultado(800)
imprimirResultado(300)
imprimirResultado(710)
imprimirResultado(696)
imprimirResultado(699)
imprimirResultado(551)
imprimirResultado(489)
imprimirResultado(749)
imprimirResultado(746)
imprimirResultado(1200)
imprimirResultado(1320)
imprimirResultado(489)
imprimirResultado(530)
imprimirResultado(1050)