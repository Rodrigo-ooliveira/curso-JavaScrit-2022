const escola = "Cod3r"

console.log(escola.charAt(0)) // mostra a letra do indice da string
console.log(escola.charAt(1))
console.log(escola.charAt(2)) 
console.log(escola.charAt(3)) 
console.log(escola.charAt(4))

console.log(escola.charCodeAt(0)) // retorna o valor unicode do caracter
console.log(escola.charCodeAt(1)) 
console.log(escola.charCodeAt(2))
console.log(escola.charCodeAt(3))
console.log(escola.charCodeAt(4)) 

console.log(escola.indexOf('3'))
console.log(escola.substring(1)) // mostra apartir do indice "1"
console.log(escola.substring(0, 2)) // vai do indice indicado até o outro indicado

console.log("Escola " .concat(escola).concat("!")) // escreve o especificado na tela
console.log("Escola " + escola + "!") // "+" pode substituir a função concat
console.log(escola.replace(3, 'e')) //substitui o caracter
console.log('Rodrigo, Carlos, Camila, Juliana'.split(',')) // define o separador para gerar os arrays
