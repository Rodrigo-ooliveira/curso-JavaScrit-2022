const saudacao = "Opaaa" //contexcto lixico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//  Objetos são grupos aninhados de pares nome/valor
const cliente = {
    Nome: 'Rodrigo',
    Idade: 43,
    peso: 75,
    Endereço: {
       Rua: 'Oliveira',
       Numero: 123, 
       CEP: 96830585,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
