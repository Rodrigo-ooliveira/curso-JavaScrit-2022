function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 // atributo privado

    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

 
const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

const ford = new Carro(180, 10)
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
ford.acelerar()
console.log(ford.getVelocidadeAtual())

const GM = new Carro(250, 30)
GM.acelerar()
GM.acelerar()
GM.acelerar()
GM.acelerar()
GM.acelerar()
GM.acelerar()
GM.acelerar()

console.log(GM.getVelocidadeAtual())

const pegeot = new Carro(120, 1)
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
pegeot.acelerar()
console.log(pegeot.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
console.log(typeof ford)
console.log(typeof GM)
console.log(typeof pegeot)