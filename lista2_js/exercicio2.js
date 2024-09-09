/*
2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: "Livro1",
    autor: "autor1",
    anoPublicacao: "1990",
    genero: "genero1"
}

let editoraExiste = false

for(let l in livro){
if(l === "editora"){
    editoraExiste = true
}
}

if(editoraExiste === false){
    livro.editora = "editora1"
}

console.log(livro)

