/*
14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/

let empresa = {
    nome: "Tech Solutions",
    departamentos: [
        {
            nome: "Desenvolvimento",
            funcionarios: [
                { nome: "Ana", cargo: "Desenvolvedora", idade: 28 },
                { nome: "Pedro", cargo: "Desenvolvedor", idade: 32 },
                { nome: "Joana", cargo: "Líder Técnico", idade: 35 }
            ]
        },
        {
            nome: "Recursos Humanos",
            funcionarios: [
                { nome: "Maria", cargo: "Gerente de RH", idade: 40 },
                { nome: "Carlos", cargo: "Analista de RH", idade: 29 }
            ]
        }
    ]
};


for(dep of empresa.departamentos){
for(fun of dep.funcionarios){
    console.log("Departamento: " + dep.nome + " - Funcionario: " + fun.nome)
}
}