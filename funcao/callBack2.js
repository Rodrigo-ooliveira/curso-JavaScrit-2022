const notas = [7.7, 6.8, 4.5, 6.4, 8.3, 7.5]

// sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callBack
const notasBaixas2 = notas.filter(function (nota) {
    return nota< 7
})

console.log(notasBaixas2)

const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)