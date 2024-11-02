function addItem() {
    let item = document.getElementById("item").value
    if (item == "") {
        alert("Defina alguma tarefa!")
        return
    }
    let lista = document.getElementById("lista")
    let itemLista = document.createElement("li")
    let span = document.createElement("span")
    span.classList.add("truncate")
    span.innerHTML = item

    itemLista.appendChild(span)

    let key = Date.now().toString();

    lista.appendChild(itemLista)

    let editarBtn = document.createElement("button")
    editarBtn.innerHTML = "Editar"
    editarBtn.onclick = function () {
        editItem(itemLista, span.textContent, key);
    };

    let deletarBtn = document.createElement("button")
    deletarBtn.innerHTML = "Deletar"
    deletarBtn.onclick = function () {
        deleteItem(itemLista, key);
    };

    let select = document.createElement("select")

    let pendente = document.createElement("option")
    pendente.innerHTML = "Pendente"
    let andamento = document.createElement("option")
    andamento.innerHTML = "Em andamento"
    let concluido = document.createElement("option")
    concluido.innerHTML = "Concluído"

    let btnDiv = document.createElement("div")
    btnDiv.classList.add("botoesDiv")
    itemLista.appendChild(btnDiv)
    btnDiv.appendChild(editarBtn)
    btnDiv.appendChild(deletarBtn)

    itemLista.appendChild(select)

    select.appendChild(pendente)
    select.appendChild(andamento)
    select.appendChild(concluido)

    let tarefa = {
        nome: item,
        status: "Pendente"
    }

    select.addEventListener("change", function (event) {
        selectEdit(span.textContent, key, event);
    });


    localStorage.setItem(key, JSON.stringify(tarefa));

    listStatus()
}

function selectEdit(itemLista, key, event) {

    let valorSelecionado = event.target.value;
    let nomeTarefa = itemLista

    let tarefa = {
        nome: nomeTarefa,
        status: valorSelecionado
    }

    localStorage.setItem(key, JSON.stringify(tarefa));
    listStatus()

}

function deleteItem(item, key) {
    let ul = document.getElementById("lista");
    ul.removeChild(item);
    localStorage.removeItem(key);
    listStatus()
}

function loadList() {
    let lista = document.getElementById("lista");

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        let item = JSON.parse(localStorage.getItem(key));

        let itemLista = document.createElement("li");
        let span = document.createElement("span")
        span.classList.add("truncate")
        span.innerHTML = item.nome
        itemLista.appendChild(span)

        let editarBtn = document.createElement("button");
        editarBtn.innerHTML = "Editar";
        editarBtn.onclick = function () {
            editItem(itemLista, span.textContent, key);
        };

        let deletarBtn = document.createElement("button");
        deletarBtn.innerHTML = "Deletar";
        deletarBtn.onclick = function () {
            deleteItem(itemLista, key);
        };

        let btnDiv = document.createElement("div")
        btnDiv.classList.add("botoesDiv")
        itemLista.appendChild(btnDiv)
        btnDiv.appendChild(editarBtn)
        btnDiv.appendChild(deletarBtn)

        lista.appendChild(itemLista);

        let select = document.createElement("select")

        let pendente = document.createElement("option")
        pendente.innerHTML = "Pendente"
        let andamento = document.createElement("option")
        andamento.innerHTML = "Em andamento"
        let concluido = document.createElement("option")
        concluido.innerHTML = "Concluído"

        select.addEventListener("change", function (event) {
            selectEdit(span.textContent, key, event);
        });

        itemLista.appendChild(select)

        select.appendChild(pendente)
        select.appendChild(andamento)
        select.appendChild(concluido)

        select.value = item.status
    }

    listStatus()
}


function editItem(itemLista, span, key) {
    let elSpan = itemLista.querySelector("span")
    let novoValor = prompt("Editar item:", span);
    if (novoValor) {
        elSpan.innerHTML = novoValor;
        let selectElement = itemLista.querySelector("select");

        if (selectElement) {
            let valorSelecionado = selectElement.value;
            localStorage.setItem(key, JSON.stringify({ nome: novoValor, status: valorSelecionado }));
        }

    }

}


function listStatus() {
    let lista = document.getElementById("lista")
    const quantidadeDeItens = lista.getElementsByTagName('li').length;
    let andamentoCont = 0;
    let concluidoCont = 0;
    let pendenteCont = 0;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);


        let item = JSON.parse(localStorage.getItem(key));

        if (item.status == "Pendente") {
            pendenteCont++
        }
        else if (item.status == "Concluído") {
            concluidoCont++
        }
        else if (item.status == "Em andamento") {
            andamentoCont++
        }


    }

    let info = document.getElementById("info")
    if (quantidadeDeItens == 0) {
        info.innerHTML = "Sem tarefas"
    }
    else {
        info.innerHTML = ""
    }

    let con = document.getElementById("conText")
    let an = document.getElementById("anText")
    let pen = document.getElementById("penText")
    let total = document.getElementById("totalText")

    con.innerHTML = `Concluídos: ${concluidoCont}`
    an.innerHTML = `Em andamento: ${andamentoCont}`
    pen.innerHTML = `Pendentes: ${pendenteCont}`
    total.innerHTML = `Total: ${quantidadeDeItens}`


}

function clearInput() {
    let input = document.getElementById("item")
    input.value = ""
}

loadList()

