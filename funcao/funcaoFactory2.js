function criarProduto( nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 'R$3500.00'))
console.log(criarProduto('Celular', 'R$2500.00'))
console.log(criarProduto('Ipad', 'R$1500.00'))
console.log(criarProduto('Teclado Mecânico','R$350.00'))
console.log(criarProduto('Mouse Optico', 'R$250.00'))
console.log(criarProduto('PC Gamer', 'R$4500.00'))