/*
4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

let pessoas = [
    {
        nome: "Davi",
        cidade: "Lajeado",
        idade: 22
    },
    {
        nome: "Jorge",
        cidade: "POA",
        idade: 20
    },
    {
        nome: "Andre",
        cidade: "Floripa",
        idade: 30
    }
];

for (let pessoa of pessoas) {
    console.log("Dados: " + pessoa.nome, pessoa.cidade, pessoa.idade);
}
