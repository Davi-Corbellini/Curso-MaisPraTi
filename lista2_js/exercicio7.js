/*
7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

let produtos =[
    {
        nome: "produto1",
        preco: 200,
        desconto: 10
    },

    {
        nome: "produto2",
        preco: 117,
        desconto: 10
    },

    {
        nome: "produto3",
        preco: 300,
        desconto: 10
    }
]

produtos.forEach(produto => {
    let porcentagemDesconto = produto.desconto / 100
    let valorDesconto = produto.preco * porcentagemDesconto
    let valorFinal = produto.preco - valorDesconto
    console.log(`Valor do produto ${produto.nome}: R$ ${valorFinal}`)
})