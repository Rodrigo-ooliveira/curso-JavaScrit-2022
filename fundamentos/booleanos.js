let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
isAtivo = 1
console.log(!!isAtivo) // !! comfirma se é verdadeiro
console.log(!isAtivo) // ! comfirma se é falso


console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!'Texto')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true)) 

console.log('Os falsos...')
console. log(!!0)
console. log(!!'')
console. log(!!null)
console. log(!!NaN)
console. log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa')) // entre parenteses mostra se verdadeiro ou faslo
console.log(!!'' || null || 0 || 'epa') // fora escreve o primeiro valor verdadeiro que encontrou
console.log(!!'' || null || 0 || 1234 || 'epa') 

let nome = ''
console.log(nome || 'Email errado')
