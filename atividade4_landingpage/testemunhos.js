fetch('https://randomuser.me/api/?results=8')
    .then(async res => {
        if (!res.ok) {
            throw new Error("Ocorreu um erro: " + res.status)
            
        }

        let data = await res.json();
        console.log(data);
        console.log(data.results.length);

        let divPai = document.getElementById("testemunhos");
        for (let i = 0; i < data.results.length; i++) {
           
            let card = document.createElement("div");
            card.classList.add("testemunho-card");

            let img = document.createElement("img");
            img.classList.add("person-img");
            img.src = data.results[i].picture.large;
            img.alt = `${data.results[i].name.first} ${data.results[i].name.last}`;

            let h4 = document.createElement("h4");
            h4.classList.add("person-name");
            h4.innerHTML = `${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}`;

            let pCountry = document.createElement("p");
            pCountry.innerHTML = `<strong>Country:</strong> ${data.results[i].location.country}`;

            let pGender = document.createElement("p");
            pGender.innerHTML = `<strong>Gender:</strong> ${data.results[i].gender}`;

            card.appendChild(img);
            card.appendChild(h4);
            card.appendChild(pCountry);
            card.appendChild(pGender);
            
            divPai.appendChild(card);
        }

    })
    .catch(error => console.error("Erro na requisição:", error));
