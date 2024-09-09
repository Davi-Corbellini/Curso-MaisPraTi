/*
11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    {
        cliente: "c1",
        produto: "p1",
        qtde: 2
    },

    {
        cliente: "c2",
        produto: "p2",
        qtde: 1
    },

    {
        cliente: "c3",
        produto: "p3",
        qtde: 4
    },
]

let qtdeProdutos = {}
pedidos.forEach(pedido => {
qtdeProdutos[pedido.cliente] = pedido.qtde
})

console.log(qtdeProdutos)