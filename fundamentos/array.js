/* é uma forma de agrupar multiplos 
valores numa estrutura só, apartir de um único 
identificador, essa estrutura é uma estrutura indexada,
acesso aos elementos do array apartir de um número
o primeiro elemento começa com o número 0.
É eterogenero pode se, número, srting, booleanos
o array eu js é flexivel
*/
const valores = [7.7, 'rodrigo', 8.5, 'mae']
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

console.log(valores)
console.log(valores.length) // diz quantos elementos estão no array

valores.push({id: 3},false,null,'teste') // adciona novos elementos no array
console.log(valores)
console.log(valores.pop()) // retira o último elemento do array
delete valores[0] // retira o atributo especificado sempre entre conchetes 
console.log(valores)

console.log(typeof valores)



