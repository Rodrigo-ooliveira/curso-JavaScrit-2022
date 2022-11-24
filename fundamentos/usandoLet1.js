var numero = 1                        // usando "var" tem escopo global e de função
{
    let numero = 2                   // usando "let" tem escopo global, função e bloco
    console.log('dentro =' , numero)
}
console.log('fora =', numero)        // nesse exemplo usa a var global

