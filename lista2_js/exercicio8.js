/*
8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

let filmes = [
    {
        nome: "filme1",
        diretor: "diretor1",
        anolancamento: 2000
    },

    {
        nome: "filme2",
        diretor: "diretor2",
        anolancamento: 2001
    },

    {
        nome: "filme3",
        diretor: "diretor3",
        anolancamento: 2002
    }

]

let nomeFilmes = []

filmes.forEach(filme => {
nomeFilmes.push(filme.nome)
})

console.log(nomeFilmes)