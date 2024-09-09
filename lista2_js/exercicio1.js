/*
1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

let carro = {
    marca: "ford",
    modelo: "focus",
    ano: 2020,
    cor: "preto"
}

for(let c in carro){
    
    console.log(c + ": " + carro[c])

}