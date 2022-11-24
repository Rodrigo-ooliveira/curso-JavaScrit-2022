const perlita = Number(56)
const turfa = Number(125)
const humus = Number(25)
const vermivulita = Number(50) 
const coco = Number(10) 
const SomaDosPesos = perlita + turfa + humus + vermivulita + coco 
const LitrosSubstrato = SomaDosPesos / 1000 * 572


console.log(SomaDosPesos)
console.log("Substrato preparado em Kilos = " + SomaDosPesos + "Kg")
console.log('Substrato preparado em litros = ' + LitrosSubstrato + "Lts")
console.log(Number.isInteger(perlita)) // Confirma se o número é inteiro
console.log(Number.isInteger(turfa))
console.log(Number.isInteger(humus))
console.log(Number.isInteger(vermivulita))
console.log(Number.isInteger(coco))

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const peso1 = 1
const peso2 = 2

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log( 'Media Final = ' + media.toFixed(2)) // Define numeros de casas depois da virgula
console.log( 'Media Final = ' + media.toString(2)) // Mostra resultado para numero binário
//console.log(typeof Number) // Função
console.log(typeof SomaDosPesos)
console.log(typeof LitrosSubstrato)
console.log(typeof media)



