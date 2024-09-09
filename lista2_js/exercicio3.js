/*
3. Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

let produto = {
    valor: 100,
    qtde: 7,
    altura: 5,
    largura: 5,
    nome: "produto1"
}

function verifyProduct(product){
    let produtoNovo = {}
    for(let p in product){
        if(typeof product[p] === "number" && product[p] > 5){
            produtoNovo[p] = product[p]
        }
    }

    return produtoNovo
}

console.log(verifyProduct(produto))