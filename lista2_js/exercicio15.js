/*
15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

let transacoes = [
    {
        tipo: "entrada",
        valor: 1500
    },
    {
        tipo: "saída",
        valor: 500
    },
    {
        tipo: "entrada",
        valor: 2000
    }
];

let saldo = 0;

transacoes.forEach(tran => {
if(tran.tipo == "entrada"){
    saldo+= tran.valor
}

if(tran.tipo == "saída"){
    saldo-= tran.valor
}

})

console.log("Saldo final: " + saldo)