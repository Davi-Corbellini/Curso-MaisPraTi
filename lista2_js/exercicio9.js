/*
9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

let clientes = [
    {
        nome: "Davi",
        cidade: "Lajeado",
        idade: 22
    },
    {
        nome: "Jorge",
        cidade: "POA",
        idade: 31
    },
    {
        nome: "Andre",
        cidade: "Floripa",
        idade: 31
    }
]

let cont = 0;

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        cont++
    }
})

console.log(`Quantidade de clientes com mais de 30 anos: ${cont}`)