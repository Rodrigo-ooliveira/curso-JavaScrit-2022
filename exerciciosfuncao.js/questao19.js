/* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */

function calcularVenda(codigoProduto, qtd, produto) {
    switch (codigoProduto) {
        case 100:
            return 'R$ ' + qtd * 3 + ' Cachorro-quente'
        case 200:
            return 'R$ ' + qtd * 4
        case 300:
            return 'R$ ' +qtd * 5.5
        case 400:
            return 'R$ ' + qtd * 7.5
        case 500:
            return 'R$ ' + qtd * 3.5
        case 600:
            return 'R$ ' + qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
