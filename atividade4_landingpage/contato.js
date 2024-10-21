(function () {
    emailjs.init({
        publicKey: "",
    });
})();

function sendEmail() {

    const serviceId = ""
    const templateId = ""

    let fone = document.getElementById("phone").value
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    if (!fone || !name || !email || !message) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    else {
        let emailContent = {
            to_name: name,
            from_name: "Davi",
            message: message
        }

        emailjs.send(serviceId, templateId, emailContent).
            then(function (response) {
                console.log("Email enviado com sucesso!", response.status, response.text);
                alert("Email enviado com sucesso!")
            }, function (error) {
                console.log("Erro ao enviar o email:", error);
            });
    }


}