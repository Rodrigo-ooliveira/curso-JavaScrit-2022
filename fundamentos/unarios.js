let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)  //só vai ser executado o decremento após a a comparação
console.log(num1 === num2)

