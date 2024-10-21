function getApi() {
    fetch('https://api.github.com/users/Davi-Corbellini/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error("Ocorreu um erro: " + res.status)
            }

            let data = await res.json()
            console.log(data)

            console.log(data.length)

            let selectedAttributes = data.map(({ name, created_at, description, language, svn_url }) => ({ name, created_at, description, language, svn_url }));
            console.log(selectedAttributes)

            let divProject = document.getElementById("projetos")


            for (let j = 0; j < 3; j++) {
                let staticProject = {
                    name: "NomeEstatico" + j,
                    created_at: "2024-09-02T19:42:53Z",
                    description: "DescricaoEstatica" + j,
                    language: "LinguagemEstatica" + j,
                    svn_url: "https://google.com"
                };

                selectedAttributes.push(staticProject);

            }

            selectedAttributes.forEach(element => {

                console.log(element)


                let divCard = document.createElement("div");
                divCard.classList.add("project-card");
                divProject.appendChild(divCard);


                let h1Title = document.createElement("h1");
                h1Title.innerHTML = element.name;
                divCard.appendChild(h1Title);


                if (element.created_at) {
                    let date = new Date(element.created_at);
                    let formattedDate = date.toLocaleDateString('pt-BR');
                    let pDate = document.createElement("p");
                    pDate.innerHTML = "<strong>Data de criação: </strong>" + formattedDate;
                    divCard.appendChild(pDate);
                }


                if (element.language) {
                    let pLanguage = document.createElement("p");
                    pLanguage.innerHTML = "<strong>Linguagem: </strong>" + element.language;
                    divCard.appendChild(pLanguage);
                }


                if (element.description) {
                    let pDescription = document.createElement("p");
                    pDescription.innerHTML = "<strong>Descrição: </strong>" + element.description;
                    divCard.appendChild(pDescription);
                }


                if (element.svn_url) {
                    let pUrl = document.createElement("a");
                    pUrl.href = element.svn_url;
                    pUrl.target = "_blank";
                    pUrl.innerHTML = "Ver projeto";
                    divCard.appendChild(pUrl);
                }


            });

        })
}

getApi()

