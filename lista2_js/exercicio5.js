/*
5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [
    {
        nome: "Davi",
        nota1: 7,
        nota2: 7
    },

    {
        nome: "Ana",
        nota1: 6,
        nota2: 5
    },

    {
        nome: "Felipe",
        nota1: 8,
        nota2: 3
    }
]


for(let aluno of alunos){
let media = (aluno.nota1 + aluno.nota2) / 2
console.log(`A média do aluno ${aluno.nome} é ${media}`)
}