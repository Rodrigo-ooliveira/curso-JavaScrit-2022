const notas = [6.7, 4.5, 8.9, 9.3, 7.8]

for (let i in notas) {
    console.log(i, notas[i])
} 

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Oliveira',
    idade: 29,
    peso:64
}
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}