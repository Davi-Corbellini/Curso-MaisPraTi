/*
12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

let estoques = [
    {
        produto: "p1",
        qtde: 1,
        min: 2
    },

    {
        produto: "p2",
        qtde: 3,
        min: 5
    },

    {
        produto: "p3",
        qtde: 2,
        min: 1
    }
]

estoques.forEach(estoque => {
    if(estoque.qtde < estoque.min){
        estoque.qtde *= 2;
        console.log("Estoque atualizado - Nome: " + estoque.produto + " Qtde: " +  estoque.qtde + " Min: " + estoque.min)
    }
})

