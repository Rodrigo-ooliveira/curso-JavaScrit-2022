// estrategia 1 para gerar valor padrão   
function soma1 (a, b, c) { 
    a = a || 1
    b = b || 2
    c = c || 3
    return a + b + c
}

console.log(soma1(), soma1(4), soma1(2, 3, 5), soma1(9, 12, 31), soma1(0, 0 , 0))

// estrategia 2, 3 e 4 para gerar valor padrão 

function soma2(a, b, c) {
a = a !== undefined ? a : 1       // usar esse modelo quando criar variavel função, para ter valor padrão
b = 1 in arguments ? b : 1       // indice do argumento 2
c = isNaN(c) ? 1 : c            //  estrategia mais segura para números padrões
return a + b + c
}

console.log((soma2()), soma2(3), soma2(1,  2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 2, c = 3) {
    return a + b + c
}
console.log(soma3(1,3,5), soma3(2, 4, 6), soma3(), soma3(3)) // forma preferida