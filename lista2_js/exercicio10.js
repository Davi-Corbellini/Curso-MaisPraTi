/*
10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

let vendas = [
    {
        produto: "p1",
        qtde: 2,
        valor: 100
    },

    {
        produto: "p2",
        qtde: 1,
        valor: 25
    },

    {
        produto: "p3",
        qtde: 4,
        valor: 50
    }
]


vendas.forEach(venda => {
    let valorTotal = venda.valor * venda.qtde
    console.log(`Valor total do produto ${venda.produto}: ${valorTotal}`)
})