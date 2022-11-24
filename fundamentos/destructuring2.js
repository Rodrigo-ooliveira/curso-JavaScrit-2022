//  destructuring em Array
const [a] = [10]
console.log(a)

const[ n1, , n3, , n5, n6 =10] = [9, 2, 3, 7,]
console.log(n1, n3, n5, n6)
console.log(n1)
console.log(n5)
console.log(n3)
console.log(n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // não fazer no array,somente didática
console.log(nota)

