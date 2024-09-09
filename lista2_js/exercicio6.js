/*
6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

let funcionarios = [
    {
        nome: "Davi",
        cargo: "cargo1",
        salario: 2000
    },

    {
        nome:"Pedro",
        cargo: "cargo2",
        salario: 1000
    }
]

for(let funcionario of funcionarios){
if(funcionario.salario > 1000){
    console.log(`Funcionário selecionado: ${funcionario.nome}`)
}
}