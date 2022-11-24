const prod1 = {} // entre chaves 
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1.parcelado = prod1.preco / 10
prod1['Desconto a vista'] = 0.4 // evitar atributos com espaço 

console.log(prod1)

const prod2 = {
    Preco: 79.90, 
    obj: {
        parcelado: 1,
        obj: {
            Cartao: 2,
        }
    }
} 

console.log(prod2)
