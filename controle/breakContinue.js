const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // interrope o laço e passa para o proxímo sentença de codigo fora do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // interrope a repetição atual e passa direto para proxíma repetição, não sai do laço
    }
    console.log(`${y} = ${nums[y]}`)
}