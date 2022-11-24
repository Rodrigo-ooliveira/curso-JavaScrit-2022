// destructuring em função
const pessoa = {
    Nome: 'Rodrigo',
    Idade: 43,
    CPF: '814.345.370-72',
    Email : 'oliveirafly@yahoo.com.br',
    Endereco: {
        Logradouro: 'Rua Walder Rudi Kipper',
        Numero: 404,
        cep: ' CEP: 96830-585',
        Complemento1: 'Bloco: 12',
        Complemento2: 'apartamento 401'  
    }
   
}

const { Nome, Idade } = pessoa // Usado chaves para extrair um objeto
console.log( Nome, Idade) 

const { Nome: n, Idade: i } = pessoa
console.log(n, i)

const { sobrenome = null, bemHumorado  = true} = pessoa //Quando não existe a variavel transforma em true
console.log(sobrenome, bemHumorado)


const { Endereco: { cep }} = pessoa
console.log( cep)

const { Endereco: {Complemento1}} = pessoa
console.log(Complemento1)

const { Endereco: {Complemento2}} = pessoa
console.log(Complemento2)


const {CPF} = pessoa
console.log(CPF)
