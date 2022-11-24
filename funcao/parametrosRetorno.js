function area(largura, altura, profundidade) {
    const area = largura * altura / profundidade
    if (area > 1000) {
        console.log(`Valor abaixo do esperado: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(20, 120, 2)) 
console.log(area(30, 80, 4)) 
console.log(area(40, 60, 50)) 
console.log(area(50, 80, 4)) 
console.log(area(60, 90, 8)) 
console.log(area(70, 80, 15)) 