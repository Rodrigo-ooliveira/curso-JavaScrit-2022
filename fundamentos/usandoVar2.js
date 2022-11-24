var numero = 1                        // preferencialmente não usar var globais, mesmo nome, 

{
    var numero = 2
    console.log('dentro =' , numero)
}
console.log('fora =', numero)