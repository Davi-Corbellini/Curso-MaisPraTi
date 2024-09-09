/*
13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

let carrinho = {

cliente: "c1",

itens: [
    {
        nome: "p1",
        qtde: 2,
        precoUnitario: 50
    },

    {
        nome: "p2",
        qtde: 1,
        precoUnitario: 25
    },

    {
        nome: "p3",
        qtde: 4,
        precoUnitario: 30
    }
]

}

let valorTotal = 0;

carrinho.itens.forEach(item => {
    let valorProduto = item.precoUnitario * item.qtde
    valorTotal+= valorProduto;
})

console.log("Valor total dos itens do carrinho: " + valorTotal)